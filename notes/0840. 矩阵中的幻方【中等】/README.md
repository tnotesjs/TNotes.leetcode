# [0840. 矩阵中的幻方【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0840.%20%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%9A%84%E5%B9%BB%E6%96%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/magic-squares-in-grid/)

`3 x 3` 的幻方是一个填充有 从 `1` 到 `9` 的不同数字的 `3 x 3` 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。

给定一个由整数组成的`row x col` 的 `grid`，其中有多少个 `3 × 3` 的 “幻方” 子矩阵？

注意：虽然幻方只能包含 1 到 9 的数字，但 `grid` 可以包含最多 15 的数字。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-22-28.png)

```txt
输入: grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2]
]

输出: 1
```

- 解释:
  - 下面的子矩阵是一个 3 x 3 的幻方：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-23-54.png)
  - 而这一个不是：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-24-05.png)
  - 总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。

---

示例 2：

```txt
输入: grid = [[8]]
输出: 0
```

---

提示：

- `row == grid.length`
- `col == grid[i].length`
- `1 <= row, col <= 10`
- `0 <= grid[i][j] <= 15`

## 2. 🎯 s.1 - 枚举

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 m 和 n 是矩阵的行列数
- 空间复杂度：$O(1)$

算法思路：

- 枚举每个 $3 \times 3$ 子矩阵，检查是否包含 1-9 且行、列、对角线和均为 15
