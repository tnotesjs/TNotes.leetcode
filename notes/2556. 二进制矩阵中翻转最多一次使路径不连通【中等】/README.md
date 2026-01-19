# [2556. 二进制矩阵中翻转最多一次使路径不连通【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2556.%20%E4%BA%8C%E8%BF%9B%E5%88%B6%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%BF%BB%E8%BD%AC%E6%9C%80%E5%A4%9A%E4%B8%80%E6%AC%A1%E4%BD%BF%E8%B7%AF%E5%BE%84%E4%B8%8D%E8%BF%9E%E9%80%9A%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/)

给你一个下标从 0 开始的 `m x n` 二进制 矩阵 `grid`。你可以从一个格子 `(row, col)` 移动到格子 `(row + 1, col)` 或者 `(row, col + 1)`，前提是前往的格子值为 `1`。如果从 `(0, 0)` 到 `(m - 1, n - 1)` 没有任何路径，我们称该矩阵是 不连通 的。

你可以翻转 最多一个 格子的值（也可以不翻转）。你 不能翻转 格子 `(0, 0)` 和 `(m - 1, n - 1)`。

如果可以使矩阵不连通，请你返回 `true`，否则返回 `false`。

注意，翻转一个格子的值，可以使它的值从 `0` 变 `1`，或从 `1` 变 `0`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-54-45.png)

```txt
输入：grid = [[1,1,1],[1,0,0],[1,1,1]]
输出：true
解释：按照上图所示我们翻转蓝色格子里的值，翻转后从 (0, 0) 到 (2, 2) 没有路径。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-54-51.png)

```txt
输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
输出：false
解释：无法翻转至多一个格子，使 (0, 0) 到 (2, 2) 没有路径。
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 10^5`
- `grid[0][0] == grid[m - 1][n - 1] == 1`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
