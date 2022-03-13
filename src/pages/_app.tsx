import '../style/global.css';

import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import ContentRoot from '../components/layout/ContentRoot';
import Nav from '../components/Nav';
import FancyBackground from '../components/FancyBackground';
import { components } from '../components/MDXComponents';

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
