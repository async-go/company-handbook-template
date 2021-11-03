import Head from "next/head";
import Navbar from "./navbar";

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
          <div class="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
            <strong class="d-block h6 my-2 pb-2 border-bottom">
              On this page
            </strong>
            <nav id="TableOfContents">Not Implemented</nav>
          </div>
        </main>
      </div>
    </>
  );
}
