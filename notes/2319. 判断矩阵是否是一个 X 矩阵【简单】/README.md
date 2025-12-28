# [2319. 判断矩阵是否是一个 X 矩阵【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2319.%20%E5%88%A4%E6%96%AD%E7%9F%A9%E9%98%B5%E6%98%AF%E5%90%A6%E6%98%AF%E4%B8%80%E4%B8%AA%20X%20%E7%9F%A9%E9%98%B5%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-matrix-is-x-matrix/)

如果一个正方形矩阵满足下述 全部 条件，则称之为一个 X 矩阵 ：

1. 矩阵对角线上的所有元素都 不是 0
2. 矩阵中所有其他元素都是 0

给你一个大小为 `n x n` 的二维整数数组 `grid` ，表示一个正方形矩阵。如果 `grid` 是一个 X 矩阵 ，返回 `true` ；否则，返回 `false`。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-28-34.png)

```txt
输入：grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
输出：true
解释：矩阵如上图所示。
X 矩阵应该满足：绿色元素（对角线上）都不是 0 ，红色元素都是 0。
因此，grid 是一个 X 矩阵。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-28-40.png)

```txt
输入：grid = [[5,7,0],[0,3,1],[0,5,0]]
输出：false
解释：矩阵如上图所示。
X 矩阵应该满足：绿色元素（对角线上）都不是 0 ，红色元素都是 0。
因此，grid 不是一个 X 矩阵。
```

---

提示：

- `n == grid.length == grid[i].length`
- `3 <= n <= 100`
- `0 <= grid[i][j] <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
