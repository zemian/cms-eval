# learn-vuepress

> This project is generated using `yarn create vuepress learn-vuepress` with `blog` theme.

NOTE: If `yarn` is slow. Alternative setup is using NPM:
```
npx create-vuepress learn-vuepress
cd $_
npm install
npm run dev
```

## Setup

```bash
yarn install
yarn dev
yarn build
```

To create new blog post, simply create new Markdown file under `blog/_posts` folder, with
`<year>-<month>-<date>-topic.md` file format.

For more details, please head VuePress's [documentation](https://vuepress.vuejs.org/guide).

## Tags problem in VuePress and Blog 

See https://github.com/vuejs/vuepress/issues/2553

Fix: Replace "tag" with "tags" in frontmatter section.

## What is theme-blog and plugin-blog

The plugin-blog is reusable unit of plugin that supports common blog features in VuePress. While
the theme-blog is buit on top to provide more UI looks and styling.

## Upgrading VuePress

The `yarn create vuepress` might not use latest version of dependencies!
So you need to upgrade manually update and re-run `yarn install`

## Review Notes

- Modern and minimalistic looks
- Easy dev with VueJS and has plugin for extension
- Active community support

## About yarn vs npm

As of today, `yarn` is many times slower in my own MacOX system compare to `npm`.
Sadly there are many open issue similar to this https://github.com/yarnpkg/yarn/issues/7921

* `yarn install` takes 321.89s
* `npm install` taskes 133.429s

## Concerning Issues with VuePress

* [The date in URL path to blog post is off](https://github.com/vuejs/vuepress/issues/2561)
	- But this seems to be more of the theme-blog or plugin-blog issues than vuepress itself.
* `vuepress dev blog` will not work after `vuepress eject blog`

* The parsing of Markdown is strict, meaning if there is any error, the page will not
render in HTML server, but no error message is display on console either :(

* THe `<pre>` default color is too light. Workaround:

	```
	<pre style="color: white;">
	{{ $page }}
	</pre>
	```
	