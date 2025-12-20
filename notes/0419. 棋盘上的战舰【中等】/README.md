# [0419. 棋盘上的战舰【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0419.%20%E6%A3%8B%E7%9B%98%E4%B8%8A%E7%9A%84%E6%88%98%E8%88%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/battleships-in-a-board/)

给你一个大小为 `m x n` 的矩阵 `board` 表示棋盘，其中，每个单元格可以是一艘战舰 `'X'` 或者是一个空位 `'.'` ，返回在棋盘 `board` 上放置的 舰队 的数量。

舰队 只能水平或者垂直放置在 `board` 上。换句话说，舰队只能按 `1 x k`（`1` 行，`k` 列）或 `k x 1`（`k` 行，`1` 列）的形状放置，其中 `k` 可以是任意大小。两个舰队之间至少有一个水平或垂直的空格分隔 （即没有相邻的舰队）。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-13-39-57.png)

```txt
输入：board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
输出：2
```

- 示例 2：

```txt
输入：board = [["."]]
输出：0
```

---

提示：

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` 是 `'.'` 或 `'X'`

进阶：你可以实现一次扫描算法，并只使用 `O(1)` 额外空间，并且不修改 `board` 的值来解决这个问题吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
