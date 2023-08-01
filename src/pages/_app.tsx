import type { AppProps } from 'next/app';
import '../styles/index.css';
import { ThemeProvider,} from '@mui/system';
import theme from '@/styles/theme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
