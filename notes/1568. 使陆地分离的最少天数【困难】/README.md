# [1568. 使陆地分离的最少天数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1568.%20%E4%BD%BF%E9%99%86%E5%9C%B0%E5%88%86%E7%A6%BB%E7%9A%84%E6%9C%80%E5%B0%91%E5%A4%A9%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-days-to-disconnect-island/)

给你一个大小为 `m x n` ，由若干 `0` 和 `1` 组成的二维网格 `grid` ，其中 `1` 表示陆地， `0` 表示水。**岛屿** 由水平方向或竖直方向上相邻的 `1` （陆地）连接形成。

如果 **恰好只有一座岛屿** ，则认为陆地是 **连通的** ；否则，陆地就是 **分离的** 。

一天内，可以将 **任何单个** 陆地单元（`1`）更改为水单元（`0`）。

返回使陆地分离的最少天数。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-01-49.png)

```txt
输入：grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]
输出：2
解释：至少需要 2 天才能得到分离的陆地。
将陆地 grid[1][1] 和 grid[0][2] 更改为水，得到两个分离的岛屿。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-01-53.png)

```txt
输入：grid = [[1,1]]
输出：2
解释：如果网格中都是水，也认为是分离的 ([[1,1]] -> [[0,0]])，0 岛屿。
```

---

**提示：**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 30`
- `grid[i][j]` 为 `0` 或 `1`

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
