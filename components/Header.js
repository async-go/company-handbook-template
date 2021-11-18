import { React } from "react";
import getConfig from "next/config";

export default function Header() {
  const { publicRuntimeConfig } = getConfig();
  const handbookName = publicRuntimeConfig.handbookName || "";
  return (
    <>
      <header>
        <nav>
          <a href="/">{handbookName + " Home"}</a>
        </nav>
      </header>
    </>
  );
}
