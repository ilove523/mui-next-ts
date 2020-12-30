import { withStyles } from '@material-ui/core';
import { SentimentVeryDissatisfied } from '@material-ui/icons';
import HttpStatus from 'http-status';
import React from 'react';

import { errorPageStyles } from './styles';
import { PErrorPage } from './types';

class ErrorPage extends React.Component<PErrorPage> {
  getErrorMessage = (): string => {
    const { statusCode } = this.props;
    let msg: string;
    if (statusCode === 404) {
      msg = 'Page not found.';
    } else {
      msg =
        String(HttpStatus[statusCode]) || 'An unexpected error has occurred.';
    }
    return msg;
  };

  render = () => {
    const { statusCode, classes } = this.props;
    const errorMsg = this.getErrorMessage();
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <SentimentVeryDissatisfied className={classes.icon} />
          <p className={classes.statusCode}>{statusCode}</p>
          <p className={classes.message}>{errorMsg}</p>
        </div>
      </div>
    );
  };
}

export default withStyles(errorPageStyles)(ErrorPage);
