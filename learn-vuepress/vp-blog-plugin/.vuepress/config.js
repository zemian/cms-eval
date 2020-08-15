module.exports = {
  title: 'Plain Blog',
  themeConfig: {
  },
  plugins: [
    ['@vuepress/plugin-blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/'
        },
      ]
    }],
  ]
}
