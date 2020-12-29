import { Theme, createStyles } from '@material-ui/core';

export const sidebarStyles = (theme: Theme) =>
  createStyles({
    rootBasic: {
      backgroundColor: '#2c2c2c',
      position: 'relative',
      height: '100vh',
      overflowX: 'hidden',
      transition: 'width 0.2s',
    },
    rootMini: {
      width: 60,
    },
    rootNormal: {
      width: 260,
    },
    brandContainer: {
      width: '100%',
      height: 60,
      borderBottom: '0.2mm solid rgb(205, 205, 205)',
    },
    brand: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'rgb(235, 235, 235)',
      textAlign: 'center',
      textOverflow: 'clip',
      whiteSpace: 'nowrap',
    },
    brandMini: {
      fontSize: 24,
      color: 'rgb(235, 235, 235)',
    },
    menuRoot: {
      padding: 0,
    },
    menu: {
      fontSize: 18,
      height: 55,
      width: '90%',
    },
    popperMenu: {
      backgroundColor: '#424242',
      width: 260,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    menuOpen: {
      color: 'white',
    },
    menuClose: {
      color: 'rgb(185, 185, 185)',
    },
    menuText: {
      marginLeft: theme.spacing(2),
    },
    menuItem: {
      height: 40,
      width: '90%',
      borderRadius: 8,
      color: 'rgb(185, 185, 185)',
      marginTop: theme.spacing(1),
      '&:hover': {
        color: 'white',
        backgroundColor: '#424242',
      },
    },
    menuItemText: {
      fontSize: 16,
      marginLeft: theme.spacing(2),
    },
    menuItemHighlight: {
      color: 'white',
      backgroundColor: '#00bcd4',
      border: '1px solid #00838f',
      '&:hover': {
        backgroundColor: '#00bcd4',
      },
    },
    menuItemTextHighlight: {
      fontWeight: 'bold',
    },
    icon: {
      fontSize: 20,
    },
    visibleHidden: {
      visibility: 'hidden',
    },
    flex: {
      flex: 1,
    },
    tooltip: {
      marginLeft: theme.spacing(0.5),
      fontSize: 16,
      backgroundColor: '#424242',
    },
  });
