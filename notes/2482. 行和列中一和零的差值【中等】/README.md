# [2482. 行和列中一和零的差值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2482.%20%E8%A1%8C%E5%92%8C%E5%88%97%E4%B8%AD%E4%B8%80%E5%92%8C%E9%9B%B6%E7%9A%84%E5%B7%AE%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 预计算行列计数](#2--s1---预计算行列计数)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/difference-between-ones-and-zeros-in-row-and-column/)

给你一个下标从 0 开始的 `m x n` 二进制矩阵 `grid`。

我们按照如下过程，定义一个下标从 0 开始的 `m x n` 差值矩阵 `diff` ：

- 令第 `i` 行一的数目为 `onesRowi`。
- 令第 `j` 列一的数目为 `onesColj`。
- 令第 `i` 行零的数目为 `zerosRowi`。
- 令第 `j` 列零的数目为 `zerosColj`。
- `diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj`

请你返回差值矩阵 `diff`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-20-38.png)

```txt
输入：grid = [[0,1,1],[1,0,1],[0,0,1]]
输出：[[0,0,4],[0,0,4],[-2,-2,2]]
解释：
- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0
- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0
- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4
- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0
- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0
- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4
- diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2
- diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2
- diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-20-45.png)

```txt
输入：grid = [[1,1,1],[1,1,1]]
输出：[[5,5,5],[5,5,5]]
解释：
- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5
- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5
- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5
- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5
- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5
- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `grid[i][j]` 要么是 `0`，要么是 `1`。

## 2. 🎯 s.1 - 预计算行列计数

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$
- 空间复杂度：$O(m + n)$

算法思路：

- 预计算每行和每列中 1 的个数
- diff[i][j] = 2 × rowOnes[i] + 2 × colOnes[j] - n - m
