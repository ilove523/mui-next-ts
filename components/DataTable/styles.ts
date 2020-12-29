import { Theme, createStyles } from '@material-ui/core';

export const toolbarStyles = (theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      borderBottom: '1px solid #e0e0e0',
    },
    actionContainer: {
      display: 'flex',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    tooltip: {
      marginTop: -12,
    },
    icon: {
      fontSize: 26,
      color: '#616161',
    },
    iconClickable: {
      cursor: 'pointer',
    },
    iconHighlight: {
      '&:hover': {
        color: '#212121',
      },
    },
    searchContainer: {
      transition: 'width ease 0.2s',
      paddingTop: 0,
    },
    searchContainerOpen: {
      width: 240,
    },
    searchContainerClose: {
      width: 26,
    },
    iconSearchInput: {
      marginRight: theme.spacing(1.5),
    },
    columnMenu: {
      minWidth: 220,
      maxHeight: 260,
      padding: theme.spacing(1.5),
    },
  });

export const dataTableStyles = (theme: Theme) =>
  createStyles({
    root: {},
    tableWrapper: {
      overflowX: 'auto',
    },
    table: {
      minWidth: 850,
    },
    black: {
      color: 'black',
    },
    header: {
      fontSize: '16pt',
      color: 'black',
      backgroundColor: '#f5f5f5',
    },
    body: {
      '&:nth-of-type(even)': {
        backgroundColor: '#fafafa',
      },
    },
    hover: {
      '&:hover': {
        backgroundColor: '#E1F5FE',
      },
    },
    pickable: {
      cursor: 'pointer',
    },
    picked: {
      backgroundColor: '#FFEBEE !important',
    },
    tableCell: {
      maxWidth: 350,
    },
  });
