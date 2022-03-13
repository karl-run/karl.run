import '../style/global.css';

import type { AppProps } from 'next/app';
import Image from 'next/image';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import ContentRoot from '../components/layout/ContentRoot';
import Nav from '../components/Nav';
import FancyBackground from '../components/FancyBackground';

const components = {
  Image: Image,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Nav />
      <FancyBackground />
      <MDXProvider components={components}>
        <ContentRoot>
          <Component {...pageProps} />
        </ContentRoot>
      </MDXProvider>
    </>
  );
}

export default MyApp;
