const shiki = require('shiki');
const path = require('path');

// Thanks https://rodneylab.com/sveltekit-shiki-syntax-highlighting/
function escapeHtml(code) {
  return code.replace(
    /[{}`]/g,
    (character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' }[character]),
  );
}
let liquivelteHighlihter, svelteHighlihter;
(async () => {
  liquivelteHighlihter = await shiki.getHighlighter({
    theme: 'github-dark',
    langs: [
      {
        id: 'liquivelte',
        scopeName: 'source.liquivelte',
        path: path.resolve(__dirname, './liquivelte.tmLanguage.json')
      },
      'javascript',
      'css',
      'liquid',
      'scss',
      'sass',
      'less'
    ]
  });
  svelteHighlihter = await shiki.getHighlighter({
    theme: 'github-dark',
    langs: [
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
  });
})();

export default {
  title: 'Liquivelte | Docs',
  description: 'Liquivelte Documentation & Examples',
  lang: 'en-US',
  themeConfig: {
      logo: '/public/liquivelte.png',
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
    highlight: function (str, lang) {
      if (lang === 'liquivelte') {
        return escapeHtml(liquivelteHighlihter.codeToHtml(str, { lang: 'liquivelte' }));
      }
      if (lang === 'svelte') {
        return escapeHtml(svelteHighlihter.codeToHtml(str, { lang: 'svelte' }));
      }
    }
  }
};