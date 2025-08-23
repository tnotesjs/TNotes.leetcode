import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"⚙️ Settings","description":"","frontmatter":{},"headers":[],"relativePath":"Settings.md","filePath":"Settings.md"}');
const _sfc_main = { name: "Settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Settings = resolveComponent("Settings", true);
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="️-settings" tabindex="-1">⚙️ Settings <a class="header-anchor" href="#️-settings" aria-label="Permalink to &quot;⚙️ Settings&quot;" target="_self" rel="noopener">​</a></h1>`);
  _push(ssrRenderComponent(_component_Settings, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Settings as default
};
