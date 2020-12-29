import { Tooltip, withStyles } from '@material-ui/core';
import { Print } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import ReactToPrint from 'react-to-print';

import { toolbarStyles } from './styles';
import { PPrintTable } from './types';

class PrintTable extends React.Component<PPrintTable> {
  render = () => {
    const { contentEl, classes } = this.props;
    return (
      <ReactToPrint
        trigger={() => (
          <Tooltip title="列印表格" classes={{ popper: classes.tooltip }}>
            <Print
              className={classNames(
                classes.icon,
                classes.iconHighlight,
                classes.iconClickable,
              )}
            />
          </Tooltip>
        )}
        content={() => contentEl}
        pageStyle=""
      />
    );
  };
}

export default withStyles(toolbarStyles)(PrintTable);
