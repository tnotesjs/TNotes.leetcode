# [3546. 等和矩阵分割 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3546.%20%E7%AD%89%E5%92%8C%E7%9F%A9%E9%98%B5%E5%88%86%E5%89%B2%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/equal-sum-grid-partition-i/)

给你一个由正整数组成的 `m x n` 矩阵 `grid`。你的任务是判断是否可以通过 一条水平或一条垂直分割线 将矩阵分割成两部分，使得：

- 分割后形成的每个部分都是 非空 的。
- 两个部分中所有元素的和 相等。

如果存在这样的分割，返回 `true`；否则，返回 `false`。

---

示例 1：

输入： grid = [[1,4],[2,3]]

输出： true

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-23-11-07.png)

在第 0 行和第 1 行之间进行水平分割，得到两个非空部分，每部分的元素之和为 5。因此，答案是 `true`。

---

示例 2：

输入： grid = [[1,3],[2,4]]

输出： false

解释：

无论是水平分割还是垂直分割，都无法使两个非空部分的元素之和相等。因此，答案是 `false`。

---

提示：

- `1 <= m == grid.length <= 10^5`
- `1 <= n == grid[i].length <= 10^5`
- `2 <= m * n <= 10^5`
- `1 <= grid[i][j] <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
