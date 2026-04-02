# [2704. 相等还是不相等【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2704.%20%E7%9B%B8%E7%AD%89%E8%BF%98%E6%98%AF%E4%B8%8D%E7%9B%B8%E7%AD%89%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 闭包](#2--s1---闭包)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/to-be-or-not-to-be)

请你编写一个名为 `expect` 的函数，用于帮助开发人员测试他们的代码。它应该接受任何值 `val` 并返回一个包含以下两个函数的对象。

- `toBe(val)` 接受另一个值并在两个值相等（ `===` ）时返回 `true`。如果它们不相等，则应抛出错误 `"Not Equal"`。
- `notToBe(val)` 接受另一个值并在两个值不相等（ `!==` ）时返回 `true`。如果它们相等，则应抛出错误 `"Equal"`。

---

示例 1：

- 输入：`func = () => expect(5).toBe(5)`
- 输出：`{"value": true}`
- 解释：`5 === 5` 因此该表达式返回 `true`。

---

示例 2：

- 输入：`func = () => expect(5).toBe(null)`
- 输出：`{"error": "Not Equal"}`
- 解释：`5 !== null` 因此抛出错误 `"Not Equal"`.

---

示例 3：

- 输入：`func = () => expect(5).notToBe(null)`
- 输出：`{"value": true}`
- 解释：`5 !== null` 因此该表达式返回 `true`.

## 2. 🎯 s.1 - 闭包

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

算法思路：

- 利用闭包捕获传入的 `val`，返回包含 `toBe` 和 `notToBe` 方法的对象
- `toBe` 使用严格等于 `===` 判断，不等则抛出 `"Not Equal"`
- `notToBe` 使用严格不等 `!==` 判断，相等则抛出 `"Equal"`
