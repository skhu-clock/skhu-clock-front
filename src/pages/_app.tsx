import type { AppProps } from 'next/app';
import '../styles/index.css';
import { ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
