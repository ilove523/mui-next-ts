import { Theme, createStyles } from '@material-ui/core';

export const inputStyles = (theme: Theme) =>
  createStyles({
    root: {},
    icon: {
      fontSize: 16,
      color: '#9e9e9e',
    },
    clear: {
      cursor: 'pointer',
      '&:hover': {
        color: '#616161',
      },
    },
  });
