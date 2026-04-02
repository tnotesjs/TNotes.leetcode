# [3115. 质数的最大距离【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3115.%20%E8%B4%A8%E6%95%B0%E7%9A%84%E6%9C%80%E5%A4%A7%E8%B7%9D%E7%A6%BB%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 遍历](#2--s1---遍历)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-prime-difference/)

给你一个整数数组 `nums`。

返回两个（不一定不同的）质数在 `nums` 中 下标 的 最大距离。

---

示例 1：

输入：nums = [4,2,9,5,3]

输出：3

解释：`nums[1]`、`nums[3]` 和 `nums[4]` 是质数。因此答案是 `|4 - 1| = 3`。

---

示例 2：

输入：nums = [4,8,2,8]

输出：0

解释：`nums[2]` 是质数。因为只有一个质数，所以答案是 `|2 - 2| = 0`。

---

提示：

- `1 <= nums.length <= 3 * 10^5`
- `1 <= nums[i] <= 100`
- 输入保证 `nums` 中至少有一个质数。

## 2. 🎯 s.1 - 遍历

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n \sqrt{M})$，其中 M 是数组元素的最大值
- 空间复杂度：$O(1)$，只用常数额外空间

算法思路：

- 找到数组中第一个和最后一个质数的下标
- 返回两个下标之差

