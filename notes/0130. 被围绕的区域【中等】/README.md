# [0130. 被围绕的区域【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0130.%20%E8%A2%AB%E5%9B%B4%E7%BB%95%E7%9A%84%E5%8C%BA%E5%9F%9F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - DFS 从边界出发](#2--s1---dfs-从边界出发)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/surrounded-regions/)

给你一个 `m x n` 的矩阵 `board`，由若干字符 `'X'` 和 `'O'` 组成，捕获 所有 被围绕的区域：

- 连接：一个单元格与水平或垂直方向上相邻的单元格连接。
- 区域：连接所有`'O'` 的单元格来形成一个区域。
- 围绕：如果您可以用 `'X'` 单元格 连接这个区域，并且区域中没有任何单元格位于 `board` 边缘，则该区域被 `'X'` 单元格围绕。

通过 原地 将输入矩阵中的所有 `'O'` 替换为 `'X'` 来 捕获被围绕的区域。你不需要返回任何值。

---

示例 1：

```txt
输入：board = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]
输出：[['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']]
```

- 解释：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-52-22.png)
  - 在上图中，底部的区域没有被捕获，因为它在 board 的边缘并且不能被围绕。

---

示例 2：

```txt
输入：board = [['X']]
输出：[['X']]
```

---

提示：

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` 为 `'X'` 或 `'O'`

## 2. 🎯 s.1 - DFS 从边界出发

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 $m$ 和 $n$ 分别是矩阵的行数和列数
- 空间复杂度：$O(m \times n)$，最坏情况下递归栈的深度

算法思路：

- 逆向思维：不直接找被围绕的区域，而是先找不被围绕的区域（与边界相连的 `O`）
- 从矩阵的四条边界出发，对所有边界上的 `O` 进行 DFS，将连通的 `O` 标记为 `#`
- 最后遍历矩阵：`#` 恢复为 `O`，剩余的 `O` 翻转为 `X`
