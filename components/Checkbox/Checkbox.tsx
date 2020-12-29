import { FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import { CheckBoxOutlined } from '@material-ui/icons';
import { ThemeProvider } from 'components/ThemeProvider';
import React from 'react';

import { PCheckbox } from './types';

class Checkbox extends React.Component<PCheckbox> {
  static defaultProps = {
    color: 'default',
  };

  render = () => {
    const {
      color,
      value,
      label,
      formControlLabelProps,
      ...CheckboxProps
    } = this.props;
    return (
      <ThemeProvider color={color}>
        <FormControlLabel
          value={value}
          label={label}
          control={
            <MuiCheckbox
              color="primary"
              checkedIcon={<CheckBoxOutlined />}
              {...CheckboxProps}
            />
          }
          {...formControlLabelProps}
        />
      </ThemeProvider>
    );
  };
}

export default Checkbox;
