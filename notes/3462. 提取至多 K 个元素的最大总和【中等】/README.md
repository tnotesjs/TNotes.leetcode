# [3462. 提取至多 K 个元素的最大总和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3462.%20%E6%8F%90%E5%8F%96%E8%87%B3%E5%A4%9A%20K%20%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E6%9C%80%E5%A4%A7%E6%80%BB%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-sum-with-at-most-k-elements/)

给你一个大小为 `n x m` 的二维矩阵 `grid` ，以及一个长度为 `n` 的整数数组 `limits` ，和一个整数 `k`。你的目标是从矩阵 `grid` 中提取出 至多 `k` 个元素，并计算这些元素的最大总和，提取时需满足以下限制：

- 从 `grid` 的第 `i` 行提取的元素数量不超过 `limits[i]`。

返回最大总和。

---

- 示例 1：

输入： grid = [[1,2],[3,4]], limits = [1,2], k = 2

输出： 7

解释：

- 从第 2 行提取至多 2 个元素，取出 4 和 3。
- 至多提取 2 个元素时的最大总和 `4 + 3 = 7`。

---

- 示例 2：

输入： grid = [[5,3,7],[8,2,6]], limits = [2,2], k = 3

输出： 21

解释：

- 从第 1 行提取至多 2 个元素，取出 7。
- 从第 2 行提取至多 2 个元素，取出 8 和 6。
- 至多提取 3 个元素时的最大总和 `7 + 8 + 6 = 21`。

---

提示：

- `n == grid.length == limits.length`
- `m == grid[i].length`
- `1 <= n, m <= 500`
- `0 <= grid[i][j] <= 10^5`
- `0 <= limits[i] <= m`
- `0 <= k <= min(n * m, sum(limits))`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
