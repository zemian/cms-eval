[VuePress](https://vuepress.vuejs.org) is a Static Site Generator powered by VueJS framework.

This folder contains only Markdown files, and yet you can preview it as a site
by simply using `vuepress dev` command. See "Option 1" setup instruciton below.


## Getting Started


### Option 1

Just create a folder with Markdown files and it can be served by the `vuepress` command!
	
	# Install the tool first
	yarn global add vuepress

	# Now setup a site with only Markdown files
	echo 'Hello World' > README.md
	vuepress dev
	open http://localhost:8080/

### Option 2

Create a full project. (It will prompt you for project info)

NOTE: You do not need `vuepress` command for this option.

	yarn create vuepress my-site
	yarn dev

See `../learn-vuepress` for example.

## VuePress CLI options

See [help.md](help.md)
