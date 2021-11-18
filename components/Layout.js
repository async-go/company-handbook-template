import Head from "next/head";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import EditPageLink from "./EditPageLink";
import { React } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  // Don't show breadcrumbs or edit page link on error pages
  let breadcrumbs = null;
  let editPageLink = null;
  if (router.route !== "/_error" && router.route !== "/404") {
    breadcrumbs = <Breadcrumbs />;
    editPageLink = <EditPageLink />;
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
        {editPageLink}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
