import { WithStyles } from '@material-ui/core';
import { ErrorProps } from 'next/error';

import { errorPageStyles } from './styles';

export interface PErrorObject {
  res: ErrorProps;
  err: ErrorProps;
}

export interface PErrorPage extends WithStyles<typeof errorPageStyles> {
  statusCode: number | null;
}
