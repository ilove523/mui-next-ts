import { Theme, createStyles } from '@material-ui/core';

export const notificationStyles = (theme: Theme) =>
  createStyles({
    content: {
      opacity: 1,
      fontSize: 14,
      minWidth: 320,
      color: 'white',
    },
    success: {
      backgroundColor: '#66bb6a',
    },
    error: {
      backgroundColor: '#ff5252',
    },
    warning: {
      backgroundColor: '#ffab40',
    },
    info: {
      backgroundColor: '#448aff',
    },
    default: {
      backgroundColor: 'white',
      color: '#757575',
    },
    icon: {
      fontSize: 18,
      marginRight: theme.spacing(1),
    },
    iconClear: {
      cursor: 'pointer',
    },
  });
