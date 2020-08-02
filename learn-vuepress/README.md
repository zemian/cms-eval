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

The following versions seems to have problem generating tags in blog

```
"vuepress": "^1.3.1",
"@vuepress/theme-blog": "^2.1.0"
```

When running dev mode, it gives a blank page. When running build mode, it gives a same
page as home page.

Upgrading it to latest, but still same issue.

```
"@vuepress/theme-blog": "^2.3",
"vuepress": "^1.5"
```

