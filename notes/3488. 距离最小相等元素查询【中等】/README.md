# [3488. 距离最小相等元素查询【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3488.%20%E8%B7%9D%E7%A6%BB%E6%9C%80%E5%B0%8F%E7%9B%B8%E7%AD%89%E5%85%83%E7%B4%A0%E6%9F%A5%E8%AF%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/closest-equal-element-queries/)

给你一个 环形 数组 `nums` 和一个数组 `queries` 。

对于每个查询 `i` ，你需要找到以下内容：

- 数组 `nums` 中下标 `queries[i]` 处的元素与 任意 其他下标 `j`（满足 `nums[j] == nums[queries[i]]`）之间的 最小 距离。如果不存在这样的下标 `j`，则该查询的结果为 `-1` 。

返回一个数组 `answer`，其大小与 `queries` 相同，其中 `answer[i]` 表示查询`i`的结果。

---

- 示例 1：

输入： nums = [1,3,1,4,1,3,2], queries = [0,3,5]

输出： [2,-1,3]

解释：

- 查询 0：下标 `queries[0] = 0` 处的元素为 `nums[0] = 1` 。最近的相同值下标为 2，距离为 2。
- 查询 1：下标 `queries[1] = 3` 处的元素为 `nums[3] = 4` 。不存在其他包含值 4 的下标，因此结果为 -1。
- 查询 2：下标 `queries[2] = 5` 处的元素为 `nums[5] = 3` 。最近的相同值下标为 1，距离为 3（沿着循环路径：`5 -> 6 -> 0 -> 1`）。

---

- 示例 2：

输入： nums = [1,2,3,4], queries = [0,1,2,3]

输出： [-1,-1,-1,-1]

解释：

数组 `nums` 中的每个值都是唯一的，因此没有下标与查询的元素值相同。所有查询的结果均为 -1。

---

提示：

- `1 <= queries.length <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`
- `0 <= queries[i] < nums.length`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
