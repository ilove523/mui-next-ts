import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Inbox as InboxIcon } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import Dot from '../Dot';
// styles
import useStyles from './styles';

export interface ISidebarLink {
  link?: string;
  icon?: React.ReactElement;
  label?: string;
  children?: Array<{
    link: string;
  }>;
  location?: {
    pathname: string;
  };
  isSidebarOpened?: boolean;
  nested?: boolean;
  type?: string;
  classes?: object;
}

const SidebarLink = ({
  link,
  icon,
  label,
  children,
  location,
  isSidebarOpened,
  nested,
  type,
}: ISidebarLink): React.ReactElement => {
  const classes = useStyles();

  // local
  const [isOpen, setIsOpen] = React.useState(false);
  const isLinkActive =
    link &&
    (location.pathname === link || location.pathname.indexOf(link) !== -1);

  if (type === 'title')
    return (
      <Typography
        className={clsx(classes.linkText, classes.sectionTitle, {
          [classes.linkTextHidden]: !isSidebarOpened,
        })}
      >
        {label}
      </Typography>
    );

  if (type === 'divider') return <Divider className={classes.divider} />;

  if (!children)
    return (
      <ListItem
        button
        component={link && Link}
        to={link}
        className={classes.link}
        classes={{
          root: clsx(classes.linkText, {
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested,
          }),
        }}
        disableRipple
      >
        <ListItemIcon
          className={clsx(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {nested ? (
            <Dot size="small" color={isLinkActive && 'primary'} />
          ) : (
            icon
          )}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: clsx(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
      </ListItem>
    );

  return (
    <>
      <ListItem
        button
        component={link && Link}
        onClick={toggleCollapse}
        className={classes.link}
        to={link}
        disableRipple
      >
        <ListItemIcon
          className={clsx(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {icon ? icon : <InboxIcon />}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: clsx(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
      </ListItem>
      {children && (
        <Collapse
          in={isOpen && isSidebarOpened}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        >
          <List component="div" disablePadding>
            {children.map(child => (
              <SidebarLink
                key={child && child.link}
                location={location}
                isSidebarOpened={isSidebarOpened}
                classes={classes}
                nested
                {...child}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );

  // ###########################################################

  function toggleCollapse(e) {
    if (isSidebarOpened) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }
};

export default SidebarLink;
