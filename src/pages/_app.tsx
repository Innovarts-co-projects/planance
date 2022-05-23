import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import { lightTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {

  const theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
