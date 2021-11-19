import { React } from "react";
import getConfig from "next/config";

function trimUrl(url) {
  // Utility function to remove (index).md from page URLs
  url = url.replace(/\/index\.md$/, "");
  url = url.replace(/\.md$/, "");
  return url;
}

function MakeLinks() {
  const { publicRuntimeConfig } = getConfig();
  const headerLinks = publicRuntimeConfig.headerLinks;
  return (
    <>
      {Object.keys(headerLinks).map((link) => (
        <a key={link} href={trimUrl(headerLinks[link])}>
          {link}
        </a>
      ))}
    </>
  );
}

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <MakeLinks />
        </nav>
      </header>
    </>
  );
}
