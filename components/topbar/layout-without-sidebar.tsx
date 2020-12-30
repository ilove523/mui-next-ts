import Container from '@material-ui/core/Container';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import TopBar from './topbar';

const Layout: React.FC<{ title?: string }> = props => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <TopBar title={props.title} />
      <Container maxWidth="md">{props.children}</Container>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
};
Layout.defaultProps = {
  title: 'Main page',
};

export default Layout;
