const path = require('path');

let ogprefix = 'og: http://ogp.me/ns#';
let title = 'Liquivelte';
let description = 'Use Svelte in your Shopify theme development.';
let color = '#a33015';
let author = 'Muhammet Ali Petek';

export default {
  title: 'Liquivelte | Docs',
  description: 'Liquivelte Documentation & Examples',
  // logo: 'liquivelte.svg',
  lang: 'en-US',
  srcDir: '.',
  outDir: '../build',
  head: [[
    'link',
    {
      rel: 'icon', 
      type: 'image/svg',
      href:'liquivelte.svg'
    }],
  ['script',
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-C8TE7C6S3H',
      async: ''
  }],
  ['script',
    {
      src: 'gtag_init.js',
      async: ''
      }],
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'twitter:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://liquivelte.js.org' }],
    ['meta', { prefix: ogprefix, property: 'twitter:site', content: 'https://liquivelte.js.org' }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'twitter:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://liquivelte.js.org/liquivelte.svg' }],
    ['meta', { prefix: ogprefix, property: 'twitter:image', content: 'https://liquivelte.js.org/liquivelte.svg' }],
    ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: color }],
  ],
  themeConfig: {
    logo: '/liquivelte.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/malipetek/liquivelte-vscode' }
    ],
      sidebar: [
        {
          text: 'Setup',
          items: [
            { text: 'Introduction', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Inside "src" Folder', link: '/inside-src-folder' },
          ]
        },
        {
          text: 'Development',
          items: [
            { text: 'Liquivelte file type', link: '/liquivelte-files' },
            { text: 'Anatomie of a Component', link: '/anatomie-of-component' }
          ]
        }
      ]
  },
  markdown: {
    theme: 'github-dark',
    languages: [{
      id: 'liquivelte',
      scopeName: 'source.liquivelte',
      path: path.resolve(__dirname, './liquivelte.tmLanguage.json')
    },
    {
      id: 'svelte',
      scopeName: 'source.svelte',
      path: path.resolve(__dirname, './svelte.tmLanguage.json')
    },
      'javascript',
      'css',
      'liquid',
      'scss',
      'sass',
      'less'
    ]
  }
};