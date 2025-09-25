# [0867. 转置矩阵【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0867.%20%E8%BD%AC%E7%BD%AE%E7%9F%A9%E9%98%B5%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/transpose-matrix/)

给你一个二维整数数组 `matrix`， 返回 `matrix` 的 **转置矩阵** 。

矩阵的 **转置** 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-11-58-27.png)

---

- **示例 1：**

```txt
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
```

- **示例 2：**

```txt
输入：matrix = [[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
```

---

**提示：**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 10^5`
- `-10^9 <= matrix[i][j] <= 10^9`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js {18} [js]

:::

- **时间复杂度：** $O(m \times n)$，需要遍历原矩阵的每个元素
- **空间复杂度：** $O(m \times n)$，需要创建一个新的转置矩阵
- **解题思路：**
  1. **获取矩阵维度**：首先获取原矩阵的行数 `m` 和列数 `n`
  2. **创建结果矩阵**：创建一个 `n×m` 的新矩阵用于存储转置结果
  3. **填充元素**：遍历原矩阵，将 `matrix[i][j]` 的元素放到 `transposed[j][i]` 的位置 -> **行列互换**
  4. **返回结果**：返回转置后的矩阵
