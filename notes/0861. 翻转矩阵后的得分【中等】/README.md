# [0861. 翻转矩阵后的得分【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0861.%20%E7%BF%BB%E8%BD%AC%E7%9F%A9%E9%98%B5%E5%90%8E%E7%9A%84%E5%BE%97%E5%88%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/score-after-flipping-matrix/)

给你一个大小为 `m x n` 的二元矩阵 `grid` ，矩阵中每个元素的值为 `0` 或 `1`。

一次 移动 是指选择任一行或列，并转换该行或列中的每一个值：将所有 `0` 都更改为 `1`，将所有 `1` 都更改为 `0`。

在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的 得分 就是这些数字的总和。

在执行任意次 移动 后（含 0 次），返回可能的最高分数。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-11-54-21.png)

```txt
输入：grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
输出：39
解释：0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
```

示例 2：

```txt
输入：grid = [[0]]
输出：1
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 20`
- `grid[i][j]` 为 `0` 或 `1`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
