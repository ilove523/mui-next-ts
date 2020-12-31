import { Grid, ListItem, withStyles } from '@material-ui/core';
import { People } from '@material-ui/icons';
import clsx from 'clsx';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React from 'react';

import { sidebarStyles } from './styles';
import { PSidebarLink } from './types';

class SidebarLink extends React.Component<PSidebarLink> {
  render = () => {
    const { page, router, mini, classes } = this.props;
    const { icon: Icon } = page;
    return (
      <Grid container justify="center">
        <Link href={page.to}>
          <ListItem
            button
            className={clsx({
              [classes.menuItem]: true,
              [classes.menuItemHighlight]: page.to === router.pathname,
            })}
          >
            {Icon ? (
              <Icon className={classes.icon} />
            ) : (
              // placeholder, only use in mini mode
              !mini && (
                <People className={clsx(classes.icon, classes.visibleHidden)} />
              )
            )}
            <div className={classes.flex}>
              <p
                className={clsx({
                  [classes.menuItemText]: true,
                  [classes.menuItemTextHighlight]: page.to === router.pathname,
                })}
              >
                {page.name}
              </p>
            </div>
          </ListItem>
        </Link>
      </Grid>
    );
  };
}

// @ts-ignore
export default withStyles(sidebarStyles)(withRouter(SidebarLink));
