import Layout from "../components/Layout";
import { React } from "react";
import PropTypes from "prop-types";

import "simpledotcss/simple.min.css";
import "fontawesome-free/css/all.css";
import "../styles/custom.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
