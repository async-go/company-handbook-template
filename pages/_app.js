import Layout from "../components/Layout";

import "bootstrap/dist/css/bootstrap.css";
import "fontawesome-free/css/all.css";
import "../styles/custom.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
