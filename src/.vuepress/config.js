const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '女性声音',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '声音',
        link: '/voice/',
      },
      {
        text: '新闻事实',
        link: '/thefact/'
      },
      {
        text: '书单',
        link: '/booklist/'
      },
      {
        text: '关于',
        link: '/about/'
      },
    ],
    sidebar: {
      '/voice/': [
        {
          title: '声音',
          collapsable: false,
          children: [
            '0001.md',
            '0002.md',
            '0003.md',
            '0004.md',
            '0005.md',
            '0006.md',
            '0007.md',
          ]
        },
      ],
      '/thefact/': [
        {
          title: '新闻事实',
          collapsable: false,
          children: [
            '0001.md',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
