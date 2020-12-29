import { LinearProgress, withStyles } from '@material-ui/core';
import React from 'react';

import { layoutStyles } from './styles';
import { PPageProgress } from './types';

class PageProgress extends React.Component<PPageProgress> {
  render = () => {
    const { classes } = this.props;
    return (
      <LinearProgress variant="indeterminate" className={classes.progress} />
    );
  };
}

export default withStyles(layoutStyles)(PageProgress);
