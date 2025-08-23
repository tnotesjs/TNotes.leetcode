import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"9996. hello-algo","description":"","frontmatter":{},"headers":[],"relativePath":"notes/9996. hello-algo/README.md","filePath":"notes/9996. hello-algo/README.md"}');
const _sfc_main = { name: "notes/9996. hello-algo/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="9996-hello-algo" tabindex="-1"><a href="https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/9996.%20hello-algo" target="_self" rel="noopener">9996. hello-algo</a> <a class="header-anchor" href="#9996-hello-algo" aria-label="Permalink to &quot;[9996. hello-algo](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/9996.%20hello-algo)&quot;" target="_self" rel="noopener">​</a></h1><ul><li><a href="#1--%E6%A6%82%E8%BF%B0" target="_self" rel="noopener">1. 📝 概述</a></li></ul><h2 id="1--概述" tabindex="-1">1. 📝 概述 <a class="header-anchor" href="#1--概述" aria-label="Permalink to &quot;1. 📝 概述&quot;" target="_self" rel="noopener">​</a></h2><ul><li><a href="https://github.com/krahets/hello-algo" target="_self" rel="noopener">https://github.com/krahets/hello-algo</a><ul><li>hello 算法 github 仓库</li><li>截止目前（25.08）：<code>116K star</code></li><li>《Hello 算法》：动画图解、一键运行的数据结构与算法教程。</li><li>支持 Python, Java, C++, C, C#, JS, Go, Swift, Rust, Ruby, Kotlin, TS, Dart 代码。</li></ul></li><li><a href="https://www.hello-algo.com/" target="_self" rel="noopener">https://www.hello-algo.com/</a><ul><li>hello 算法在线阅读</li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/9996. hello-algo/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
