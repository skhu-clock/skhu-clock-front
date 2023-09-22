/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { AppProps } from 'next/app';
import '../styles/index.css';
import { ThemeProvider } from '@mui/system';
import theme from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div css={mainHome}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

const mainHome = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100vh;

  font-family: 'Noto Sans KR', sans-serif;
`;
