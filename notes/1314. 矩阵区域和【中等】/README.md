# [1314. 矩阵区域和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1314.%20%E7%9F%A9%E9%98%B5%E5%8C%BA%E5%9F%9F%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/matrix-block-sum/)

给你一个 `m x n` 的矩阵 `mat` 和一个整数 `k`，请你返回一个矩阵 `answer`，其中每个 `answer[i][j]` 是所有满足下述条件的元素 `mat[r][c]` 的和：

- `i - k <= r <= i + k,`
- `j - k <= c <= j + k` 且
- `(r, c)` 在矩阵内。

---

示例 1：

```txt
输入：mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
输出：[[12,21,16],[27,45,33],[24,39,28]]
```

示例 2：

```txt
输入：mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2
输出：[[45,45,45],[45,45,45],[45,45,45]]
```

---

提示：

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n, k <= 100`
- `1 <= mat[i][j] <= 100`

## 2. 🎯 s.1 - 二维前缀和

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 $m$ 和 $n$ 分别是矩阵的行数和列数
- 空间复杂度：$O(m \times n)$，前缀和矩阵的空间

算法思路：

- 构建二维前缀和数组 prefix，其中 prefix[i+1][j+1] 表示 mat[0..i][0..j] 的元素和
- 对于每个位置 (i, j)，通过前缀和公式快速计算以 (i, j) 为中心、半径为 k 的矩形区域和
- 注意边界截断，行列索引不超出矩阵范围
