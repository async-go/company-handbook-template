import withMDX from "@next/mdx";
import slug from "rehype-slug";
import toc from "@atomictech/rehype-toc"; // pending merge of https://github.com/JS-DevTools/rehype-toc/pull/3
import headings from "rehype-autolink-headings";

const mdx = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [
      [slug],
      [
        headings,
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
        toc,
        {
          placeholder: "{{TOC}}",
          headings: ["h1", "h2", "h3"],
        },
      ],
    ],
    remarkPlugins: [],
  },
});

export default mdx({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
