import { Omit, WithStyles } from '@material-ui/core';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

import { notificationStyles } from './styles';

export type NotificationVariantKey =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'default';

export interface PNotification
  extends WithStyles<typeof notificationStyles>,
    Omit<SnackbarProps, 'classes'> {
  open: boolean;
  variant: NotificationVariantKey;
  message?: string;
  onClose: () => void;
}

export interface PNotificationIcons {
  [keys: string]: React.ComponentType<SvgIconProps>;
}
