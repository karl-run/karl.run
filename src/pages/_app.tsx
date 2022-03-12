import '../style/global.css';

import type { AppProps } from 'next/app';

import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
