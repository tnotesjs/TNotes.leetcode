# [2727. 判断对象是否为空【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2727.%20%E5%88%A4%E6%96%AD%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1](#2--s1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/is-object-empty)

给定一个对象或数组，判断它是否为空。

- 一个空对象不包含任何键值对。
- 一个空数组不包含任何元素。

你可以假设对象或数组是通过 `JSON.parse` 解析得到的。

---

示例 1：

- 输入：`obj = {"x": 5, "y": 42}`
- 输出：`false`
- 解释：这个对象有两个键值对，所以它不为空。

---

示例 2：

- 输入：`obj = {}`
- 输出：`true`
- 解释：这个对象没有任何键值对，所以它为空。

---

示例 3：

- 输入：`obj = [null, false, 0]`
- 输出：`false`
- 解释：这个数组有 `3` 个元素，所以它不为空。

---

提示：

- `obj` 是一个有效的 JSON 对象或数组
- `2 <= JSON.stringify(obj).length <= 10^5`

你可以在 `O(1)` 时间复杂度内解决这个问题吗？

## 2. 🎯 s.1 - Object.keys

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，其中 N 是对象的键数量
- 空间复杂度：$O(N)$

算法思路：

- 通过 `Object.keys(obj).length === 0` 判断对象或数组是否为空
