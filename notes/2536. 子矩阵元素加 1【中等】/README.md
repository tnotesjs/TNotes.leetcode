# [2536. 子矩阵元素加 1【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2536.%20%E5%AD%90%E7%9F%A9%E9%98%B5%E5%85%83%E7%B4%A0%E5%8A%A0%201%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/increment-submatrices-by-one/)

给你一个正整数 `n` ，表示最初有一个 `n x n` 、下标从 0 开始的整数矩阵 `mat` ，矩阵中填满了 0。

另给你一个二维整数数组 `query`。针对每个查询 `query[i] = [row1i, col1i, row2i, col2i]` ，请你执行下述操作：

- 找出 左上角 为 `(row1i, col1i)` 且 右下角 为 `(row2i, col2i)` 的子矩阵，将子矩阵中的 每个元素 加 `1`。也就是给所有满足 `row1i <= x <= row2i` 和 `col1i <= y <= col2i` 的 `mat[x][y]` 加 `1`。

返回执行完所有操作后得到的矩阵 `mat`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-48-02.png)

```txt
输入：n = 3, queries = [[1,1,2,2],[0,0,1,1]]
输出：[[1,1,0],[1,2,1],[0,1,1]]
解释：上图所展示的分别是：初始矩阵、执行完第一个操作后的矩阵、执行完第二个操作后的矩阵。
- 第一个操作：将左上角为 (1, 1) 且右下角为 (2, 2) 的子矩阵中的每个元素加 1。
- 第二个操作：将左上角为 (0, 0) 且右下角为 (1, 1) 的子矩阵中的每个元素加 1。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-48-20.png)

```txt
输入：n = 2, queries = [[0,0,1,1]]
输出：[[1,1],[1,1]]
解释：上图所展示的分别是：初始矩阵、执行完第一个操作后的矩阵。
- 第一个操作：将矩阵中的每个元素加 1。
```

---

提示：

- `1 <= n <= 500`
- `1 <= queries.length <= 10^4`
- `0 <= row1i <= row2i < n`
- `0 <= col1i <= col2i < n`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
