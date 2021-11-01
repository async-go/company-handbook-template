import Head from "next/head";
import Navbar from "../components/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
}
