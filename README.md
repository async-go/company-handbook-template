# Company handbook template

This is a company handbook template meant to be used by any company that wants an easy to setup but highly customizable public or private handbook. It is implemented in [Next.js](https://nextjs.org/), and is inspired by great ones like the ones made by [GitLab](https://about.gitlab.com/handbook/) and [Sourcegraph](https://handbook.sourcegraph.com). It is intended to help you get some of the basic infrastructure up and running quickly, with the key difference that company handbook-specific data sources are built in. For example:

- Static content
  - Company information
  - Company-wide practices (for example, communication and async)
  - Values
  - Per-department guides
  - How to use the handbook content
- Dynamic content  
  - Team member bios (to be added)
  - Feature lists (to be added)
  - Pricing tiers (to be added)
  - Product areas (to be added)

It's designed to make all of this easy to interact with, both for technical and non-technical team members.

## Opinionated examples

This template is designed to be opinionated. It includes examples and content that are based on lessons learned we've seen work well in many places. You're of course free to diverge and remove/add anything you like, but we explicitly are aiming for a starting point that people new to these kinds of handbooks can get value and learn from.

## Wiki vs. Static Site

One thing you might be wondering is why not just use a wiki or live document editor instead of a static site for your company handbook. The main reason is the pull request workflow, where every proposed change can first be discussed using the features built-in to the merge flow of your code host. These preserve the "who" and "why" for a change much better than the alternatives, which is very important in the context of a company handbook.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/async-go/company-handbook-template/tree/main)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/async-go/company-handbook-template/tree/main&project-name=company-handbook-template&repository-name=company-handbook-template)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/async-go/company-handbook-template company-handbook-app
# or
yarn create next-app --example https://github.com/async-go/company-handbook-template company-handbook-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).