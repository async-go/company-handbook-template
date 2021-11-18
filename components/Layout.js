import Head from "next/head";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import EditPageLink from "./EditPageLink";
import HistoryPageLink from "./HistoryPageLink";
import { React } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  // Don't show breadcrumbs or edit page link on error pages
  let breadcrumbs = null;
  let editPageLink = null;
  let historyPageLink = null;
  if (router.route !== "/_error" && router.route !== "/404") {
    breadcrumbs = <Breadcrumbs />;
    editPageLink = <EditPageLink />;
    historyPageLink = <HistoryPageLink />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        {breadcrumbs}
        {children}
        <br />
        {editPageLink}
        {historyPageLink}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
