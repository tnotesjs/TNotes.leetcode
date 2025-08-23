import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"0177. 第N高的薪水【中等】","description":"","frontmatter":{},"headers":[],"relativePath":"notes/0177. 第N高的薪水【中等】/README.md","filePath":"notes/0177. 第N高的薪水【中等】/README.md"}');
const _sfc_main = { name: "notes/0177. 第N高的薪水【中等】/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="0177-第n高的薪水中等" tabindex="-1"><a href="https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/0177.%20%E7%AC%ACN%E9%AB%98%E7%9A%84%E8%96%AA%E6%B0%B4%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91" target="_self" rel="noopener">0177. 第N高的薪水【中等】</a> <a class="header-anchor" href="#0177-第n高的薪水中等" aria-label="Permalink to &quot;[0177. 第N高的薪水【中等】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/0177.%20%E7%AC%ACN%E9%AB%98%E7%9A%84%E8%96%AA%E6%B0%B4%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)&quot;" target="_self" rel="noopener">​</a></h1><ul><li><a href="#1--description" target="_self" rel="noopener">1. 📝 Description</a></li><li><a href="#2--solutions" target="_self" rel="noopener">2. 🎯 Solutions</a></li></ul><h2 id="1--description" tabindex="-1">1. 📝 Description <a class="header-anchor" href="#1--description" aria-label="Permalink to &quot;1. 📝 Description&quot;" target="_self" rel="noopener">​</a></h2><details class="details custom-block"><summary><a href="https://leetcode.cn/problems/nth-highest-salary" target="_self" rel="noopener">leetcode</a></summary><p>表: <code>Employee</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| Column Name | Type |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| id          | int  |</span></span>
<span class="line"><span>| salary      | int  |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>id 是该表的主键（列中的值互不相同）。</span></span>
<span class="line"><span>该表的每一行都包含有关员工工资的信息。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>编写一个解决方案查询  <code>Employee</code> 表中第 <code>n</code> 高的  <strong>不同</strong> 工资。如果少于  <code>n</code> 个不同工资，查询结果应该为  <code>null</code> 。</p><p>查询结果格式如下所示。</p><hr><ul><li><strong>示例 1:</strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>输入:</span></span>
<span class="line"><span>Employee table:</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>| id | salary |</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>| 1  | 100    |</span></span>
<span class="line"><span>| 2  | 200    |</span></span>
<span class="line"><span>| 3  | 300    |</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>n = 2</span></span>
<span class="line"><span>输出:</span></span>
<span class="line"><span>+------------------------+</span></span>
<span class="line"><span>| getNthHighestSalary(2) |</span></span>
<span class="line"><span>+------------------------+</span></span>
<span class="line"><span>| 200                    |</span></span>
<span class="line"><span>+------------------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><strong>示例 2:</strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>输入:</span></span>
<span class="line"><span>Employee 表:</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>| id | salary |</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>| 1  | 100    |</span></span>
<span class="line"><span>+----+--------+</span></span>
<span class="line"><span>n = 2</span></span>
<span class="line"><span>输出:</span></span>
<span class="line"><span>+------------------------+</span></span>
<span class="line"><span>| getNthHighestSalary(2) |</span></span>
<span class="line"><span>+------------------------+</span></span>
<span class="line"><span>| null                   |</span></span>
<span class="line"><span>+------------------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h2 id="2--solutions" tabindex="-1">2. 🎯 Solutions <a class="header-anchor" href="#2--solutions" aria-label="Permalink to &quot;2. 🎯 Solutions&quot;" target="_self" rel="noopener">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/0177. 第N高的薪水【中等】/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
