import Head from "next/head";
import Navbar from "./navbar";
import TableOfContents from "./tableofcontents";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <div className="container">
        <main className="bd-main">
          <div className="bd-content">{children}</div>
          <div className="bd-toc">
            <TableOfContents />
          </div>
        </main>
      </div>
    </>
  );
}
