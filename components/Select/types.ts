import { Omit, WithStyles } from '@material-ui/core';
import { FormControlProps } from '@material-ui/core/FormControl';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { SelectProps } from '@material-ui/core/Select';
import { PInput } from 'components/Input';
import { PThemeProvider } from 'components/ThemeProvider';

import { selectStyles } from './styles';

export type ChangeEventHandler = React.ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export type SelectOptionValue = string | number | Array<string>;

export type SelectOptionLabel = string;

export interface SelectInputRef {
  focus: () => void;
  node: HTMLInputElement;
}

export interface SelectOption {
  value: SelectOptionValue;
  label: SelectOptionLabel;
}

export interface PSelectBase
  extends Omit<SelectProps, 'color' | 'classes'>,
    WithStyles<typeof selectStyles> {
  options: Array<SelectOption>;
  search?: boolean;
  all?: boolean;
  allLabel?: SelectOptionLabel;
  allValue?: SelectOptionValue;
}

export interface PSelectSearch extends WithStyles<typeof selectStyles> {
  searchValue: string;
  onSearchChange: ChangeEventHandler;
  searchRef: PInput['inputRef'];
  onSearchClear: () => void;
}

export interface PSelectSingle extends PSelectBase, PSelectSearch {}

export interface PSelectMulti extends PSelectBase, PSelectSearch {}

export interface PSelect extends PSelectBase, PThemeProvider {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  fullWidth: boolean;
  required?: boolean;
  error?: boolean;
  FormControlProps?: FormControlProps;
  InputLabelProps?: InputLabelProps;
  FormHelperTextProps?: FormHelperTextProps;
}

export interface SSelect {
  searchValue: string;
}

export interface DynamicSelectFilters {
  [key: string]: SelectOptionValue;
}

export interface PDynamicSelect extends Omit<PSelect, 'options' | 'classes'> {
  data: Array<any>;
  valueColumn: string;
  labelColumn?: string;
  filters?: DynamicSelectFilters;
}

export interface SDynamicSelect {
  options: Array<SelectOption>;
}
