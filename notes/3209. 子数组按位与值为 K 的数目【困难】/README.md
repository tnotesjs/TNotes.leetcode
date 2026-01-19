# [3209. 子数组按位与值为 K 的数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3209.%20%E5%AD%90%E6%95%B0%E7%BB%84%E6%8C%89%E4%BD%8D%E4%B8%8E%E5%80%BC%E4%B8%BA%20K%20%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-subarrays-with-and-value-of-k/)

给你一个整数数组 `nums` 和一个整数 `k`，请你返回 `nums` 中有多少个子数组满足：子数组中所有元素按位 `AND` 的结果为 `k`。

> 子数组 是数组中连续的 非空 元素序列。

---

示例 1：

输入：nums = [1,1,1], k = 1

输出：6

解释：

所有子数组都只含有元素 1。

---

示例 2：

输入：nums = [1,1,2], k = 1

输出：3

解释：

按位 `AND` 值为 1 的子数组包括：`[1,1,2]`, `[1,1,2]`, `[1,1,2]`。

---

示例 3：

输入：nums = [1,2,3], k = 2

输出：2

解释：

按位 `AND` 值为 2 的子数组包括：`[1,2,3]`, `[1,2,3]`。

---

提示：

- `1 <= nums.length <= 10^5`
- `0 <= nums[i], k <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
