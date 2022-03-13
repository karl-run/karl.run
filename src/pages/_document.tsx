import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument(): JSX.Element {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/prism-themes@1.6.0/themes/prism-synthwave84.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=optional" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
