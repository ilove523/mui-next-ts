import {
  Drawer,
  IconButton,
  List,
  createStyles,
  withStyles,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import {
  ArrowBack as ArrowBackIcon,
  HelpOutline as FAQIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryIcon,
  NotificationsNone as NotificationsIcon,
  QuestionAnswer as SupportIcon,
  BorderAll as TableIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
} from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';

import Dot from './Dot';
import SidebarLink from './SidebarLink';

const SidebarArray = [
  { id: 0, label: 'Dashboard', link: '/app/dashboard', icon: <HomeIcon /> },
  {
    id: 1,
    label: 'Typography',
    link: '/app/typography',
    icon: <TypographyIcon />,
  },
  { id: 2, label: 'Tables', link: '/app/tables', icon: <TableIcon /> },
  {
    id: 3,
    label: 'Notifications',
    link: '/app/notifications',
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: 'UI Elements',
    link: '/app/ui',
    icon: <UIElementsIcon />,
    children: [
      { label: 'Icons', link: '/app/ui/icons' },
      { label: 'Charts', link: '/app/ui/charts' },
      { label: 'Maps', link: '/app/ui/maps' },
    ],
  },
  { id: 5, type: 'divider' },
  { id: 6, type: 'title', label: 'HELP' },
  { id: 7, label: 'Library', link: '', icon: <LibraryIcon /> },
  { id: 8, label: 'Support', link: '', icon: <SupportIcon /> },
  { id: 9, label: 'FAQ', link: '', icon: <FAQIcon /> },
  { id: 10, type: 'divider' },
  { id: 11, type: 'title', label: 'PROJECTS' },
  {
    id: 12,
    label: 'My recent',
    link: '',
    icon: <Dot size="small" color="secondary" />,
  },
  {
    id: 13,
    label: 'Starred',
    link: '',
    icon: <Dot size="small" color="primary" />,
  },
  {
    id: 14,
    label: 'Background',
    link: '',
    icon: <Dot size="small" color="secondary" />,
  },
];

const SidebarView = ({
  classes,
  theme,
  toggleSidebar,
  isSidebarOpened,
  isPermanent,
  location,
}) => {
  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.mobileBackButton}>
        <IconButton onClick={toggleSidebar}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {SidebarArray.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );
};

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      top: theme.spacing.length * 8,
      [theme.breakpoints.down('sm')]: {
        top: 0,
      },
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing.length * 7 + 40,
      [theme.breakpoints.down('sm')]: {
        width: drawerWidth,
      },
    },
    toolbar: {
      ...theme.mixins.toolbar,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.length * 3,
    },
    mobileBackButton: {
      marginTop: theme.spacing.length * 0.5,
      marginLeft: theme.spacing.length * 3,
      [theme.breakpoints.only('sm')]: {
        marginTop: theme.spacing.length * 0.625,
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });

export default withStyles(styles, { withTheme: true })(SidebarView);
