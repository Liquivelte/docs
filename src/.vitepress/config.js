const path = require('path');

export default {
  title: 'Liquivelte | Docs',
  description: 'Liquivelte Documentation & Examples',
  logo: 'liquivelte.svg',
  lang: 'en-US',
  outDir: '../docs',
  base: '/docs',
  head: [[
    'link',
    {
      rel: 'icon', 
      type: 'image/svg',
      href:'liquivelte.svg'
    }
  ]],
  themeConfig: {
      logo: '/liquivelte.png',
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