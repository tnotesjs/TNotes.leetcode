# [3212. 统计 X 和 Y 频数相等的子矩阵数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3212.%20%E7%BB%9F%E8%AE%A1%20X%20%E5%92%8C%20Y%20%E9%A2%91%E6%95%B0%E7%9B%B8%E7%AD%89%E7%9A%84%E5%AD%90%E7%9F%A9%E9%98%B5%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二维前缀和](#2--s1---二维前缀和)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-submatrices-with-equal-frequency-of-x-and-y/)

给你一个二维字符矩阵 `grid`，其中 `grid[i][j]` 可能是 `'X'`、`'Y'` 或 `'.'`，返回满足以下条件的子矩阵数量：

> 子矩阵 `(x1, y1, x2, y2)` 是一个通过选择所有 `x1 <= x <= x2` 且 `y1 <= y <= y2` 的元素形成的矩阵。

- 包含 `grid[0][0]`
- `'X'` 和 `'Y'` 的频数相等。
- 至少包含一个 `'X'`。

---

示例 1：

输入：grid = [["X","Y","."],["Y",".","."]]

输出：3

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-21-12.png)

---

示例 2：

输入：grid = [["X","X"],["X","Y"]]

输出：0

解释：

不存在满足 `'X'` 和 `'Y'` 频数相等的子矩阵。

---

示例 3：

输入：grid = [[".","."],[".","."]]

输出：0

解释：

不存在满足至少包含一个 `'X'` 的子矩阵。

---

提示：

- `1 <= grid.length, grid[i].length <= 1000`
- `grid[i][j]` 可能是 `'X'`、`'Y'` 或 `'.'`.

## 2. 🎯 s.1 - 二维前缀和

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(m \times n)$，遍历矩阵一次
- 空间复杂度：$O(m \times n)$，前缀和数组

算法思路：

- 用二维前缀和分别统计左上角到 (i,j) 的 X 和 Y 频数
- 当二者相等且大于 0 时计数加 1

