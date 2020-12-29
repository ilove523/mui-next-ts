import { FormControlLabel, Radio as MuiRadio } from '@material-ui/core';
import { ThemeProvider } from 'components/ThemeProvider';
import React from 'react';

import { PRadio } from './types';

class Radio extends React.Component<PRadio> {
  static defaultProps = {
    color: 'default',
  };

  render = () => {
    const {
      color,
      value,
      label,
      formControlLabelProps,
      ...RadioProps
    } = this.props;
    return (
      <ThemeProvider color={color}>
        <FormControlLabel
          value={value}
          label={label}
          control={<MuiRadio color="primary" {...RadioProps} />}
          {...formControlLabelProps}
        />
      </ThemeProvider>
    );
  };
}

export default Radio;
