import { Tooltip, withStyles } from '@material-ui/core';
import { Clear, Search as SearchIcon } from '@material-ui/icons';
import classNames from 'classnames';
import { Input } from 'components/Input';
import React from 'react';

import { toolbarStyles } from './styles';
import { PSearch, SSearch } from './types';

class Search extends React.Component<PSearch, SSearch> {
  private inputRef = React.createRef<HTMLInputElement>();

  constructor(props: PSearch) {
    super(props);
    this.state = {
      open: false,
      disableUnderline: true,
    };
  }

  handleOpen = () => {
    this.inputRef.current!.focus();
    this.setState({
      open: true,
      disableUnderline: false,
    });
  };

  handleClose = () => {
    const { onClear } = this.props;
    this.inputRef.current!.blur();
    this.setState({ open: false });
    onClear();
  };

  handleDisableUnderline = () => {
    const { open } = this.state;
    if (!open) {
      this.setState({ disableUnderline: true });
    }
  };

  render = () => {
    const { classes, ...InputProps } = this.props;
    const { open, disableUnderline } = this.state;
    return (
      <Tooltip title="搜尋資料" classes={{ popper: classes.tooltip }}>
        <Input
          {...InputProps}
          inputRef={this.inputRef}
          color="secondary"
          disableUnderline={disableUnderline}
          startAdornment={
            <SearchIcon
              className={classNames(classes.icon, {
                [classes.iconSearchInput]: open,
                [classes.iconClickable]: !open,
                [classes.iconHighlight]: !open,
              })}
              onClick={open ? undefined : this.handleOpen}
            />
          }
          endAdornment={
            open && (
              <Clear
                className={classNames(
                  classes.icon,
                  classes.iconClickable,
                  classes.iconHighlight,
                )}
                onClick={this.handleClose}
              />
            )
          }
          FormControlProps={{
            className: classNames(
              classes.searchContainer,
              classNames({
                [classes.searchContainerOpen]: open,
                [classes.searchContainerClose]: !open,
              }),
            ),
            onTransitionEnd: this.handleDisableUnderline,
          }}
        />
      </Tooltip>
    );
  };
}

export default withStyles(toolbarStyles)(Search);
