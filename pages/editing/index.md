# Editing handbook content

{{TOC}}

## Repository structure

The content of this handbook is kept in a GitHub repository, with all of the pages that are served for the site underneath the `/pages` folder.

## Basic editing

You can add `.md`, `.mdx`, `.js`, and `.jsx` files into any folders underneath `/pages`, and they will automatically render as pages, at the same path they are added.

## Table of contents

You can add a table of contents anywhere on a page by adding the text `{{TOC}}`. This will be replaced at build time with a table of contents for that page.

## Images

Recommendations on how to use images in your handbook is still TBD.

## Advanced editing

You can get a lot of this handbook without taking advantage of any of the below advanced features, but for more complicated use cases they are available.

### Embedded JavaScript in markdown

This handbook supports the use of embedded react components on markdown pages using MDX. To take advantage of this optional feature, you should:

- Add your custom components to the `/components` folder
- Modify your `.md` or `.mdx` files to import and use the components (both file extensions will process MDX if it is included.)

Check the official MDX site to [learn more about MDX](https://mdxjs.com/mdx/).
