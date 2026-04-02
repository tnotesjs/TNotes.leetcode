# [2822. 对象反转【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2822.%20%E5%AF%B9%E8%B1%A1%E5%8F%8D%E8%BD%AC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 遍历](#2--s1---遍历)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/inversion-of-object)

给定一个对象 `obj`，返回一个反转的对象 `invertedObj`。

`invertedObj` 应该以 `obj` 的键作为值，以 `obj` 的值作为键。题目保证 `obj` 中的值仅为字符串。该函数应该处理重复值，也就是说，如果在 `obj` 中有多个具有相同值的键，那么 `invertedObj` 应该将该值映射到一个包含所有相应键的数组中。

示例 1：

- 输入：`obj = {"a": "1", "b": "2", "c": "3", "d": "4"}`
- 输出：`invertedObj = {"1": "a", "2": "b", "3": "c", "4": "d"}`
- 解释：obj 中的键变成 invertedObj 中的值，而 obj 中的值变成 invertedObj 中的键。

---

示例 2：

- 输入：`obj = {"a": "1", "b": "2", "c": "2", "d": "4"}`
- 输出：`invertedObj = {"1": "a", "2": ["b", "c"], "4": "d"}`
- 解释：在 obj 中有两个具有相同值的键，invertedObj 将该值映射到一个包含所有对应键的数组中。

---

示例 3：

- 输入：`obj = ["1", "2", "3", "4"]`
- 输出：`invertedObj = {"1": "0", "2": "1", "3": "2", "4": "3"}`
- 解释：数组也是对象，因此数组已经转换为一个对象，obj 中的键（索引）变成了 invertedObj 中的值，而 obj 中的值变成了 invertedObj 中的键。

---

提示：

- `obj` 是一个有效的 JSON 对象
- `typeof obj[key] === "string"`
- `2 <= JSON.stringify(obj).length <= 105`

## 2. 🎯 s.1 - 遍历

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，其中 N 是 obj 的键值对数量
- 空间复杂度：$O(N)$，存储结果对象

算法思路：

- 遍历 obj 的所有键值对，交换 key 和 value
- 如果反转后的 key 已存在于结果中，将其转为数组存储所有对应原始 key
