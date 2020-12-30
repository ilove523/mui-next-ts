import { Grid, Hidden, Typography, withStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { pages } from 'components/Sidebar/SidebarData';
import { Page } from 'components/Sidebar/types';
import { withRouter } from 'next/router';
import React from 'react';

import { headerStyles } from './styles';
import { PHeader } from './types';

class Header extends React.Component<PHeader> {
  getPageName = (): string => {
    const { router } = this.props;
    const curPage: Page | undefined = pages.find(d => d.to === router.pathname);
    return curPage ? curPage.name : '';
  };

  render = () => {
    const { onToggleMini, onToggleRwd, children, classes } = this.props;
    const pageName = this.getPageName();
    return (
      <div className={classes.root}>
        <div className={classes.flex}>
          <Grid container alignItems="center">
            <Hidden mdDown>
              <Menu className={classes.menuToggler} onClick={onToggleMini} />
            </Hidden>
            <Hidden lgUp>
              <Menu className={classes.menuToggler} onClick={onToggleRwd} />
            </Hidden>
            <Typography variant="body2">{pageName}</Typography>
          </Grid>
        </div>
        {children}
      </div>
    );
  };
}

// There is a bug in withRouter type checking. Keep it quiet until fixed.
// @ts-ignore
export default withStyles(headerStyles)(withRouter(Header));
