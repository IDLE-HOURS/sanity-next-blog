import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link
            rel="preload"
            href="/fonts/AzeretMono-Light.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="https://use.typekit.net/oho1paw.css"></link>
          </Head>
        <body className="bg-primary font">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
