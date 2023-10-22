/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { AppProps } from 'next/app';
import '../styles/index.css';
import { ThemeProvider } from '@mui/system';
import theme from '@/styles/theme';

import { Do_Hyeon } from 'next/font/google';

const roboto = Do_Hyeon({
  weight: '400',
  subsets: ['latin'],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <ThemeProvider theme={theme}>
        <div css={mainHome}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </main>
  );
}

const mainHome = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100vh;
`;
