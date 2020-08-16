VuePress themes can be customizable, but however if you do `eject` and not
inherit a theme, you will have a very **bare** layout that you will have to
write all your UI from scratch!

Start by exploring the `theme-default` and `theme-blog`. Note that they do
not inherit from each other! For example the `theme-blog` will not have the `vuepress-plugin-container` plugin enabled, where the `theme-default` does!


## What comes out of box for VuePress?

https://vuepress.vuejs.org/plugin/#out-of-the-box


Plugins that come with VuePress

	@vuepress/plugin-last-updated
	@vuepress/plugin-register-components

Plugins that come with the default theme

	@vuepress/plugin-active-header-links
	@vuepress/plugin-nprogress
	@vuepress/plugin-search
	vuepress-plugin-container
	vuepress-plugin-smooth-scroll