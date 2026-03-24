# [0221. 最大正方形【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0221.%20%E6%9C%80%E5%A4%A7%E6%AD%A3%E6%96%B9%E5%BD%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximal-square/)

在一个由 `'0'` 和 `'1'` 组成的二维矩阵内，找到只包含 `'1'` 的最大正方形，并返回其面积。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-46-16.png)

```txt
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-46-22.png)

```txt
输入：matrix = [["0","1"],["1","0"]]
输出：1
```

示例 3：

```txt
输入：matrix = [["0"]]
输出：0
```

---

提示：

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 300`
- `matrix[i][j]` 为 `'0'` 或 `'1'`

## 2. 🎯 s.1 - 动态规划

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 $m$ 和 $n$ 是矩阵的行数和列数
- 空间复杂度：$O(m \times n)$，`dp` 数组

算法思路：

- $dp[i][j]$ 表示以 $(i,j)$ 为右下角的最大正方形边长
- 转移方程：$dp[i][j] = \min(dp[i-1][j],\, dp[i][j-1],\, dp[i-1][j-1]) + 1$
- 最终答案为最大边长的平方
