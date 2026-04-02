# [2667. 创建 Hello World 函数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2667.%20%E5%88%9B%E5%BB%BA%20Hello%20World%20%E5%87%BD%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 闭包](#2--s1---闭包)
- [3. 🫧 评价](#3--评价)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/create-hello-world-function)

请你编写一个名为 `createHelloWorld` 的函数。它应该返回一个新的函数，该函数总是返回 `"Hello World"`。

示例 1：

- 输入：`args = []`
- 输出：`"Hello World"`
- 解释：
  - `const f = createHelloWorld();`
  - `f(); // "Hello World"`

`createHelloWorld` 返回的函数应始终返回 `"Hello World"`。

---

示例 2：

- 输入：`args = [{},null,42]`
- 输出：`"Hello World"`
- 解释：
  - `const f = createHelloWorld();`
  - `f({}, null, 42); // "Hello World"`

可以传递任何参数给函数，但它应始终返回 `"Hello World"`。

---

提示：

- `0 <= args.length <= 10`

## 2. 🎯 s.1 - 闭包

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

算法思路：

- 返回一个始终返回 "Hello World" 的函数

## 3. 🫧 评价

- 太看得起我了……
