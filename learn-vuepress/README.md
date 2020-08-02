# learn-vuepress

This project is generated using `yarn create vuepress learn-vuepress` with blog theme.

## Development

```bash
yarn install
yarn dev
yarn build
```

For more details, please head VuePress's [documentation](https://vuepress.vuejs.org/guide).

## About VuePress Blog

The default setup is using this [@vuepress/theme-blog](https://vuepress-theme-blog.ulivz.com/#using-vuepress-theme-blog), which superseded the old
`@vuepress/plugin-blog`.

To create new blog post, simply create new Markdown file under `blog/_posts` folder, with
`<year>-<month>-<date>-topic.md` file format. Each post would need a section called `frontmatter`
that looks like this:

```
---
date: 2020-08-02
tag: 
  - blog
  - vuepress
title: Hello World
---
```
