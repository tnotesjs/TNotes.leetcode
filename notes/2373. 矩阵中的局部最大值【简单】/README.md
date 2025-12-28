# [2373. 矩阵中的局部最大值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2373.%20%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%9A%84%E5%B1%80%E9%83%A8%E6%9C%80%E5%A4%A7%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-local-values-in-a-matrix/)

给你一个大小为 `n x n` 的整数矩阵 `grid`。

生成一个大小为 `(n - 2) x (n - 2)` 的整数矩阵 `maxLocal` ，并满足：

- `maxLocal[i][j]` 等于 `grid` 中以 `i + 1` 行和 `j + 1` 列为中心的 `3 x 3` 矩阵中的 最大值。

换句话说，我们希望找出 `grid` 中每个 `3 x 3` 矩阵中的最大值。

返回生成的矩阵。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-48-22.png)

```txt
输入：grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
输出：[[9,9],[8,6]]
解释：原矩阵和生成的矩阵如上图所示。
注意，生成的矩阵中，每个值都对应 grid 中一个相接的 3 x 3 矩阵的最大值。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-48-28.png)

```txt
输入：grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
输出：[[2,2,2],[2,2,2],[2,2,2]]
解释：注意，2 包含在 grid 中每个 3 x 3 的矩阵中。
```

---

提示：

- `n == grid.length == grid[i].length`
- `3 <= n <= 100`
- `1 <= grid[i][j] <= 100`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
