import { Button as MuiButton } from '@material-ui/core';
import { ThemeProvider } from 'components/ThemeProvider';
import React from 'react';

import { PButton } from './types';

class Button extends React.Component<PButton> {
  static defaultProps = {
    color: 'default',
  };

  render() {
    const { color, ...buttonProps } = this.props;
    return (
      <ThemeProvider color={color}>
        <MuiButton color="primary" {...buttonProps} />
      </ThemeProvider>
    );
  }
}

export default Button;
