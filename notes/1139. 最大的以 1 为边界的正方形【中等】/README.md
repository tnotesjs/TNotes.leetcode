# [1139. 最大的以 1 为边界的正方形【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1139.%20%E6%9C%80%E5%A4%A7%E7%9A%84%E4%BB%A5%201%20%E4%B8%BA%E8%BE%B9%E7%95%8C%E7%9A%84%E6%AD%A3%E6%96%B9%E5%BD%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 前缀和](#2--s1---前缀和)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-1-bordered-square/)

给你一个由若干 `0` 和 `1` 组成的二维网格 `grid`，请你找出边界全部由 `1` 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回 `0`。

---

示例 1：

```txt
输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
输出：9
```

示例 2：

```txt
输入：grid = [[1,1,0,0]]
输出：1
```

---

提示：

- `1 <= grid.length <= 100`
- `1 <= grid[0].length <= 100`
- `grid[i][j]` 为 `0` 或 `1`

## 2. 🎯 s.1 - 前缀和

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n \times \min(m, n))$，其中 $m$、$n$ 是矩阵的行数和列数
- 空间复杂度：$O(m \times n)$，前缀和数组

算法思路：

- 预处理每个位置向左/向上连续 1 的个数
- 以每个位置作为正方形右下角，检查四条边是否都有足够的连续 1
- 从大到小枚举边长，找到第一个满足条件的即可
