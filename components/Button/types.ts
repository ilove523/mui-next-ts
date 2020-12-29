import { Omit } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { FabProps } from '@material-ui/core/Fab';
import { PThemeProvider } from 'components/ThemeProvider';

export interface PButton extends PThemeProvider, Omit<ButtonProps, 'color'> {}

export interface PFab extends PThemeProvider, Omit<FabProps, 'color'> {}
