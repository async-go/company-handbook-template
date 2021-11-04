import Layout from "../components/layout";

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
