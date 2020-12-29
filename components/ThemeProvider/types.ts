import { Theme } from '@material-ui/core';

export type ThemeColorKeys =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'default';

export interface PThemeProvider {
  color?: ThemeColorKeys;
}

export interface ThemeColors {
  primary: Theme;
  secondary: Theme;
  success: Theme;
  warning: Theme;
  danger: Theme;
  default: Theme;
  [key: string]: Theme;
}
