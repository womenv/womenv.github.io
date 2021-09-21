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
        text: '创作',
        link: '/works/'
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
          children: genSidebarChildren(15)
        },
      ],
      '/thefact/': [
        {
          title: '新闻事实',
          collapsable: false,
          children: ['READMD.md', ...genSidebarChildren(1)]
        },
      ],
      '/works/': [
        {
          title: '脱束身衣漫画',
          collapsable: false,
          children: [
            'hgnqmh001.md',
            'hgnqmh002.md',
            'hgnqmh003.md',
            'hgnqmh004.md',
            'hgnqmh005.md',
            'hgnqmh006.md',
            'hgnqmh007.md',
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

function genSidebarChildren(n) {
  return Array(n).fill(0).map((e, i) => ('000' + (i + 1).toString()).slice(-4) + '.md')
}
