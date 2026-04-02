# [3240. 最少翻转次数使二进制矩阵回文 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3240.%20%E6%9C%80%E5%B0%91%E7%BF%BB%E8%BD%AC%E6%AC%A1%E6%95%B0%E4%BD%BF%E4%BA%8C%E8%BF%9B%E5%88%B6%E7%9F%A9%E9%98%B5%E5%9B%9E%E6%96%87%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心](#2--s1---贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/)

给你一个 `m x n` 的二进制矩阵 `grid`。

如果矩阵中一行或者一列从前往后与从后往前读是一样的，那么我们称这一行或者这一列是 回文 的。

你可以将 `grid` 中任意格子的值 翻转，也就是将格子里的值从 `0` 变成 `1`，或者从 `1` 变成 `0`。

请你返回 最少 翻转次数，使得矩阵中 所有 行和列都是 回文的，且矩阵中 `1` 的数目可以被 `4` 整除。

---

示例 1：

输入：grid = [[1,0,0],[0,1,0],[0,0,1]]

输出：3

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-32-01.png)

---

示例 2：

输入：grid = [[0,1],[0,1],[0,0]]

输出：2

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-32-05.png)

---

示例 3：

输入：grid = [[1],[1]]

输出：2

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-32-10.png)

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m * n <= 2 * 10^5`
- `0 <= grid[i][j] <= 1`

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(m \times n)$，遍历矩阵
- 空间复杂度：$O(1)$，只用常数额外空间

算法思路：

- 四角对称的 4 个位置取多数值，使翻转最少
- 中间行/列的对称对分为不同对（需翻转 1 次）和相同对
- 利用不同对的灵活性调整使 1 的总数为 4 的倍数

