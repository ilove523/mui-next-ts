import { Fab as MuiFab } from '@material-ui/core';
import React from 'react';

import { ThemeProvider } from '../ThemeProvider';
import { PFab } from './types';

class Fab extends React.Component<PFab> {
  static defaultProps = {
    color: 'default',
  };

  render = () => {
    const { color, ...fabProps } = this.props;
    return (
      <ThemeProvider color={color}>
        <MuiFab color="primary" {...fabProps} />
      </ThemeProvider>
    );
  };
}

export default Fab;
