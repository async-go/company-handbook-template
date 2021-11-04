import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
}
