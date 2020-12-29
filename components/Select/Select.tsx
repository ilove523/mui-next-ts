import {
  FormControl,
  FormHelperText,
  InputLabel,
  withStyles,
} from '@material-ui/core';
import { MenuListProps } from '@material-ui/core/MenuList';
import { ThemeProvider } from 'components/ThemeProvider';
import React from 'react';

import SelectMulti from './SelectMulti';
import SelectSingle from './SelectSingle';
import { selectStyles } from './styles';
import { ChangeEventHandler, PSelect, SSelect, SelectOption } from './types';

class Select extends React.Component<PSelect, SSelect> {
  static defaultProps = {
    color: 'default',
    options: [],
    multiple: false,
    label: '',
    helperText: '',
    required: false,
    error: false,
    fullWidth: false,
    search: true,
    all: false,
    allValue: 'all',
    allLabel: 'All',
  };

  private __searchRef = React.createRef<HTMLInputElement>();

  constructor(props: PSelect) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  focusSearch = () => {
    if (this.__searchRef.current) {
      this.__searchRef.current.focus();
    }
  };

  handleSearchChange: ChangeEventHandler = event => {
    /**
     * Temporary disable this handler, see the reasons described as below.
     */
    const { value } = event.target;
    this.focusSearch();
    this.setState({ searchValue: value }, this.focusSearch);
  };

  handleMenuListKeyDown: MenuListProps['onKeyDown'] = event => {
    /**
     * Mui MenuList has a keyDown event handler which will auto focus on items
     * whose first case matches the key. This feature can not be disabled for now,
     * and it will prevent handleSearchChange, make search handler do not work as expect.
     * Temporary replace handleSearchChange until mui fix this feature.
     */
    // TODO: remove this hanlder when mui disable keyDown handler.
    const { search } = this.props;
    if (search) {
      const { key } = event;
      if (key.length === 1) {
        const selectionStart = this.__searchRef.current!.selectionStart!;
        this.setState(
          prevState => ({
            searchValue:
              prevState.searchValue.slice(0, selectionStart) +
              key +
              prevState.searchValue.slice(selectionStart),
          }),
          () => {
            this.focusSearch();
            this.__searchRef.current!.setSelectionRange(
              selectionStart + 1,
              selectionStart + 1,
            );
          },
        );
        event.preventDefault();
      }
    }
  };

  handleSearchClear = () => {
    this.setState({ searchValue: '' }, this.focusSearch);
  };

  getOptions = () => {
    const { all, allValue, allLabel } = this.props;
    const { searchValue } = this.state;
    let options: Array<SelectOption>;
    if (!Boolean(searchValue)) {
      options = this.props.options;
    } else {
      options = this.props.options.filter(d => d.label.includes(searchValue));
    }
    if (all) {
      options = [{ value: allValue, label: allLabel } as SelectOption].concat(
        options,
      );
    }
    return options;
  };

  render = () => {
    const {
      options: allOptions,
      color,
      multiple,
      label,
      helperText,
      required,
      error,
      fullWidth,
      FormControlProps,
      InputLabelProps,
      FormHelperTextProps,
      classes,
      ...SelectProps
    } = this.props;
    const { searchValue } = this.state;
    const options = this.getOptions();
    return (
      <ThemeProvider color={color}>
        <FormControl
          fullWidth={fullWidth}
          required={required}
          error={error}
          className={classes.root}
          {...FormControlProps}
        >
          <InputLabel shrink {...InputLabelProps}>
            {label}
          </InputLabel>
          {multiple ? (
            <SelectMulti
              multiple={true}
              searchValue={searchValue}
              searchRef={this.__searchRef}
              options={options}
              onSearchChange={this.handleSearchChange}
              onSearchClear={this.handleSearchClear}
              MenuProps={{
                className: classes.menu,
                variant: 'menu',
                onEntered: this.focusSearch,
                onExited: this.handleSearchClear,
                MenuListProps: {
                  onKeyDown: this.handleMenuListKeyDown,
                },
              }}
              {...SelectProps}
            />
          ) : (
            <SelectSingle
              multiple={false}
              searchValue={searchValue}
              searchRef={this.__searchRef}
              options={options}
              onSearchChange={this.handleSearchChange}
              onSearchClear={this.handleSearchClear}
              MenuProps={{
                className: classes.menu,
                variant: 'menu',
                onEntered: this.focusSearch,
                onExited: this.handleSearchClear,
                MenuListProps: {
                  onKeyDown: this.handleMenuListKeyDown,
                },
              }}
              {...SelectProps}
            />
          )}
          {helperText && (
            <FormHelperText {...FormHelperText}>{helperText}</FormHelperText>
          )}
        </FormControl>
      </ThemeProvider>
    );
  };
}

// @ts-ignore
export default withStyles(selectStyles)(Select);
