# [2435. 矩阵中和能被 K 整除的路径【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2435.%20%E7%9F%A9%E9%98%B5%E4%B8%AD%E5%92%8C%E8%83%BD%E8%A2%AB%20K%20%E6%95%B4%E9%99%A4%E7%9A%84%E8%B7%AF%E5%BE%84%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k/)

给你一个下标从 0 开始的 `m x n` 整数矩阵 `grid` 和一个整数 `k`。你从起点 `(0, 0)` 出发，每一步只能往 下 或者往 右 ，你想要到达终点 `(m - 1, n - 1)`。

请你返回路径和能被 `k` 整除的路径数目，由于答案可能很大，返回答案对 `10^9 + 7` 取余 的结果。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-07-18.png)

```txt
输入：grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3
输出：2
解释：有两条路径满足路径上元素的和能被 k 整除。
第一条路径为上图中用红色标注的路径，和为 5 + 2 + 4 + 5 + 2 = 18 ，能被 3 整除。
第二条路径为上图中用蓝色标注的路径，和为 5 + 3 + 0 + 5 + 2 = 15 ，能被 3 整除。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-07-24.png)

```txt
输入：grid = [[0,0]], k = 5
输出：1
解释：红色标注的路径和为 0 + 0 = 0 ，能被 5 整除。
```

- 示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-07-32.png)

```txt
输入：grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]], k = 1
输出：10
解释：每个数字都能被 1 整除，所以每一条路径的和都能被 k 整除。
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 5 * 10^4`
- `1 <= m * n <= 5 * 10^4`
- `0 <= grid[i][j] <= 100`
- `1 <= k <= 50`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
