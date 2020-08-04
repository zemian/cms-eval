# learn-vuepress

> This project is generated using `yarn create vuepress learn-vuepress` with `blog` theme.

## Development

```bash
yarn install
yarn dev
yarn build
```

For more details, please head VuePress's [documentation](https://vuepress.vuejs.org/guide).

## Dev vs Build

Some feature (search) does not work properly when you run dev mode? It's find
in after you build the site.


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

## About VuePress installation

The `yarn create vuepress` might not use latest version of dependencies!
So you need to upgrade manually and re-run yarn install

## Tags problem in VuePress and Blog 

See https://github.com/vuejs/vuepress/issues/2553

Fix: Replace "tag" with "tags" in frontmatter section.

## Review Notes

- Modern and minimalistic looks
- Easy dev with VueJS and has plugin for extension
- Active comminity support

- Tags does not work
- Search only work in build mode
- The dev server is slow compare to Jekyll
