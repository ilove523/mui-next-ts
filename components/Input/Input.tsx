import {
  FormControl,
  FormHelperText,
  InputLabel,
  Input as MuiInput,
  withStyles,
} from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';
import classNames from 'classnames';
import React from 'react';

import { ThemeProvider } from '../ThemeProvider';
import { inputStyles } from './styles';
import { PInput } from './types';

class Input extends React.Component<PInput> {
  static defaultProps = {
    label: '',
    helperText: '',
    required: false,
    error: false,
    fullWidth: false,
    clearable: false,
  };

  private inputRef = React.createRef<HTMLInputElement>();

  handleClear = () => {
    const { name, onChange, onClear } = this.props;
    if (onClear) {
      onClear();
    } else {
      const elem = this.inputRef.current!;
      const event = new Event('change');
      elem.addEventListener('change', onChange!, false);
      elem.name = name!;
      elem.value = '';
      elem.dispatchEvent(event);
      elem.focus();
    }
  };

  render = () => {
    const {
      color,
      label,
      value,
      helperText,
      fullWidth,
      required,
      error,
      clearable,
      FormControlProps,
      InputLabelProps,
      FormHelperTextProps,
      classes,
      ...InputProps
    } = this.props;
    return (
      <ThemeProvider color={color}>
        <FormControl
          fullWidth={fullWidth}
          required={required}
          error={error}
          className={classes.root}
          {...FormControlProps}
        >
          <InputLabel {...InputLabelProps}>{label}</InputLabel>
          <MuiInput
            value={value}
            endAdornment={
              clearable && Boolean(value) ? (
                <Clear
                  className={classNames({
                    [classes.icon]: true,
                    [classes.clear]: true,
                  })}
                  onClick={this.handleClear}
                />
              ) : null
            }
            inputRef={this.inputRef}
            {...InputProps}
          />
          {helperText && (
            <FormHelperText {...FormHelperTextProps}>
              {helperText}
            </FormHelperText>
          )}
        </FormControl>
      </ThemeProvider>
    );
  };
}

export default withStyles(inputStyles)(Input);
