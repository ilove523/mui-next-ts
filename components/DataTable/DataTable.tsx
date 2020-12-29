import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  withStyles,
} from '@material-ui/core';
import { TablePaginationProps } from '@material-ui/core/TablePagination';
import classNames from 'classnames';
import { PInput } from 'components/Input';
import React from 'react';
import { LabelKeyObject } from 'react-csv/components/CommonPropTypes';

import { Checkbox, PCheckbox } from '../Checkbox';
import { dataTableStyles } from './styles';
import TableToolbar from './TableToolbar';
import {
  PCSVDownload,
  PDataTable,
  SDataTable,
  SortDirectionKeys,
} from './types';

class DataTable extends React.Component<PDataTable, SDataTable> {
  static defaultProps = {
    sort: true,
    hover: true,
    defaultSortDirection: 'asc',
    select: false,
    pick: false,
    toolbar: true,
    title: '',
    search: true,
    csv: true,
    print: true,
    viewColumns: true,
    rowsPerPageOptions: [10, 25, 50],
    actions: [],
    actionHeaders: [],
  } as PDataTable;

  private __csvHeaders: PCSVDownload['headers'];
  private __tableContentRef = React.createRef<HTMLDivElement>();
  private __count: number; // data count after search.

  constructor(props: PDataTable) {
    super(props);
    const columnOptions = props.headers.map(d => ({
      ...d,
      visible: true,
    }));
    this.state = {
      sortBy: props.defaultSortBy || props.headers[0].column,
      sortDirection: props.defaultSortDirection!,
      page: 0,
      rowsPerPage: props.rowsPerPageOptions![0],
      selected: [],
      picked: '',
      searchValue: '',
      columnOptions,
    };
    this.__csvHeaders = props.headers.map<LabelKeyObject>(d => ({
      key: d.column.toString(),
      label: d.label,
    }));
  }

