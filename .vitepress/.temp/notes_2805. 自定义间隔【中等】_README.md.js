import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2805. 自定义间隔【中等】","description":"","frontmatter":{},"headers":[],"relativePath":"notes/2805. 自定义间隔【中等】/README.md","filePath":"notes/2805. 自定义间隔【中等】/README.md"}');
const _sfc_main = { name: "notes/2805. 自定义间隔【中等】/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="2805-自定义间隔中等" tabindex="-1"><a href="https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/2805.%20%E8%87%AA%E5%AE%9A%E4%B9%89%E9%97%B4%E9%9A%94%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91" target="_self" rel="noopener">2805. 自定义间隔【中等】</a> <a class="header-anchor" href="#2805-自定义间隔中等" aria-label="Permalink to &quot;[2805. 自定义间隔【中等】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/2805.%20%E8%87%AA%E5%AE%9A%E4%B9%89%E9%97%B4%E9%9A%94%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)&quot;" target="_self" rel="noopener">​</a></h1><ul><li><a href="#1--description" target="_self" rel="noopener">1. 📝 Description</a></li><li><a href="#2--solutions1" target="_self" rel="noopener">2. 🎯 Solutions.1</a></li></ul><h2 id="1--description" tabindex="-1">1. 📝 Description <a class="header-anchor" href="#1--description" aria-label="Permalink to &quot;1. 📝 Description&quot;" target="_self" rel="noopener">​</a></h2><details class="details custom-block"><summary><a href="https://leetcode.cn/problems/custom-interval" target="_self" rel="noopener">leetcode</a></summary><p><strong>函数</strong> <code>customInterval</code></p><p>给定一个函数 <code>fn</code>、一个数字 <code>delay</code> 和一个数字 <code>period</code>，返回一个数字 <code>id</code>。<code>customInterval</code> 是一个函数，它应该根据公式 <code>delay + period * count</code> 在间隔中执行提供的函数 <code>fn</code>，公式中的 <code>count</code> 表示从初始值 <code>0</code> 开始执行间隔的次数。</p><p><strong>函数</strong> <code>customClearInterval</code></p><p>给定 <code>id</code>。<code>id</code> 是从函数 <code>customInterval</code> 返回的值。<code>customClearInterval</code> 应该停止在间隔中执行提供的函数 <code>fn</code>。</p><p>**注意：**在 Node.js 中，<code>setTimeout</code> 和 <code>setInterval</code> 函数返回一个对象，而不是一个数字。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：delay = 50, period = 20, stopTime = 225</span></span>
<span class="line"><span>输出：[50,120,210]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>const t = performance.now()  </span></span>
<span class="line"><span>const result = []</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>const fn = () =&gt; {</span></span>
<span class="line"><span>    result.push(Math.floor(performance.now() - t))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const id = customInterval(fn, delay, period)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>    customClearInterval(id)</span></span>
<span class="line"><span>}, 225)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>50 + 20 * 0 = 50 // 50ms - 第一个函数调用</span></span>
<span class="line"><span>50 + 20 * 1 = 70 // 50ms + 70ms = 120ms - 第二个函数调用</span></span>
<span class="line"><span>50 + 20 * 2 = 90 // 50ms + 70ms + 90ms = 210ms - 第三个函数调用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>示例 2：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：delay = 20, period = 20, stopTime = 150</span></span>
<span class="line"><span>输出：[20,60,120]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>20 + 20 * 0 = 20 // 20ms - 第一个函数调用</span></span>
<span class="line"><span>20 + 20 * 1 = 40 // 20ms + 40ms = 60ms - 第二个函数调用</span></span>
<span class="line"><span>20 + 20 * 2 = 60 // 20ms + 40ms + 60ms = 120ms - 第三个函数调用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>示例 3：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：delay = 100, period = 200, stopTime = 500</span></span>
<span class="line"><span>输出：[100,400]</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>100 + 200 * 0 = 100 // 100ms - 第一个函数调用</span></span>
<span class="line"><span>100 + 200 * 1 = 300 // 100ms + 300ms = 400ms - 第二个函数调用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>提示：</strong></p><ul><li><code>20 &lt;= delay, period &lt;= 250</code></li><li><code>20 &lt;= stopTime &lt;= 1000</code></li></ul></details><h2 id="2--solutions1" tabindex="-1">2. 🎯 Solutions.1 <a class="header-anchor" href="#2--solutions1" aria-label="Permalink to &quot;2. 🎯 Solutions.1&quot;" target="_self" rel="noopener">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/2805. 自定义间隔【中等】/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
