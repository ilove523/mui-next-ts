import { Omit } from '@material-ui/core';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import { RadioProps } from '@material-ui/core/Radio';
import React from 'react';

import { PThemeProvider } from '../ThemeProvider';

export interface PRadio extends PThemeProvider, Omit<RadioProps, 'color'> {
  value?: string;
  label: React.ReactNode;
  formControlLabelProps?: FormControlLabelProps;
}
