import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"0176. 第二高的薪水【中等】","description":"","frontmatter":{},"headers":[],"relativePath":"notes/0176. 第二高的薪水【中等】/README.md","filePath":"notes/0176. 第二高的薪水【中等】/README.md"}');
const _sfc_main = { name: "notes/0176. 第二高的薪水【中等】/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="0176-第二高的薪水中等" tabindex="-1"><a href="https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/0176.%20%E7%AC%AC%E4%BA%8C%E9%AB%98%E7%9A%84%E8%96%AA%E6%B0%B4%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91" target="_self" rel="noopener">0176. 第二高的薪水【中等】</a> <a class="header-anchor" href="#0176-第二高的薪水中等" aria-label="Permalink to &quot;[0176. 第二高的薪水【中等】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/0176.%20%E7%AC%AC%E4%BA%8C%E9%AB%98%E7%9A%84%E8%96%AA%E6%B0%B4%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)&quot;" target="_self" rel="noopener">​</a></h1><ul><li><a href="#1--description" target="_self" rel="noopener">1. 📝 Description</a></li><li><a href="#2--solutions" target="_self" rel="noopener">2. 🎯 Solutions</a></li></ul><h2 id="1--description" tabindex="-1">1. 📝 Description <a class="header-anchor" href="#1--description" aria-label="Permalink to &quot;1. 📝 Description&quot;" target="_self" rel="noopener">​</a></h2><details class="details custom-block"><summary><a href="https://leetcode.cn/problems/second-highest-salary" target="_self" rel="noopener">leetcode</a></summary><p><code>Employee</code> 表：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| Column Name | Type |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| id          | int  |</span></span>
<span class="line"><span>| salary      | int  |</span></span>
<span class="line"><span>+-------------+------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>id 是这个表的主键。表的每一行包含员工的工资信息。</p><p>查询并返回 <code>Employee</code>  表中第二高的 <strong>不同</strong>  薪水 。如果不存在第二高的薪水，查询应该返回 <code>null(Pandas 则返回 None)</code> 。</p><p>查询结果如下例所示。</p><hr><ul><li><strong>示例 1：</strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Employee 表：</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>| id | salary |</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>| 1  | 100    |</span></span>
<span class="line"><span>| 2  | 200    |</span></span>
<span class="line"><span>| 3  | 300    |</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+---------------------+</span></span>
<span class="line"><span>| SecondHighestSalary |</span></span>
<span class="line"><span>+---------------------+</span></span>
<span class="line"><span>| 200                 |</span></span>
<span class="line"><span>+---------------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><strong>示例 2：</strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Employee 表：</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>| id | salary |</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>| 1  | 100    |</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+---------------------+</span></span>
<span class="line"><span>| SecondHighestSalary |</span></span>
<span class="line"><span>+---------------------+</span></span>
<span class="line"><span>| null                |</span></span>
<span class="line"><span>+---------------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details><h2 id="2--solutions" tabindex="-1">2. 🎯 Solutions <a class="header-anchor" href="#2--solutions" aria-label="Permalink to &quot;2. 🎯 Solutions&quot;" target="_self" rel="noopener">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/0176. 第二高的薪水【中等】/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
