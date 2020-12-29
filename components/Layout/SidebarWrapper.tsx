import { withStyles } from '@material-ui/core';
import React from 'react';

import { layoutStyles } from './styles';
import { PSidebarWrapper } from './types';

class SidebarWrapper extends React.Component<PSidebarWrapper> {
  render = () => {
    const { children, classes } = this.props;
    return <div className={classes.sidebarWrapper}>{children}</div>;
  };
}

export default withStyles(layoutStyles)(SidebarWrapper);
