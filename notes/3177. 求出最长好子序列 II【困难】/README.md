# [3177. 求出最长好子序列 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3177.%20%E6%B1%82%E5%87%BA%E6%9C%80%E9%95%BF%E5%A5%BD%E5%AD%90%E5%BA%8F%E5%88%97%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-maximum-length-of-a-good-subsequence-ii/)

给你一个整数数组 `nums` 和一个 非负 整数 `k`。如果一个整数序列 `seq` 满足在范围下标范围 `[0, seq.length - 2]` 中存在 不超过 `k` 个下标 `i` 满足 `seq[i] != seq[i + 1]` ，那么我们称这个整数序列为 好 序列。

请你返回 `nums` 中 好 子序列 的最长长度

> 子序列 是可以通过从另一个数组删除或不删除某些元素，但不更改其余元素的顺序得到的数组。

---

示例 1：

输入： nums = [1,2,1,1,3], k = 2

输出： 4

解释：

最长好子序列为 `[1,2,1,1,3]`。

---

示例 2：

输入： nums = [1,2,3,4,5,1], k = 0

输出： 2

解释：

最长好子序列为 `[1,2,3,4,5,1]`。

---

提示：

- `1 <= nums.length <= 5 * 10^3`
- `1 <= nums[i] <= 10^9`
- `0 <= k <= min(50, nums.length)`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
