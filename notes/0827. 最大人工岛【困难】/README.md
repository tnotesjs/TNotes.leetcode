# [0827. 最大人工岛【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0827.%20%E6%9C%80%E5%A4%A7%E4%BA%BA%E5%B7%A5%E5%B2%9B%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/making-a-large-island/)

给你一个大小为 `n x n` 二进制矩阵 `grid`。最多 只能将一格 `0` 变成 `1`。

返回执行此操作后，`grid` 中最大的岛屿面积是多少？

岛屿 由一组上、下、左、右四个方向相连的 `1` 形成。

---

示例 1：

```txt
输入: grid = [[1, 0], [0, 1]]
输出: 3
解释: 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。
```

示例 2：

```txt
输入: grid = [[1, 1], [1, 0]]
输出: 4
解释: 将一格0变成1，岛屿的面积扩大为 4。
```

示例 3：

```txt
输入: grid = [[1, 1], [1, 1]]
输出: 4
解释: 没有0可以让我们变成1，面积依然为 4。
```

---

提示：

- `n == grid.length`
- `n == grid[i].length`
- `1 <= n <= 500`
- `grid[i][j]` 为 `0` 或 `1`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
