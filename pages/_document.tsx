import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/images/a.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind&family=Lato:wght@300&display=block"
            rel="stylesheet"
          />
          <meta property="og:site_name" content="YUSAKU KAMATA" />
          <meta property="og:title" content="YUSAKU KAMATA" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://yusakukamata.com" />
          <meta property="og:image" content="/images/samune.png" />
          <meta property="og:description" content="Portfolio Site" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
