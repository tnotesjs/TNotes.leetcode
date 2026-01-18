# [3397. 执行操作后不同元素的最大数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3397.%20%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C%E5%90%8E%E4%B8%8D%E5%90%8C%E5%85%83%E7%B4%A0%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-distinct-elements-after-operations/)

给你一个整数数组 `nums` 和一个整数 `k`。

你可以对数组中的每个元素 最多 执行 一次 以下操作：

- 将一个在范围 `[-k, k]` 内的整数加到该元素上。

返回执行这些操作后，`nums` 中可能拥有的不同元素的 最大 数量。

---

示例 1：

输入：nums = [1,2,2,3,3,4], k = 2

输出：6

解释：

对前四个元素执行操作，`nums` 变为 `[-1, 0, 1, 2, 3, 4]`，可以获得 6 个不同的元素。

---

示例 2：

输入：nums = [4,4,4,4], k = 1

输出：3

解释：

对 `nums[0]` 加 -1，以及对 `nums[1]` 加 1，`nums` 变为 `[3, 5, 4, 4]`，可以获得 3 个不同的元素。

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
