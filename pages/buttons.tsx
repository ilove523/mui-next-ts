import {
  Divider,
  Grid,
  Paper,
  Theme,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Layout } from 'components';
import { Button, Fab } from 'components/Button';
import { IconButton } from 'components/IconButton';
import React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '85%',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    title: {
      marginBottom: theme.spacing(1.5),
      color: 'grey',
    },
  });

interface PContent extends WithStyles<typeof styles> {}

class Content extends React.Component<PContent> {
  render = () => {
    const { classes } = this.props;
    return (
      <Layout>
        <Grid container direction="column" alignItems="center">
          <Paper className={classes.root}>
            <Typography variant="h5" className={classes.title}>
              Normal button
            </Typography>
            <Grid container justify="space-between">
              <Button variant="contained" color="default">
                DEFAULT
              </Button>
              <Button variant="contained" color="primary">
                PRIMARY
              </Button>
              <Button variant="contained" color="secondary">
                SECONDARY
              </Button>
              <Button variant="contained" color="success">
                SUCCESS
              </Button>
              <Button variant="contained" color="warning">
                WARNING
              </Button>
              <Button variant="contained" color="danger">
                DANGER
              </Button>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="h5" className={classes.title}>
              Outlined button
            </Typography>
            <Grid container justify="space-between">
              <Button variant="outlined" color="default">
                DEFAULT
              </Button>
              <Button variant="outlined" color="primary">
                PRIMARY
              </Button>
              <Button variant="outlined" color="secondary">
                SECONDARY
              </Button>
              <Button variant="outlined" color="success">
                SUCCESS
              </Button>
              <Button variant="outlined" color="warning">
                WARNING
              </Button>
              <Button variant="outlined" color="danger">
                DANGER
              </Button>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="h5" className={classes.title}>
              Text button
            </Typography>
            <Grid container justify="space-between">
              <Button variant="text" color="default">
                DEFAULT
              </Button>
              <Button variant="text" color="primary">
                PRIMARY
              </Button>
              <Button variant="text" color="secondary">
                SECONDARY
              </Button>
              <Button variant="text" color="success">
                SUCCESS
              </Button>
              <Button variant="text" color="warning">
                WARNING
              </Button>
              <Button variant="text" color="danger">
                DANGER
              </Button>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="h5" className={classes.title}>
              Fab round
            </Typography>
            <Grid container justify="space-between">
              <Fab variant="round" color="default">
                <Add />
              </Fab>
              <Fab variant="round" color="primary">
                <Add />
              </Fab>
              <Fab variant="round" color="secondary">
                <Add />
              </Fab>
              <Fab variant="round" color="success">
                <Add />
              </Fab>
              <Fab variant="round" color="warning">
                <Add />
              </Fab>
              <Fab variant="round" color="danger">
                <Add />
              </Fab>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="h5" className={classes.title}>
              Fab extended
            </Typography>
            <Grid container justify="space-between">
              <Fab variant="extended" color="default">
                DEFAULT
              </Fab>
              <Fab variant="extended" color="primary">
                PRIMARY
              </Fab>
              <Fab variant="extended" color="secondary">
                SECONDARY
              </Fab>
              <Fab variant="extended" color="success">
                SUCCESS
              </Fab>
              <Fab variant="extended" color="warning">
                WARNING
              </Fab>
              <Fab variant="extended" color="danger">
                DANGER
              </Fab>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="h5" className={classes.title}>
              Icon button
            </Typography>
            <Grid container justify="space-between">
              <IconButton color="default">
                <Add />
              </IconButton>
              <IconButton color="primary">
                <Add />
              </IconButton>
              <IconButton color="secondary">
                <Add />
              </IconButton>
              <IconButton color="success">
                <Add />
              </IconButton>
              <IconButton color="warning">
                <Add />
              </IconButton>
              <IconButton color="danger">
                <Add />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
      </Layout>
    );
  };
}

export default withStyles(styles)(Content);
