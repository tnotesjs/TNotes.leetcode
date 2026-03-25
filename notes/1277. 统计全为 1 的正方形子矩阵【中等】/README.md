# [1277. 统计全为 1 的正方形子矩阵【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1277.%20%E7%BB%9F%E8%AE%A1%E5%85%A8%E4%B8%BA%201%20%E7%9A%84%E6%AD%A3%E6%96%B9%E5%BD%A2%E5%AD%90%E7%9F%A9%E9%98%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-square-submatrices-with-all-ones/)

给你一个 `m * n` 的矩阵，矩阵中的元素不是 `0` 就是 `1`，请你统计并返回其中完全由 `1` 组成的 正方形 子矩阵的个数。

---

示例 1：

```txt
输入：matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
输出：15
解释：
边长为 1 的正方形有 10 个。
边长为 2 的正方形有 4 个。
边长为 3 的正方形有 1 个。
正方形的总数 = 10 + 4 + 1 = 15.
```

示例 2：

```txt
输入：matrix =
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
输出：7
解释：
边长为 1 的正方形有 6 个。
边长为 2 的正方形有 1 个。
正方形的总数 = 6 + 1 = 7.
```

---

提示：

- `1 <= arr.length <= 300`
- `1 <= arr[0].length <= 300`
- `0 <= arr[i][j] <= 1`

## 2. 🎯 s.1 - 动态规划

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 $m$、$n$ 是矩阵的行数和列数
- 空间复杂度：$O(m \times n)$，dp 数组的大小

算法思路：

- dp[i][j] 表示以 (i,j) 为右下角的最大正方形边长
- 转移方程：dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
- dp[i][j] 的值也代表以该点为右下角的正方形数量，累加所有 dp 值即为答案
