import { Tooltip, withStyles } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import { CSVLink } from 'react-csv';

import { toolbarStyles } from './styles';
import { PCSVDownload } from './types';

class CSVDownload extends React.Component<PCSVDownload> {
  render = () => {
    const { classes, ...CSVLinkProps } = this.props;
    return (
      <Tooltip title="导出CSV" classes={{ popper: classes.tooltip }}>
        <CSVLink
          className={CSVLinkProps.className}
          data={CSVLinkProps.data}
          headers={CSVLinkProps.headers}
          separator={CSVLinkProps.separator}
          target={CSVLinkProps.target}
          filename={CSVLinkProps.filename}
          onClick={CSVLinkProps.onClick}
          asyncOnClick={CSVLinkProps.asyncOnClick}
        >
          <CloudDownload
            className={classNames(
              classes.icon,
              classes.iconClickable,
              classes.iconHighlight,
            )}
          />
        </CSVLink>
      </Tooltip>
    );
  };
}

export default withStyles(toolbarStyles)(CSVDownload);
