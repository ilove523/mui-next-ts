import { withStyles } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { Fab } from 'components/Button';
import React from 'react';

import { layoutStyles } from './styles';
import { PScrollTop } from './types';

const ScrollTop: React.FunctionComponent<PScrollTop> = props => {
  const handleScrollTop = () => {
    const target = document.querySelector('#main-panel');
    if (target) {
      target.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const { classes } = props;
  return (
    <Fab
      size="small"
      color="default"
      className={classes.scrollTop}
      onClick={handleScrollTop}
    >
      <KeyboardArrowUp style={{ fontSize: 28 }} />
    </Fab>
  );
};

export default withStyles(layoutStyles)(ScrollTop);
