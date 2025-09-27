# [2617. 网格图中最少访问的格子数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2617.%20%E7%BD%91%E6%A0%BC%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%B0%91%E8%AE%BF%E9%97%AE%E7%9A%84%E6%A0%BC%E5%AD%90%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-visited-cells-in-a-grid/)

给你一个下标从 **0**  开始的  `m x n`  整数矩阵  `grid` 。你一开始的位置在  **左上角**  格子  `(0, 0)` 。

当你在格子  `(i, j)`  的时候，你可以移动到以下格子之一：

- 满足 `j < k <= grid[i][j] + j`  的格子  `(i, k)` （向右移动），或者
- 满足 `i < k <= grid[i][j] + i`  的格子  `(k, j)` （向下移动）。

请你返回到达 **右下角**  格子  `(m - 1, n - 1)`  需要经过的最少移动格子数，如果无法到达右下角格子，请你返回  `-1` 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-21-15-52.png)

```txt
输入：grid = [[3,4,2,1],[4,2,3,1],[2,1,0,0],[2,4,0,0]]
输出：4
解释：上图展示了到达右下角格子经过的 4 个格子。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-21-15-57.png)

```txt
输入：grid = [[3,4,2,1],[4,2,1,1],[2,1,1,0],[3,4,1,0]]
输出：3
解释：上图展示了到达右下角格子经过的 3 个格子。
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-21-16-02.png)

```txt
输入：grid = [[2,1,0],[1,0,0]]
输出：-1
解释：无法到达右下角格子。
```

---

**提示：**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `0 <= grid[i][j] < m * n`
- `grid[m - 1][n - 1] == 0`

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
