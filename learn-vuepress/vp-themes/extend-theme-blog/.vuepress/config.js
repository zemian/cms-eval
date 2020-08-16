module.exports = {
	title: "Extending Blog Theme",

	/*
	In defualt theme, the container are defined this way:
	("container" is just a shorthand way of "vuepress-plugin-container")

	  ['container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '警告'
        }
      }],
      ['container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }],
	*/

	plugins: [
		[
			"vuepress-plugin-container",
			{
        type: 'tip',
        defaultTitle: 'TIP'
			}
		],
    [
      "vuepress-plugin-container",
      {
        type: 'warning',
        defaultTitle: 'WARNING'
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: 'danger',
        defaultTitle: 'WARNING'
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }
    ],
	],

	themeConfig: {
	},
}