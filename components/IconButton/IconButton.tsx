import { IconButton as MuiIconButton } from '@material-ui/core';
import React from 'react';

import { ThemeProvider } from '../ThemeProvider';
import { PIconButton } from './types';

class IconButton extends React.Component<PIconButton> {
  static defaultProps = {
    color: 'default',
  };

  render = () => {
    const { color, ...IconButtonProps } = this.props;
    return (
      <ThemeProvider color={color}>
        <MuiIconButton color="primary" {...IconButtonProps} />
      </ThemeProvider>
    );
  };
}

export default IconButton;
