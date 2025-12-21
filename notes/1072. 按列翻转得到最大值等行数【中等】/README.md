# [1072. 按列翻转得到最大值等行数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1072.%20%E6%8C%89%E5%88%97%E7%BF%BB%E8%BD%AC%E5%BE%97%E5%88%B0%E6%9C%80%E5%A4%A7%E5%80%BC%E7%AD%89%E8%A1%8C%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/flip-columns-for-maximum-number-of-equal-rows/)

给定 `m x n` 矩阵 `matrix` 。

你可以从中选出任意数量的列并翻转其上的 每个 单元格。（即翻转后，单元格的值从 `0` 变成 `1`，或者从 `1` 变为 `0` 。）

返回 _经过一些翻转后，行内所有值都相等的最大行数_ 。

---

- 示例 1：

```txt
输入：matrix = [[0,1],[1,1]]
输出：1
解释：不进行翻转，有 1 行所有值都相等。
```

- 示例 2：

```txt
输入：matrix = [[0,1],[1,0]]
输出：2
解释：翻转第一列的值之后，这两行都由相等的值组成。
```

- 示例 3：

```txt
输入：matrix = [[0,0,0],[0,0,1],[1,1,0]]
输出：2
解释：翻转前两列的值之后，后两行由相等的值组成。
```

---

提示：

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 300`
- `matrix[i][j] == 0` 或 `1`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
