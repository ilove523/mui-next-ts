import { Grid, withStyles } from '@material-ui/core';
import React from 'react';

import CSVDownload from './CSVDownload';
import PrintTable from './PrintTable';
import Search from './Search';
import { toolbarStyles } from './styles';
import { PTableToolbar, STableToolbar } from './types';
import ViewColumns from './ViewColumns';

class TableToolbar extends React.Component<PTableToolbar, STableToolbar> {
  static defaultProps = {
    title: '',
    search: true,
    csv: true,
    viewColumns: true,
    print: true,
  };

  render = () => {
    const {
      title,
      search,
      SearchProps,
      csv,
      CSVDownloadProps,
      print,
      PrintTableProps,
      viewColumns,
      ViewColumnsProps,
      classes,
    } = this.props;
    return (
      <Grid
        container
        alignItems="flex-end"
        justify="space-between"
        className={classes.root}
      >
        <div className={classes.title}>{title}</div>
        <div className={classes.actionContainer}>
          <Grid container alignItems="flex-end" spacing={3}>
            <Grid item>{search && <Search {...SearchProps} />}</Grid>
            <Grid item>{csv && <CSVDownload {...CSVDownloadProps} />}</Grid>
            <Grid item>{print && <PrintTable {...PrintTableProps} />}</Grid>
            <Grid item>
              {viewColumns && <ViewColumns {...ViewColumnsProps} />}
            </Grid>
          </Grid>
        </div>
      </Grid>
    );
  };
}

export default withStyles(toolbarStyles)(TableToolbar);
