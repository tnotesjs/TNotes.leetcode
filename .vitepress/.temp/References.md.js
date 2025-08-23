import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"References.md","filePath":"References.md"}');
const _sfc_main = { name: "References.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><ul><li><a href="https://github.com/doocs" target="_self" rel="noopener">https://github.com/doocs</a><ul><li>这是 GitHub 技术社区 Doocs</li></ul></li><li><a href="https://github.com/doocs/leetcode" target="_self" rel="noopener">https://github.com/doocs/leetcode</a><ul><li>截止目前（25.08）：<code>34.8k star</code></li><li>这是 github 项目仓库地址</li><li>🔥 LeetCode solutions in any programming language | 多种编程语言实现 LeetCode、《剑指 Offer（第 2 版）》、《程序员面试金典（第 6 版）》题解</li><li><strong>leetcode 上的相关例题，大多都可以在这个开源项目中找到。包括 leetcode 题库中的 3k 多道题，往期竞赛例题、《剑指 Offer》例题等等。</strong></li></ul></li><li><a href="https://doocs.github.io/leetcode/lc/1/" target="_self" rel="noopener">https://doocs.github.io/leetcode/lc/1/</a><ul><li>LeetCode 全解</li></ul></li><li><a href="https://github.com/krahets/hello-algo" target="_self" rel="noopener">https://github.com/krahets/hello-algo</a><ul><li>hello 算法 github 仓库</li><li>截止目前（25.08）：<code>116K star</code></li><li>《Hello 算法》：动画图解、一键运行的数据结构与算法教程。</li><li>支持 Python, Java, C++, C, C#, JS, Go, Swift, Rust, Ruby, Kotlin, TS, Dart 代码。</li></ul></li><li><a href="https://www.hello-algo.com/" target="_self" rel="noopener">https://www.hello-algo.com/</a><ul><li>hello 算法在线阅读</li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("References.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const References = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  References as default
};
