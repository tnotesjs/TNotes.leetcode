# [1582. 二进制矩阵中的特殊位置【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1582.%20%E4%BA%8C%E8%BF%9B%E5%88%B6%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%9A%84%E7%89%B9%E6%AE%8A%E4%BD%8D%E7%BD%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/special-positions-in-a-binary-matrix/)

给定一个 `m x n` 的二进制矩阵 `mat`，返回矩阵 `mat` 中特殊位置的数量。

如果位置 `(i, j)` 满足 `mat[i][j] == 1` 并且行 `i` 与列 `j` 中的所有其他元素都是 `0`（行和列的下标从 **0** 开始计数），那么它被称为 **特殊** 位置。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-07-17.png)

```txt
输入：mat = [[1,0,0],[0,0,1],[1,0,0]]
输出：1
解释：位置 (1, 2) 是一个特殊位置，因为 mat[1][2] == 1 且第 1 行和第 2 列的其他所有元素都是 0。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-07-22.png)

```txt
输入：mat = [[1,0,0],[0,1,0],[0,0,1]]
输出：3
解释：位置 (0, 0)，(1, 1) 和 (2, 2) 都是特殊位置。
```

---

**提示：**

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 100`
- `mat[i][j]` 是 `0` 或 `1`。

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
