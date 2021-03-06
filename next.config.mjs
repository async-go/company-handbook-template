import withMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@atomictech/rehype-toc"; // pending merge of https://github.com/JS-DevTools/rehype-toc/pull/3
import rehypeHeadings from "rehype-autolink-headings";
import rehypeUrl from "rehype-url-inspector";
import url from "url";

function trimUrl(url) {
  // Utility function to remove (index).md from page URLs
  url = url.replace(/\/index\.md$/, "");
  url = url.replace(/\.md$/, "");
  return url;
}

const mdx = withMDX({
  extension: /\.(md)$/,
  options: {
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeHeadings,
        {
          behavior: "append",
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["fas", "fa-link", "anchor-link"] },
            children: [],
          },
        },
      ],
      [
        rehypeToc,
        {
          placeholder: "{{TOC}}",
          nav: false,
          headings: ["h1", "h2", "h3"],
        },
      ],
      [
        rehypeUrl,
        {
          inspectEach(match) {
            if (match.url) {
              // Use lenient parser since we are dealing with partial URLs
              const parsedUrl = url.parse(match.url);
              if (parsedUrl.hostname) {
                // Do nothing for external links
                return;
              }
              if (parsedUrl.pathname) {
                // Trim (index).md extension from links
                parsedUrl.pathname = trimUrl(parsedUrl.pathname);
                match.node.properties[match.propertyName] =
                  url.format(parsedUrl);
              }
            }
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});

export default mdx({
  pageExtensions: ["md", "js", "jsx"],
  publicRuntimeConfig: {
    // Be sure to customize these values for your site. Changing these values
    // requires restarting the dev server.
    headerLinks: {
      // A list of links for the header of every page, relative to root.
      Home: "/",
      Team: "/company/team/index.md",
    },
    editRepositoryBase:
      // This is the base path for the "edit this page" link. The relative path
      // of the current page from the root is added. No trailing slash. If unset,
      // no edit page link will be shown.
      "https://github.com/async-go/company-handbook-template/edit/main/pages",
    historyRepositoryBase:
      // Same as above, except to show the history of a page.
      "https://github.com/async-go/company-handbook-template/commits/main/pages",
  },
});
