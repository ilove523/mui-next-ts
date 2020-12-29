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
import { Lock, Person } from '@material-ui/icons';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { DatePicker } from 'components/DatePicker';
import { Input } from 'components/Input';
import { DynamicSelect, Select } from 'components/Select';
import Link from 'next/link';
import React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    formContainer: {
      padding: theme.spacing(2),
      height: '100%',
    },
    formControl: {
      marginBottom: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    title: {
      marginBottom: theme.spacing(1.5),
      color: 'grey',
    },
    adornment: {
      marginRight: theme.spacing(1.5),
    },
  });

const data = [
  { gender: 'Male', age: '10-20', name: 'Frank' },
  { gender: 'Male', age: '10-20', name: 'Bryant' },
  { gender: 'Female', age: '10-20', name: 'Susan' },
  { gender: 'Male', age: '20-30', name: 'Billy' },
  { gender: 'Female', age: '10-20', name: 'Lilly' },
  { gender: 'Female', age: '20-30', name: 'Carol' },
  { gender: 'Male', age: '20-30', name: 'Tom' },
  { gender: 'Male', age: '30-40', name: 'Willy' },
  { gender: 'Female', age: '20-30', name: 'Wendy' },
  { gender: 'Female', age: '30-40', name: 'Alice' },
  { gender: 'Male', age: '10-20', name: 'Marshall' },
];

type ChangeEventHandler = React.ChangeEventHandler<{
  name?: string;
  value: unknown;
}>;

interface PContent extends WithStyles<typeof styles> {}

interface SContent {
  [key: string]: any;
  account: string;
  password: string;
  gender: string;
  cities: Array<string>;
  dGender: string;
  dAge: string;
  dName: string;
  selectedDate: Date;
  selectedDateTime: Date;
}

class Content extends React.Component<PContent, SContent> {
  constructor(props: PContent) {
    super(props);
    this.state = {
      account: '',
      password: '',
      gender: 'Male',
      cities: ['Taipei', 'Tainan', 'Kaoshiung'],
      dGender: '',
      dAge: '',
      dName: '',
      selectedDate: new Date(),
      selectedDateTime: new Date(),
    };
  }

  handleChange: ChangeEventHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name!]: value });
  };

  handleDateChange = (name: string) => (date: Date) => {
    this.setState({ [name]: date });
  };

  render = () => {
    const { classes } = this.props;
    const {
      account,
      password,
      gender,
      cities,
      dGender,
      dAge,
      dName,
      selectedDate,
      selectedDateTime,
    } = this.state;
    return (
      <Grid container direction="column">
        <Grid container spacing={2} style={{ marginBottom: 16 }}>
          <Grid item xs={6}>
            <Paper className={classes.formContainer}>
              <Typography variant="h5" className={classes.title}>
                Normal form
              </Typography>
              <Divider className={classes.divider} />
              <Input
                fullWidth
                required
                color="secondary"
                name="account"
                value={account}
                label="Account"
                startAdornment={<Person className={classes.adornment} />}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl,
                }}
              />
              <Input
                fullWidth
                required
                clearable
                color="secondary"
                type="password"
                name="password"
                value={password}
                label="Password"
                startAdornment={<Lock className={classes.adornment} />}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl,
                }}
              />
              <Grid container alignItems="center" justify="space-between">
                <Checkbox color="secondary" label="Remember me" />
                <Link href="#">
                  <a>Forget password?</a>
                </Link>
              </Grid>
              <br />
              <Button
                color="primary"
                variant="contained"
                className={classes.formControl}
              >
                Sign in
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.formContainer}>
              <Typography variant="h5" className={classes.title}>
                Selection form
              </Typography>
              <Divider className={classes.divider} />
              <Select
                all
                name="gender"
                fullWidth
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                ]}
                color="secondary"
                label="Choose your gender"
                value={gender}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl,
                }}
              />
              <Select
                all
                fullWidth
                multiple
                name="cities"
                options={[
                  { value: 'Taipei', label: 'Taipei' },
                  { value: 'Taoyuan', label: 'Taoyuan' },
                  { value: 'Hsinchu', label: 'Hsinchu' },
                  { value: 'Taichung', label: 'Taichung' },
                  { value: 'Tainan', label: 'Tainan' },
                  { value: 'Chiayi', label: 'Chiayi' },
                  { value: 'Kaoshiung', label: 'Kaoshiung' },
                ]}
                color="secondary"
                label="Choose travel cities"
                value={cities}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.formContainer}>
              <Typography variant="h5" className={classes.title}>
                Dynamic selection
              </Typography>
              <Divider className={classes.divider} />
              <DynamicSelect
                fullWidth
                name="dGender"
                value={dGender}
                data={data}
                valueColumn="gender"
                color="secondary"
                label="Choose gender"
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl,
                }}
              />
              <DynamicSelect
                fullWidth
                name="dAge"
                value={dAge}
                data={data}
                valueColumn="age"
                color="secondary"
                label="Choose age"
                filters={{ gender: dGender }}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl,
                }}
              />
              <DynamicSelect
                fullWidth
                all={false}
                name="dName"
                value={dName}
                data={data}
                valueColumn="name"
                color="secondary"
                label="Choose name"
                filters={{ gender: dGender, age: dAge }}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.formContainer}>
              <Typography variant="h5" className={classes.title}>
                Date picker
              </Typography>
              <Divider className={classes.divider} />
              <DatePicker
                color="secondary"
                label="Date Picker"
                selected={selectedDate}
                FormControlProps={{
                  fullWidth: true,
                  className: classes.formControl,
                }}
                onChange={this.handleDateChange('selectedDate')}
              />
              <DatePicker
                showTimeSelect
                color="secondary"
                label="DateTime Picker"
                selected={selectedDateTime}
                dateFormat="yyyy-MM-dd HH:mm"
                FormControlProps={{
                  fullWidth: true,
                  className: classes.formControl,
                }}
                onChange={this.handleDateChange('selectedDateTime')}
              />
              <DatePicker
                readOnly
                selected={selectedDate}
                color="secondary"
                label="Readonly"
                FormControlProps={{
                  className: classes.formControl,
                }}
                onChange={this.handleDateChange('selectedDate')}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(Content);
