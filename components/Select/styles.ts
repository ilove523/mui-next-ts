import { Theme, createStyles } from '@material-ui/core';

export const selectStyles = (theme: Theme) =>
  createStyles({
    root: {},
    menu: {
      maxHeight: 435,
    },
    menuItem: {
      margin: theme.spacing(0.5),
      '&:hover': {
        backgroundColor: '#f3e5f5',
      },
    },
    menuItemHighlight: {
      backgroundColor: '#ab47bc !important',
      color: '#FFFFFF',
    },
    menuItemHighlightMulti: {
      backgroundColor: '#FFFFFF !important',
    },
    icon: {
      color: 'grey',
    },
    iconSearch: {
      marginRight: theme.spacing(1.5),
    },
    iconClear: {
      cursor: 'pointer',
    },
    searchContainer: {
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      marginBottom: theme.spacing(0.5),
    },
  });
