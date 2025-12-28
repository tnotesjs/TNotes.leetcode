# [3285. 找到稳定山的下标【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3285.%20%E6%89%BE%E5%88%B0%E7%A8%B3%E5%AE%9A%E5%B1%B1%E7%9A%84%E4%B8%8B%E6%A0%87%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 遍历](#2--s1---遍历)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-indices-of-stable-mountains/)

有 `n` 座山排成一列，每座山都有一个高度。给你一个整数数组 `height` ，其中 `height[i]` 表示第 `i` 座山的高度，再给你一个整数 `threshold`。

对于下标不为 `0` 的一座山，如果它左侧相邻的山的高度 严格大于 `threshold` ，那么我们称它是 稳定 的。我们定义下标为 `0` 的山 不是 稳定的。

请你返回一个数组，包含所有 稳定 山的下标，你可以以 任意 顺序返回下标数组。

---

示例 1：

输入： height = [1,2,3,4,5], threshold = 2

输出： [3,4]

解释：

- 下标为 3 的山是稳定的，因为 `height[2] == 3` 大于 `threshold == 2`。
- 下标为 4 的山是稳定的，因为 `height[3] == 4` 大于 `threshold == 2`.

---

示例 2：

输入： height = [10,1,10,1,10], threshold = 3

输出： [1,3]

---

示例 3：

输入： height = [10,1,10,1,10], threshold = 10

输出： []

---

提示：

- `2 <= n == height.length <= 100`
- `1 <= height[i] <= 100`
- `1 <= threshold <= 100`

## 2. 🎯 s.1 - 遍历

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(1)$，不计算返回数组

解题思路：

- 从下标 1 开始遍历，判断左侧相邻山的高度是否严格大于 threshold
- 满足条件则将当前下标加入结果数组
