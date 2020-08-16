VuePress themes can be customizable, but however if you do `eject` and not
inherit a theme, you will have a very **bare** layout that you will have to
write all your UI from scratch!

Start by exploring the `default-theme` and `theme-blog`. Note that they do
not inherit from each other! For example the `theme-blog` will not have the `vuepress-plugin-container` plugin enabled, where the `defualt-theme` does!
