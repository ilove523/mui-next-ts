import {
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Theme,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';
import { RadioGroupProps } from '@material-ui/core/RadioGroup';
import { SnackbarOrigin, SnackbarProps } from '@material-ui/core/Snackbar';
import { Button } from 'components/Button';
import { Notification, NotificationVariantKey } from 'components/Notification';
import React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '65%',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    button: {
      marginRight: theme.spacing(1),
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    radioGroup: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  });

interface PContent extends WithStyles<typeof styles> {}

interface SContent {
  open: boolean;
  variant: string;
  anchorValue: string;
  anchorOrigin: SnackbarProps['anchorOrigin'];
  message: string;
}

class Content extends React.Component<PContent, SContent> {
  constructor(props: PContent) {
    super(props);
    this.state = {
      open: false,
      variant: 'default',
      anchorValue: 'bottom-right',
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      message: 'This is default notification at bottom-right',
    };
  }

  handleChangeVariant: RadioGroupProps['onChange'] = (event, value) => {
    this.setState(prevState => ({
      variant: value,
      message: `This is ${value} notification at ${prevState.anchorValue}`,
    }));
  };

  handleChangeAnchorOrigin: RadioGroupProps['onChange'] = (event, value) => {
    const positions = value.split('-') as [
      SnackbarOrigin['vertical'],
      SnackbarOrigin['horizontal'],
    ];
    this.setState(prevState => ({
      anchorValue: value,
      anchorOrigin: { vertical: positions[0], horizontal: positions[1] },
      message: `This is ${prevState.variant} notification at ${value}`,
    }));
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render = () => {
    const { classes } = this.props;
    const { open, variant, anchorValue, anchorOrigin, message } = this.state;
    return (
      <Grid container direction="column" alignItems="center">
        <Paper className={classes.root}>
          <Typography variant="h3">Playground</Typography>
          <Divider className={classes.divider} />
          <Typography variant="h5">Variant</Typography>
          <RadioGroup
            row
            name="variant"
            value={variant}
            onChange={this.handleChangeVariant}
            className={classes.radioGroup}
          >
            <FormControlLabel
              value="default"
              label="default"
              control={<Radio />}
            />
            <FormControlLabel value="info" label="info" control={<Radio />} />
            <FormControlLabel
              value="success"
              label="success"
              control={<Radio />}
            />
            <FormControlLabel value="error" label="error" control={<Radio />} />
            <FormControlLabel
              value="warning"
              label="warning"
              control={<Radio />}
            />
          </RadioGroup>
          <Divider className={classes.divider} />
          <Typography variant="h5">AnchorOrigin</Typography>
          <RadioGroup
            row
            name="anchorValue"
            value={anchorValue}
            onChange={this.handleChangeAnchorOrigin}
            className={classes.radioGroup}
          >
            <FormControlLabel
              value="top-left"
              label="top-left"
              control={<Radio />}
            />
            <FormControlLabel
              value="top-center"
              label="top-center"
              control={<Radio />}
            />
            <FormControlLabel
              value="top-right"
              label="top-right"
              control={<Radio />}
            />
          </RadioGroup>
          <RadioGroup
            row
            name="anchorValue"
            value={anchorValue}
            onChange={this.handleChangeAnchorOrigin}
            className={classes.radioGroup}
          >
            <FormControlLabel
              value="bottom-left"
              label="bottom-left"
              control={<Radio />}
            />
            <FormControlLabel
              value="bottom-center"
              label="bottom-center"
              control={<Radio />}
            />
            <FormControlLabel
              value="bottom-right"
              label="bottom-right"
              control={<Radio />}
            />
          </RadioGroup>
          <Divider className={classes.divider} />
          <Grid container>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              onClick={this.handleOpen}
              className={classes.button}
            >
              OPEN
            </Button>
            <Button
              size="medium"
              color="danger"
              variant="contained"
              onClick={this.handleClose}
              className={classes.button}
            >
              CLOSE
            </Button>
          </Grid>
        </Paper>
        <Notification
          open={open}
          variant={variant as NotificationVariantKey}
          anchorOrigin={anchorOrigin}
          message={message}
          onClose={this.handleClose}
        />
      </Grid>
    );
  };
}

export default withStyles(styles)(Content);
