import Head from "next/head";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import { React } from "react";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="container">
        <main>
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};