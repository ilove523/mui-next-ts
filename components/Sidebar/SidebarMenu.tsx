import {
  Collapse,
  Grid,
  List,
  ListItem,
  Paper,
  Popper,
  withStyles,
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';

import SidebarLink from './SidebarLink';
import { sidebarStyles } from './styles';
import { PSidebarMenu, SSidebarMenu } from './types';

class SidebarMenu extends React.Component<PSidebarMenu, SSidebarMenu> {
  static defaultProps = {
    mini: false,
  };

  private __ref: React.RefObject<HTMLButtonElement>;

  constructor(props: PSidebarMenu) {
    super(props);
    this.state = {
      openCollapse: false,
      openPopover: false,
    };
    this.__ref = React.createRef();
  }

  handleToggleCollapse = () => {
    this.setState(prevState => ({
      openCollapse: !prevState.openCollapse,
    }));
  };

  handleOpenPopover = () => {
    this.setState({
      openPopover: true,
    });
  };

  handleClosePopover = () => {
    this.setState({
      openPopover: false,
    });
  };

  render = () => {
    const { mini, icon: Icon, groupName, pages, classes } = this.props;
    const { openCollapse, openPopover } = this.state;
    return mini ? (
      <List
        onMouseEnter={this.handleOpenPopover}
        onMouseLeave={this.handleClosePopover}
        className={classes.menuRoot}
      >
        <Grid container justify="center">
          <ListItem
            button
            divider
            buttonRef={this.__ref}
            className={classNames({
              [classes.menu]: true,
              [classes.menuOpen]: openCollapse,
              [classes.menuClose]: !openCollapse,
            })}
          >
            {Icon && <Icon className={classes.icon} />}
          </ListItem>
        </Grid>
        <Popper
          open={openPopover}
          anchorEl={this.__ref.current}
          placement="right-start"
        >
          <Paper className={classes.popperMenu}>
            {pages.map((page, index) => {
              return <SidebarLink key={index} page={page} mini={mini} />;
            })}
          </Paper>
        </Popper>
      </List>
    ) : (
      <List className={classes.menuRoot}>
        <Grid container justify="center">
          <ListItem
            button
            divider
            onClick={this.handleToggleCollapse}
            className={classNames({
              [classes.menu]: true,
              [classes.menuOpen]: openCollapse,
              [classes.menuClose]: !openCollapse,
            })}
          >
            {Icon && <Icon className={classes.icon} />}
            <div className={classes.flex}>
              <p className={classes.menuText}>{groupName}</p>
            </div>
            {openCollapse ? (
              <KeyboardArrowUp className={classes.icon} />
            ) : (
              <KeyboardArrowDown className={classes.icon} />
            )}
          </ListItem>
        </Grid>
        <Collapse in={openCollapse}>
          {pages.map((page, index) => {
            return <SidebarLink key={index} page={page} mini={mini} />;
          })}
        </Collapse>
      </List>
    );
  };
}

export default withStyles(sidebarStyles)(SidebarMenu);
