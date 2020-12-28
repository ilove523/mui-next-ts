import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

// styles
var useStyles = makeStyles(theme =>
  createStyles({
    dotBase: {
      width: 8,
      height: 8,
      backgroundColor: theme.palette.text.hint,
      borderRadius: '50%',
      transition: theme.transitions.create('background-color'),
    },
    dotSmall: {
      width: 5,
      height: 5,
    },
    dotLarge: {
      width: 11,
      height: 11,
    },
  }),
);

export default function Dot({ size, color }) {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <div
      className={clsx(classes.dotBase, {
        [classes.dotLarge]: size === 'large',
        [classes.dotSmall]: size === 'small',
      })}
      style={{
        backgroundColor:
          color && theme.palette[color] && theme.palette[color].main,
      }}
    />
  );
}
