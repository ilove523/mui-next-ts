import { Omit } from '@material-ui/core';
import { FormControlProps } from '@material-ui/core/FormControl';
import { PInput } from 'components/Input';
import { ReactDatePickerProps } from 'react-datepicker';

import { PThemeProvider } from '../ThemeProvider';

export interface PDatePicker extends PThemeProvider, ReactDatePickerProps {
  label?: PInput['label'];
  InputProps?: Omit<PInput, 'classes'>;
  FormControlProps?: FormControlProps;
}
