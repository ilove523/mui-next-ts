import { withStyles } from '@material-ui/core';
import React from 'react';

import { layoutStyles } from './styles';
import { PWrapper } from './types';

class Wrapper extends React.Component<PWrapper> {
  render = () => {
    const { children, classes } = this.props;
    return <div className={classes.wrapper}>{children}</div>;
  };
}

export default withStyles(layoutStyles)(Wrapper);
