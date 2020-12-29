import { Theme, createStyles } from '@material-ui/core';

export const footerStyles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: 30,
    },
    copyrightIcon: {
      fontSize: 18,
      marginRight: theme.spacing(1),
      color: '#757575',
    },
    copyrightContent: {
      fontSize: 14,
      color: '#757575',
      margin: 0,
    },
  });
