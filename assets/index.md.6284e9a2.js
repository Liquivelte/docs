import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./chunks/plugin-vue_export-helper.14ae889d.js";
const _imports_0 = "/liquid.png";
const _imports_1 = "/svelte.png";
const _imports_2 = "/liquivelte.png";
const __pageData = JSON.parse('{"title":"Liquid +  Svelte =  Liquivelte","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}');
const _sfc_main = { name: "index.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="liquid-svelte-liquivelte" tabindex="-1"><img src="' + _imports_0 + '" width="50" style="display:inline;vertical-align:bottom;"> Liquid + <img src="' + _imports_1 + '" width="50" style="display:inline;vertical-align:bottom;"> Svelte = <img src="' + _imports_2 + '" width="50" style="display:inline;vertical-align:bottom;"> Liquivelte <a class="header-anchor" href="#liquid-svelte-liquivelte" aria-hidden="true">#</a></h1><p>Liquivelte is a way to use <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> in <a href="https://shopify.dev/docs/themes" target="_blank" rel="noreferrer">Shopify theme development</a>. It has a <a href="https://marketplace.visualstudio.com/items?itemName=malipetek.liquivelte" target="_blank" rel="noreferrer">VSCode extension</a> that carries out a build process and outputs Liquid + JS and CSS.</p><p>Basic idea behind it is, <a href="https://shopify.github.io/liquid/tags/control-flow/" target="_blank" rel="noreferrer">liquid control flow tags</a> are very similar to <a href="https://svelte.dev/docs#template-syntax" target="_blank" rel="noreferrer">Svelte&#39;s</a>. So in theory we ca convert one to another.</p><p>VSCode extension at its core is a <a href="https://github.com/sveltejs/svelte-preprocess" target="_blank" rel="noreferrer">svelte preprocessor</a> that converts liquid template to valid Svelte before compilation. But it is a bit tricky, that is why this project is a VSCode extension rather than a rollup/webpack package.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Using this project requires both Liquid and Svelte knowledge.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a work in progress, a new version of extension will be published soon. This documentation reflects features of the future version.</p></div>', 6);
const _hoisted_7 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_7);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
