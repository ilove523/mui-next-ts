import { Theme, createStyles } from '@material-ui/core';

export const layoutStyles = (theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      position: 'relative',
      height: '100vh',
      width: '100vw',
    },
    sidebarWrapper: {
      height: '100%',
    },
    mainPanel: {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'auto',
    },
    container: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
    progress: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 9999,
    },
    scrollTop: {
      position: 'fixed',
      right: theme.spacing(4),
      bottom: theme.spacing(6),
      opacity: 0.2,
      zIndex: 10000,
      transition: 'opacity .15s ease-in',
      '&:hover': {
        opacity: 0.5,
      },
    },
  });
