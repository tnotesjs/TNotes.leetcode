# [3187. 数组中的峰值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3187.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%B3%B0%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/peaks-in-array/)

数组 `arr` 中 大于 前面和后面相邻元素的元素被称为 峰值 元素。

给你一个整数数组 `nums` 和一个二维整数数组 `queries`。

你需要处理以下两种类型的操作：

- `queries[i] = [1, li, ri]` ，求出子数组 `nums[li..ri]` 中 峰值 元素的数目。
- `queries[i] = [2, indexi, vali]` ，将 `nums[indexi]` 变为 `vali`。

请你返回一个数组 `answer` ，它依次包含每一个第一种操作的答案。

注意：

- 子数组中 第一个 和 最后一个 元素都 不是 峰值元素。

---

示例 1：

输入：nums = [3,1,4,2,5], queries = [[2,3,4],[1,0,4]]

输出：[0]

解释：

第一个操作：我们将 `nums[3]` 变为 4 ，`nums` 变为 `[3,1,4,4,5]`。

第二个操作：`[3,1,4,4,5]` 中峰值元素的数目为 0。

---

示例 2：

输入：nums = [4,1,4,2,1,5], queries = [[2,2,4],[1,0,2],[1,0,4]]

输出：[0,1]

解释：

第一个操作：`nums[2]` 变为 4 ，它已经是 4 了，所以保持不变。

第二个操作：`[4,1,4]` 中峰值元素的数目为 0。

第三个操作：第二个 4 是 `[4,1,4,2,1]` 中的峰值元素。

---

提示：

- `3 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i][0] == 1` 或者 `queries[i][0] == 2`
- 对于所有的 `i` ，都有：
  - `queries[i][0] == 1` ：`0 <= queries[i][1] <= queries[i][2] <= nums.length - 1`
  - `queries[i][0] == 2` ：`0 <= queries[i][1] <= nums.length - 1`, `1 <= queries[i][2] <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
