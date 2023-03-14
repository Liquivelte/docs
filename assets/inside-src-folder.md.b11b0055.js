import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./chunks/plugin-vue_export-helper.14ae889d.js";
const __pageData = JSON.parse('{"title":"Inside src folder","description":"","frontmatter":{},"headers":[],"relativePath":"inside-src-folder.md"}');
const _sfc_main = { name: "inside-src-folder.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="inside-src-folder" tabindex="-1">Inside <code>src</code> folder <a class="header-anchor" href="#inside-src-folder" aria-hidden="true">#</a></h1><p>In the <code>src</code> folder, we can have anything really but for the purposes of Liquivelte there are 2 special folders.</p><ol><li><code>snippets</code> Modules in this folder will end up in the snippets as expected. But these are also component modules so we can include one another within the folder. It is wise to not do circular dependencies.</li><li><code>sections</code> Sections are going to end up in sections, sections can also be folders for extended modularity. Also sections are expected to have <code>schema</code> just like your regular sections.</li></ol>', 3);
const _hoisted_4 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_4);
}
const insideSrcFolder = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  insideSrcFolder as default
};
