import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            name="description"
            content="EQUIPAMENTOS HIDRÁULICOS. Alicate Prensa Terminais. Diversos Modelos e Capacidades. Bomba Hidráulica p/ Torqueamento. Acionamento: ELÉTRICO ..."
          />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossOrigin="anonymous"
          />

          <link
            rel="icon"
            href="https://res.cloudinary.com/aguadeira/image/upload/v1624889474/FTM/favicon_2_woo6vg.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
