# About cms-eval

A history of many CMS - Content Management System I have used and evaluated.

I have used quite a few CMS for blogging purpose in the past. Some I like,
some not so much.

NOTE: My current blog site is at https://zemian.github.io

## Hisotry of CMS I used

### http://jroller.com/thebugslayer/

One of my earlier blog (I wrote about Scala programming then).


### http://saltnlight5.blogspot.com

I moved the blogging into google Blogger for easy use and looks compare
to jroller.

I stayed with this blogger for few years. Wrote mostly on Java and related programming
topics.

### https://lesscodelessbug.wordpress.com/

And another one at https://zemiancode.wordpress.com/

I tried little bit of wordpress, but didn't like it much at the time, and then move back to Blogger.

The main issue I have with WordPress is that it's not programmer friendly blogger by default. You need some theme and plugins to make it so. To do that, you need your own hosting. The wordpress.com free account is actually very limited what you can customize.

One big advantage of WP is user does not need to worry about inner working of the application. You litterally just write and publish.

I think WordPress is pretty interesting application in itself. And I did some more WordPress study on a separate repostiroy at https://github.com/zemian/learn-wordpress as a CMS and site development platform.

### https://github.com/zemian/adocblog

Wrote my own CMS (using Java and Asciidoc)

Hosted in Heruko and my own server.

* Too much work to just maintain CMS for personal use!

### https://medium.com/@zemiandeng

It looks good and easy to use, but it has limit of visists on free users!
This really bugs me.

### https://github.com/zemian/zemian.github.io

This is just a static web site hosted by GitHub (Pages).


## CMS Evaluation

### Static Site Generators Evaluation

* Jekyll (ruby) https://jekyllrb.com/ 
	- It's a ruby based generator
	- It's fast!
	- GitHub Pages supports this natively!
	- The Quartz Scheduler site is using this

* Pelican (python) https://blog.getpelican.com/
	- It's python based, and it's fast and easy to install
	- I like python and thought this would be best for me, but its default look is lacking.
	- The Markdown support is only so so.

* Hugo (goland) https://gohugo.io/
	- Looks good and has many theme support and it looks good. But I don't know much
	of go programming.
	- You need extra repository theme to customize it.

* jbake https://jbake.org/
	- Well java is my bread and butter lang, so I thought I will stick with this. Also
	the asciidoc support is good.
	- It can be complicated if you do not know some basic Java. 

* VuePress https://vuepress.vuejs.org/guide/
	- Use Markdown and VueJS to power blog or documentation site.
	- The startup can be slow.
	- The generate output has lots of changed files per one new post!

### Gridsome (JS)

https://gridsome.org

Gridsome makes it easy for developers to build static generated websites & apps that are fast by default 🚀

> Note: This framework is much larger compare to VuePress! It also require more setup.
> Seems to much to setup for simple blog publishing. But might be good to create custom site.

### https://www.netlifycms.org/  (JS and Hosting Platform)

Netlify CMS is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows.

A ReactJS based app.

Note: It's a frontend app that interactive with other Site Generator ad data layer!

### https://www.contentful.com/ (JS and Hosting Platform)

A content management system with REST API support.

## Evaluating Markdown parsers

* markdown-preview - a simple web server that serve markdown files. (Project has been archived by owner?)
    - https://github.com/yuanchuan/markdown-preview
* Markdown-it - VuePress uses this
* Marked - markdown-preview tool uses this. 
