# [0073. 矩阵置零【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0073.%20%E7%9F%A9%E9%98%B5%E7%BD%AE%E9%9B%B6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 原地标记（首行首列复用）](#2--s1---原地标记首行首列复用)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/set-matrix-zeroes/)

给定一个 `*m* x *n*` 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用 [原地算法][1]。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-37-10.png)

```txt
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-37-16.png)

```txt
输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

---

提示：

- `m == matrix.length`
- `n == matrix[0].length`
- `1 <= m, n <= 200`
- `-2^31 <= matrix[i][j] <= 2^31 - 1`

进阶：

- 一个直观的解决方案是使用 `O(*mn*)` 的额外空间，但这并不是一个好的解决方案。
- 一个简单的改进方案是使用 `O(*m* + *n*)` 的额外空间，但这仍然不是最好的解决方案。
- 你能想出一个仅使用常量空间的解决方案吗？

## 2. 🎯 s.1 - 原地标记（首行首列复用）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，遍历矩阵常数次
- 空间复杂度：$O(1)$，利用矩阵自身首行首列作为标记，只使用常数额外空间

算法思路：

- 先用两个变量记录第一行和第一列是否本身含有 0
- 遍历矩阵（跳过首行首列），若 `matrix[i][j] == 0`，则将 `matrix[i][0]` 和 `matrix[0][j]` 标记为 0
- 根据首行首列的标记，将对应位置置 0
- 最后根据预存的变量，决定是否将第一行和第一列整体置 0

## 3. 🔗 引用

- [原地算法][1]

[1]: http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95
