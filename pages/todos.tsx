import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import withAuthentication, {
  AuthenticationProps,
} from 'components/hoc/with-authentication';
import { Layout } from 'components/Layout';
import Todo from 'components/todo';
import { NextPage } from 'next';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(),
      margin: '0 auto',
    },
  }),
);

const TodosPage: NextPage<AuthenticationProps> = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Todo className={classes.root} />
    </Layout>
  );
};

export default withAuthentication(TodosPage);
