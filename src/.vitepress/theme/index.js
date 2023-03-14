import DefaultTheme from 'vitepress/theme';
/** @type {import('vitepress-plugin-google-analytics')} */
import googleAnalytics from 'vitepress-plugin-google-analytics';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    googleAnalytics({
      id: 'G-C8TE7C6S3H',
    })
  }
};