  handleChangePage: TablePaginationProps['onChangePage'] = (_, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage: TablePaginationProps['onChangeRowsPerPage'] = event => {
    const { value } = event.target;
    this.setState({
      rowsPerPage: Number(value),
    });
  };

  getLabelDisplayedRows: TablePaginationProps['labelDisplayedRows'] = ({
    from,
    to,
    count,
  }) => {
    // const count = this.props.data.length;
    return `第${from} - ${to}筆，共${count}筆`;
  };

  handleChangeSort = (nextSortBy: string | number) => {
    const { sortBy, sortDirection } = this.state;
    let nextSortDirection: SortDirectionKeys;
    if (sortDirection === 'asc') {
      nextSortDirection = nextSortBy === sortBy ? 'desc' : 'asc';
    } else {
      nextSortDirection = nextSortBy === sortBy ? 'asc' : 'desc';
    }
    this.setState({
      sortBy: nextSortBy,
      sortDirection: nextSortDirection,
    });
  };

  getSortedData = (data: Array<any>) => {
    const { sortBy, sortDirection } = this.state;
    data.sort((a, b) => {
      if (a[sortBy] === b[sortBy]) {
        // 值相等則不更動順序
        return 0;
      }
      if (sortDirection === 'asc') {
        // 遞增，小的在前面
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        // 遞減，大的在前面
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    return data;
  };

  getPageData = (data: Array<any>) => {
    const { page, rowsPerPage } = this.state;
    data = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    return data;
  };

  isSelected = (value: any) => this.state.selected.includes(value);

  isSelectAll = () => {
    const { selectBy, data } = this.props;
    const { selected } = this.state;
    const values = data.map(d => d[selectBy!]);
    return selected.length > 0 && values.every(this.isSelected);
  };

  handleSelect = (value: any) => {
    let oldSelected = [...this.state.selected];
    let newSelected = [];
    let index = oldSelected.indexOf(value);
    let { onSelect } = this.props;

    if (index === -1) {
      newSelected = oldSelected.concat(value);
    } else {
      oldSelected.splice(index, 1);
      newSelected = [...oldSelected];
    }
    this.setState({ selected: newSelected }, () => {
      onSelect!(this.state.selected);
    });
  };

  handleSelectAll = () => {
    let newSelected: Array<any>;
    const { onSelect, selectBy, data } = this.props;
    if (this.isSelectAll()) {
      newSelected = [];
    } else {
      newSelected = data.map(d => d[selectBy!]);
    }
    this.setState({ selected: newSelected }, () => {
      onSelect!(this.state.selected);
    });
  };

  isPick = (value: any) => value === this.state.picked;

  handleChangeSearch: PInput['onChange'] = event => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleClearSearch = () => {
    this.setState({
      searchValue: '',
    });
  };

  getSearchData = (data: Array<any>) => {
    const { headers } = this.props;
    const { searchValue } = this.state;
    if (searchValue !== '') {
      const dataSearched = data.filter(d => {
        // 只要其中一欄資料有包含search，就回傳true
        return headers.some(h => {
          if (!d[h.column]) return false;
          return d[h.column].toString().includes(searchValue);
        });
      });
      this.__count = dataSearched.length;
      return dataSearched;
    } else {
      this.__count = data.length;
      return data;
    }
  };

  handlePick = (value: any) => () => {
    let { pick, onPick } = this.props;
    if (pick) {
      this.setState(
        prevState => ({
          picked: prevState.picked === value ? '' : value,
        }),
        () => {
          onPick!(this.state.picked);
        },
      );
    }
  };

  handleChangeViewColumns: PCheckbox['onChange'] = (event, checked) => {
    const { value } = event.target;
    this.setState(prevState => {
      const index = prevState.columnOptions.findIndex(d => d.column === value);
      prevState.columnOptions[index].visible = checked;
      return {
        columnOptions: prevState.columnOptions,
      };
    });
  };

  formatContent = (val: string | number) => {
    const { searchValue } = this.state;
    if (searchValue.length > 0) {
      let subset = val.toString().split(searchValue);
      return subset.map((d, index) => {
        if (index === subset.length - 1) {
          return d;
        } else {
          return (
            <React.Fragment key={index}>
              {d}
              <mark>{searchValue}</mark>
            </React.Fragment>
          );
        }
      });
    } else {
      return val;
    }
  };

  getContent = () => {
    const { sort } = this.props;
    // append origin data index.
    let data = this.props.data.map((d, index) => {
      return {
        ...d,
        dataIX: index,
      };
    });
    data = this.getSearchData(data);
    if (sort) {
      data = this.getSortedData(data);
      data = this.getPageData(data);
    }
    return data;
  };

  render = () => {
    let {
      classes,
      actions,
      actionHeaders,
      rowsPerPageOptions,
      sort,
      hover,
      select,
      selectBy,
      pick,
      pickBy,
      toolbar,
      title,
      search,
      csv,
      print,
      viewColumns,
      // components,
      // getTableRowStyle,
    } = this.props;
    // let { TBodyCell } = components;
    const {
      page,
      rowsPerPage,
      sortBy,
      sortDirection,
      searchValue,
      columnOptions,
    } = this.state;
    const headers = columnOptions.filter(d => d.visible);
    const columns = headers.map(d => d.column);
    const data = this.getContent();

    return (
      <Paper className={classes.root}>
        {toolbar && (
          <TableToolbar
            title={title}
            search={search}
            SearchProps={{
              value: searchValue,
              onChange: this.handleChangeSearch,
              onClear: this.handleClearSearch,
            }}
            csv={csv}
            CSVDownloadProps={{
              uFEFF: true,
              filename: 'export.csv',
              headers: this.__csvHeaders,
              data: data,
            }}
            print={print}
            PrintTableProps={{
              contentEl: this.__tableContentRef.current!,
            }}
            viewColumns={viewColumns}
            ViewColumnsProps={{
              options: columnOptions,
              onChnage: this.handleChangeViewColumns,
            }}
          />
        )}
        <div ref={this.__tableContentRef}>
          <Table padding="default" size="small">
            <TableHead>
              <TableRow className={classes.header}>
                {select && (
                  // if select, show checkbox on head
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="secondary"
                      checked={this.isSelectAll()}
                      onChange={this.handleSelectAll}
                    />
                  </TableCell>
                )}
                {headers.map((header, index) => {
                  return (
                    <TableCell key={index}>
                      <TableSortLabel
                        active={sort && sortBy === header.column}
                        direction={sortDirection}
                        onClick={() => this.handleChangeSort(header.column)}
                      >
                        {header.label}
                      </TableSortLabel>
                    </TableCell>
                  );
                })}
                {
                  // show row actions
                  actions!.map((_, index) => {
                    return (
                      <TableCell key={index}>
                        {actionHeaders![index] || `動作${index + 1}`}
                      </TableCell>
                    );
                  })
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d, rowIX) => {
                return (
                  <TableRow
                    key={rowIX}
                    className={classNames(classes.body, {
                      [classes.hover]: hover,
                      [classes.pickable]: pick,
                      [classes.picked]: this.isPick(d[pickBy!]),
                    })}
                    onClick={this.handlePick(d[pickBy!])}
                  >
                    {select && (
                      // if select, show checkbox on each row
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="secondary"
                          checked={this.isSelected(d[selectBy!])}
                          onChange={() => this.handleSelect(d[selectBy!])}
                        />
                      </TableCell>
                    )}
                    {columns.map((col, colIX) => {
                      return (
                        // (TBodyCell ? (
                        //   <TBodyCell
                        //     key={colIX}
                        //     column={col}
                        //     columnIndex={colIX}
                        //     data={d}
                        //     value={this.formatContent(d[col])}
                        //   />
                        // ) : (
                        //   <TableCell key={colIX} className={classes.tableCell}>
                        //     {this.formatContent(d[col])}
                        //   </TableCell>
                        // ))
                        <TableCell key={colIX} className={classes.tableCell}>
                          {this.formatContent(d[col])}
                          {/* {d[col]} */}
                        </TableCell>
                      );
                    })}
                    {
                      // show row actions
                      actions!.map((action, childIX) => {
                        return (
                          <TableCell key={childIX}>
                            {React.cloneElement(action, {
                              data: d,
                            })}
                          </TableCell>
                        );
                      })
                    }
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={this.__count}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          labelRowsPerPage={'每页显示：'}
          labelDisplayedRows={this.getLabelDisplayedRows}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  };
}

export default withStyles(dataTableStyles)(DataTable);
