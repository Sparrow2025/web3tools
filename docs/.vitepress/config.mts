import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web3Tools",
  description: "所有Web3工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools', link: '/evm/index' }
    ],

    sidebar: [
      {
        text: 'Base Tools',
        items: [
          { text: 'Encoder', link: '/evm/index' }
        ]
      },
      {
        text: 'EVM Tools',
        items: [
          { text: 'Encoder', link: '/evm/index' }
        ]
      },
      {
        text: 'BTC Tools',
        items: [
          { text: 'BTC Encoder', link: '/btc/index' }
        ]

      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sparrow2025' }
    ]
  }
})
