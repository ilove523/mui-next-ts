import { withStyles } from '@material-ui/core';
import React from 'react';

import { layoutStyles } from './styles';
import { PMainPanel } from './types';

class MainPanel extends React.Component<PMainPanel> {
  render = () => {
    const { children, classes, ...divProps } = this.props;
    return (
      <div className={classes.mainPanel} {...divProps}>
        {children}
      </div>
    );
  };
}

export default withStyles(layoutStyles)(MainPanel);
