# [2290. 到达角落需要移除障碍物的最小数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2290.%20%E5%88%B0%E8%BE%BE%E8%A7%92%E8%90%BD%E9%9C%80%E8%A6%81%E7%A7%BB%E9%99%A4%E9%9A%9C%E7%A2%8D%E7%89%A9%E7%9A%84%E6%9C%80%E5%B0%8F%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner/)

给你一个下标从 0 开始的二维整数数组 `grid` ，数组大小为 `m x n`。每个单元格都是两个值之一：

- `0` 表示一个 空 单元格，
- `1` 表示一个可以移除的 障碍物。

你可以向上、下、左、右移动，从一个空单元格移动到另一个空单元格。

现在你需要从左上角 `(0, 0)` 移动到右下角 `(m - 1, n - 1)` ，返回需要移除的障碍物的 最小 数目。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-21-10.png)

```txt
输入：grid = [[0,1,1],[1,1,0],[1,1,0]]
输出：2
解释：可以移除位于 (0, 1) 和 (0, 2) 的障碍物来创建从 (0, 0) 到 (2, 2) 的路径。
可以证明我们至少需要移除两个障碍物，所以返回 2。
注意，可能存在其他方式来移除 2 个障碍物，创建出可行的路径。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-21-20.png)

```txt
输入：grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]
输出：0
解释：不移除任何障碍物就能从 (0, 0) 到 (2, 4) ，所以返回 0。
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10^5`
- `2 <= m * n <= 10^5`
- `grid[i][j]` 为 `0` 或 `1`
- `grid[0][0] == grid[m - 1][n - 1] == 0`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
