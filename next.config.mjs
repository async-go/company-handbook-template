import withMDX from '@next/mdx'

const mdx = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
})

export default mdx({
  pageExtensions: ["js", "jsx", "md", "mdx"],
})
