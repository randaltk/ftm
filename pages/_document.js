import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WTXKGFQV');
              `,
            }}
          />

          {/* Google tag (gtag.js) - shared for Google Analytics 4 and Google Ads */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-WEQJXFYBE0"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                // Google Analytics 4
                gtag('config', 'G-WEQJXFYBE0');
                // Google Ads
                gtag('config', 'AW-16679702051');
              `,
            }}
          />

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
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTXKGFQV"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
