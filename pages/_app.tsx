import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Layout } from 'components/Layout';
import { AuthProvider } from 'hooks/auth-context';
import { UserProvider } from 'hooks/user-context';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import theme from 'utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>MUI + Next.js</title>
      </Head>
      <UserProvider initialUser={pageProps.user}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </UserProvider>
    </>
  );
}
