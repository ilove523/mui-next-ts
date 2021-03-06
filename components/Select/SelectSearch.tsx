import { withStyles } from '@material-ui/core';
import { Close, Search } from '@material-ui/icons';
import clsx from 'clsx';
import { Input } from 'components/Input';
import React from 'react';

import { selectStyles } from './styles';
import { PSelectSearch } from './types';

class SelectSearch extends React.Component<PSelectSearch> {
  render = () => {
    const {
      searchValue,
      searchRef,
      onSearchChange,
      onSearchClear,
      classes,
    } = this.props;
    return (
      <Input
        fullWidth
        value={searchValue}
        inputRef={searchRef}
        onChange={onSearchChange}
        startAdornment={
          <Search
            className={clsx({
              [classes.icon]: true,
              [classes.iconSearch]: true,
            })}
          />
        }
        endAdornment={
          <Close
            onClick={onSearchClear}
            className={clsx({
              [classes.icon]: true,
              [classes.iconClear]: true,
            })}
          />
        }
        FormControlProps={{
          className: classes.searchContainer,
        }}
      />
    );
  };
}

export default withStyles(selectStyles)(SelectSearch);
