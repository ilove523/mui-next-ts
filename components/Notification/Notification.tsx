import { Grid, Snackbar, SnackbarContent, withStyles } from '@material-ui/core';
import {
  CheckCircle,
  Clear,
  ErrorOutlined,
  InfoOutlined,
  Warning,
} from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';

import { notificationStyles } from './styles';
import { PNotification, PNotificationIcons } from './types';

const icons: PNotificationIcons = {
  success: CheckCircle,
  error: ErrorOutlined,
  warning: Warning,
  info: InfoOutlined,
  default: InfoOutlined,
};

class Notification extends React.Component<PNotification> {
  static defaultProps = {
    open: false,
    variant: 'default',
    message: '',
  } as PNotification;

  render = () => {
    const { open, variant, message, classes, onClose, ...rest } = this.props;
    const Icon = icons[variant];
    return (
      <Snackbar
        open={open}
        disableWindowBlurListener
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={2500}
        onClose={onClose}
        {...rest}
      >
        <SnackbarContent
          message={
            <Grid container alignItems="center">
              <Icon className={clsx(classes.icon, classes[variant])} />
              {message}
            </Grid>
          }
          action={
            <Clear
              onClick={onClose}
              className={clsx(
                classes.icon,
                classes.iconClear,
                classes[variant],
              )}
            />
          }
          className={clsx(classes.content, classes[variant])}
        />
      </Snackbar>
    );
  };
}

export default withStyles(notificationStyles)(Notification);
