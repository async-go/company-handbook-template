import withMDX from '@next/mdx'
import slug from 'rehype-slug'
import toc from 'rehype-toc'
import headings from 'rehype-autolink-headings'

const mdx = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [
      [slug],
      [headings, {
        behavior: "append",
        content: {
          type: 'element',
          tagName: 'span',
          properties: {className: ['fas', 'fa-link', 'anchor-link']},
          children: []
        },
      }],
      [toc, {
        headings: ['h1', 'h2', 'h3'],
        position: "afterbegin",
        cssClasses: {
          toc: '',
        }
      }],
    ],
    remarkPlugins: [],
  },
})

export default mdx({
  pageExtensions: ["js", "jsx", "md", "mdx"],
})
