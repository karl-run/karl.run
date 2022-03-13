import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument(): JSX.Element {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/prism-themes@1.6.0/themes/prism-synthwave84.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=optional" rel="stylesheet" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4367385676944782"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
