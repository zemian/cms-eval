# learn-vuepress/vp-blog

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

## Dependencies

VuePress 1.5.2 and theme-blog 2.3.1

```
learn-vuepress@0.0.1 /Users/zedeng/src/zemian/cms-eval/learn-vuepress/vp-blog
├─┬ @vuepress/theme-blog@2.3.1
│ ├── @vuepress/plugin-blog@1.9.2
│ ├── @vuepress/plugin-medium-zoom@1.0.0
│ ├── @vuepress/plugin-nprogress@1.0.0
│ ├── @vuepress/plugin-pwa@1.0.0
│ ├── @vuepress/plugin-search@1.0.0
│ ├── dayjs@1.8.33
│ ├── remove-markdown@0.3.0
│ ├── vue-feather-icons@4.22.0
│ └── vuepress-plugin-smooth-scroll@0.0.9
└─┬ vuepress@1.5.2
  ├── @vuepress/core@1.5.2
  ├── @vuepress/theme-default@1.5.2
  ├── cac@6.6.1
  ├── envinfo@7.7.2
  ├── opencollective-postinstall@2.0.3
  └── update-notifier@4.1.0
```

VuePress 1.5.4 and theme-blog 2.3.2

```
learn-vuepress@0.0.1 /Users/zedeng/src/zemian/cms-eval/learn-vuepress/vp-blog
├─┬ @vuepress/theme-blog@2.3.2
│ ├── @vuepress/plugin-blog@1.9.2
│ ├── @vuepress/plugin-medium-zoom@1.5.4
│ ├── @vuepress/plugin-nprogress@1.5.4
│ ├── @vuepress/plugin-pwa@1.5.4
│ ├── @vuepress/plugin-search@1.5.4
│ ├── dayjs@1.8.34
│ ├── remove-markdown@0.3.0
│ ├── vue-feather-icons@4.22.0
│ └── vuepress-plugin-smooth-scroll@0.0.9
├── esm@3.2.25
└─┬ vuepress@1.5.4
  ├── @vuepress/core@1.5.4
  ├── @vuepress/theme-default@1.5.4
  ├── cac@6.6.1
  ├── envinfo@7.7.3
  ├── opencollective-postinstall@2.0.3
  └── update-notifier@4.1.1
```

## TODO: Why do I get this error?

```
zedeng@zedeng-mac vp-blog % npx vuepress -v


Vue packages version mismatch:

- vue@2.6.11
- vue-server-renderer@2.6.12

This may cause things to work incorrectly. Make sure to use the same version for both.
```

The fix is to remove `node_modules` and `package-lock.json` and then reinstall it.

Also remove the global `vuepress` will help.
