import { MenuItem, Select, withStyles } from '@material-ui/core';
import React from 'react';

import SelectSearch from './SelectSearch';
import { selectStyles } from './styles';
import { PSelectSingle, SelectOption } from './types';

class SelectSingle extends React.Component<PSelectSingle> {
  isSelected = (optionValue: SelectOption['value']): boolean => {
    const { value } = this.props;
    return optionValue === value;
  };

  render = () => {
    const {
      options,
      search,
      searchValue,
      onSearchChange,
      onSearchClear,
      searchRef,
      classes,
      all,
      allValue,
      allLabel,
      ...SelectProps
    } = this.props;
    return (
      <Select {...SelectProps}>
        {search && (
          <SelectSearch
            searchValue={searchValue}
            searchRef={searchRef}
            onSearchChange={onSearchChange}
            onSearchClear={onSearchClear}
          />
        )}
        {options.map((d, index) => {
          return (
            <MenuItem
              key={index}
              selected={this.isSelected(d.value)}
              value={d.value}
              className={classes.menuItem}
              classes={{
                selected: classes.menuItemHighlight,
              }}
            >
              {d.label}
            </MenuItem>
          );
        })}
      </Select>
    );
  };
}

export default withStyles(selectStyles)(SelectSingle);
