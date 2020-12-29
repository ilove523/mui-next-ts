import { createMuiTheme } from '@material-ui/core';
import {
  cyan,
  green,
  grey,
  orange,
  purple,
  red,
} from '@material-ui/core/colors';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import React from 'react';

import { PThemeProvider, ThemeColors } from './types';

const themePrimary = createMuiTheme({
  palette: {
    primary: cyan,
  },
});

const themeSecondary = createMuiTheme({
  palette: {
    primary: purple,
  },
});

const themeSuccess = createMuiTheme({
  palette: {
    primary: green,
  },
});

const themeWarning = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const themeDanger = createMuiTheme({
  palette: {
    primary: red,
  },
});

const themeDefault = createMuiTheme({
  palette: {
    primary: grey,
  },
});

const themes: ThemeColors = {
  primary: themePrimary,
  secondary: themeSecondary,
  success: themeSuccess,
  warning: themeWarning,
  danger: themeDanger,
  default: themeDefault,
};

class ThemeProvider extends React.Component<PThemeProvider> {
  static defaultProps = {
    color: 'default',
  };

  render = () => {
    const { color, children } = this.props;
    const theme = themes[color as string];
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
  };
}

export default ThemeProvider;
