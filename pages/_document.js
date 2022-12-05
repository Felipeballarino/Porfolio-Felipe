import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <line rel="preconnect" href="https://unpkg.com" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        {/* <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@800&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>

        {/* <script src="https://unpkg.com/react/umd/react.production.min.js" ></script> */}

        {/* <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        ></script> */}
        {/* 
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        ></script> */}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html >
  );
}
