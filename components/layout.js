import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <Navbar />
      </header>

      <div className="container">
        <div className="row flex-xl-nowrap">
          <main className="col-xl-10 bd-content">{children}</main>

          <div className="d-none d-xl-block col-xl-2 bd-toc">
            <ul className="nav flex-column">
              <h6 className="nav-item">Table of Contents</h6>
              <li className="toc-entry toc-h2">Not Implemented</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
