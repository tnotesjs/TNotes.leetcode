# [3276. 选择矩阵中单元格的最大得分【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3276.%20%E9%80%89%E6%8B%A9%E7%9F%A9%E9%98%B5%E4%B8%AD%E5%8D%95%E5%85%83%E6%A0%BC%E7%9A%84%E6%9C%80%E5%A4%A7%E5%BE%97%E5%88%86%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/select-cells-in-grid-with-maximum-score/)

给你一个由正整数构成的二维矩阵 `grid`。

你需要从矩阵中选择 一个或多个 单元格，选中的单元格应满足以下条件：

- 所选单元格中的任意两个单元格都不会处于矩阵的 同一行。
- 所选单元格的值 互不相同。

你的得分为所选单元格值的总和。

返回你能获得的 最大 得分。

---

- 示例 1：

输入： grid = [[1,2,3],[4,3,2],[1,1,1]]

输出： 8

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-20-53-53.png)

选择上图中用彩色标记的单元格，对应的值分别为 1、3 和 4 。

---

- 示例 2：

输入： grid = [[8,7,6],[8,3,2]]

输出： 15

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-20-53-59.png)

选择上图中用彩色标记的单元格，对应的值分别为 7 和 8 。

---

提示：

- `1 <= grid.length, grid[i].length <= 10`
- `1 <= grid[i][j] <= 100`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
