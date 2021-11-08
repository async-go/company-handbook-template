import Document, { Html, Head, Main, NextScript } from "next/document";
import { React } from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head />
          <body className="bg-light">
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
