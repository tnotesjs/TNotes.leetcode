# [3159. 查询数组中元素的出现位置【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3159.%20%E6%9F%A5%E8%AF%A2%E6%95%B0%E7%BB%84%E4%B8%AD%E5%85%83%E7%B4%A0%E7%9A%84%E5%87%BA%E7%8E%B0%E4%BD%8D%E7%BD%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-occurrences-of-an-element-in-an-array/)

给你一个整数数组 `nums` ，一个整数数组 `queries` 和一个整数 `x`。

对于每个查询 `queries[i]` ，你需要找到 `nums` 中第 `queries[i]` 个 `x` 的位置，并返回它的下标。如果数组中 `x` 的出现次数少于 `queries[i]` ，该查询的答案为 -1。

请你返回一个整数数组 `answer` ，包含所有查询的答案。

---

示例 1：

输入： nums = [1,3,1,7], queries = [1,3,2,4], x = 1

输出： [0,-1,2,-1]

解释：

- 第 1 个查询，第一个 1 出现在下标 0 处。
- 第 2 个查询，`nums` 中只有两个 1 ，所以答案为 -1。
- 第 3 个查询，第二个 1 出现在下标 2 处。
- 第 4 个查询，`nums` 中只有两个 1 ，所以答案为 -1。

---

示例 2：

输入： nums = [1,2,3], queries = [10], x = 5

输出： [-1]

解释：

- 第 1 个查询，`nums` 中没有 5 ，所以答案为 -1。

---

提示：

- `1 <= nums.length, queries.length <= 10^5`
- `1 <= queries[i] <= 10^5`
- `1 <= nums[i], x <= 10^4`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
