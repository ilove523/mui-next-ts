import { Theme, createStyles } from '@material-ui/core';

export const errorPageStyles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      fontSize: 86,
      color: 'grey',
    },
    statusCode: {
      fontSize: 40,
      margin: 0,
      marginTop: theme.spacing(2),
      color: 'grey',
    },
    message: {
      fontSize: 30,
      margin: 0,
      marginTop: theme.spacing(2),
      color: 'grey',
      whiteSpace: 'pre-line',
    },
  });
