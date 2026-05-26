import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const title = 'Liquivelte v4';
const description = 'Liquid-first Shopify SSR with Svelte hydration through the Liquivelte v4 compiler.';
const url = 'https://liquivelte.js.org';
const author = 'Muhammet Ali Petek';

export default {
  title: 'Liquivelte v4 | Docs',
  description,
  mpa: true,
  cleanUrls: true,
  appearance: false,
  vite: {
    build: {
      minify: false,
      rollupOptions: {
        output: {
          manualChunks: {}
        }
      }
    }
  },
  logo: 'liquivelte.svg',
  lang: 'en-US',
  srcDir: '.',
  srcExclude: ['public/**'],
  outDir: '../build',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/liquivelte.svg' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-C8TE7C6S3H', async: '' }],
    ['script', { src: '/gtag_init.js', async: '' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { name: 'twitter:site', content: url }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { property: 'og:image', content: `${url}/liquivelte.svg` }],
    ['meta', { name: 'twitter:image', content: `${url}/liquivelte.svg` }],
    ['meta', { property: 'article:author', content: author }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }]
  ],
  themeConfig: {
    logo: '/liquivelte.png',
    nav: [
      { text: 'Start', link: '/getting-started' },
      { text: 'Agent Skill', link: '/agent-skill' },
      { text: 'GitHub', link: 'https://github.com/Liquivelte/liquivelte' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Liquivelte/liquivelte' },
      { icon: 'slack', link: 'https://join.slack.com/t/liquivelte/shared_invite/zt-1rb2dygkn-47NR2rQ_mAan33w3S9OVOQ' }
    ],
    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Agent Skill', link: '/agent-skill' },
          { text: 'V4 Direction', link: '/announcement' }
        ]
      },
      {
        text: 'Compiler',
        items: [
          { text: 'Compiler Setup', link: '/compiler-setup' },
          { text: 'Theme Structure', link: '/inside-src-folder' },
          { text: '.liquivelte Files', link: '/liquivelte-files' },
          { text: 'Component Anatomy', link: '/anatomie-of-component' }
        ]
      },
      {
        text: 'Theme Work',
        items: [
          { text: 'Theme Authoring', link: '/theme-authoring' }
        ]
      }
    ]
  },
  markdown: {
    theme: 'github-dark',
    languages: [
      {
        id: 'liquivelte',
        scopeName: 'source.liquivelte',
        path: resolve(__dirname, './liquivelte.tmLanguage.json')
      },
      {
        id: 'svelte',
        scopeName: 'source.svelte',
        path: resolve(__dirname, './svelte.tmLanguage.json')
      },
      'javascript',
      'typescript',
      'css',
      'liquid',
      'scss',
      'sass',
      'less'
    ]
  }
};
