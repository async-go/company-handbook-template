import withMDX from '@next/mdx'
import slug from 'rehype-slug'
import toc from 'rehype-toc'

const mdx = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [
      [slug],
      [toc, {
        headings: ['h2', 'h3'],
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
