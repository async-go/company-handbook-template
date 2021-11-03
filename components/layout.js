import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
}
