# Editing handbook content

## Repository structure

The content of this handbook is kept in a GitHub repository, with all of the pages that are served for the site underneath the `/pages` folder.

## Basic editing

You can add `.md`, `.mdx`, `.js`, and `.jsx` files into any folders underneath there, and they will automatically render as pages, at the same path they are added.

## Images

Recommendations on how to use images in your handbook is still TBD.

## Advanced editing

### Embedded JavaScript in markdown

This handbook supports the use of embedded react components on markdown pages using MDX. To take advantage of this optional feature, you should:

- Add your custom components to the `/components` folder
- Modify your `.md` or `.mdx` files to import and use the components (both file extensions will process MDX if it is included.)

Check the official MDX site to [learn more about MDX](https://mdxjs.com/mdx/).