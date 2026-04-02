# [1536. 排布二进制网格的最少交换次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1536.%20%E6%8E%92%E5%B8%83%E4%BA%8C%E8%BF%9B%E5%88%B6%E7%BD%91%E6%A0%BC%E7%9A%84%E6%9C%80%E5%B0%91%E4%BA%A4%E6%8D%A2%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心 + 冒泡](#2--s1---贪心--冒泡)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-swaps-to-arrange-a-binary-grid/)

给你一个 `n x n` 的二进制网格 `grid`，每一次操作中，你可以选择网格的 相邻两行 进行交换。

一个符合要求的网格需要满足主对角线以上的格子全部都是 0。

请你返回使网格满足要求的最少操作次数，如果无法使网格符合要求，请你返回 \-1。

主对角线指的是从 `(1, 1)` 到 `(n, n)` 的这些格子。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-47-05.png)

```txt
输入：grid = [[0,0,1],[1,1,0],[1,0,0]]
输出：3
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-47-11.png)

```txt
输入：grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
输出：-1
解释：所有行都是一样的，交换相邻行无法使网格符合要求。
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-47-16.png)

```txt
输入：grid = [[1,0,0],[1,1,0],[1,1,1]]
输出：0
```

---

提示：

- `n == grid.length`
- `n == grid[i].length`
- `1 <= n <= 200`
- `grid[i][j]` 要么是 `0` 要么是 `1`。

## 2. 🎯 s.1 - 贪心 + 冒泡

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 $n$ 是网格的行数
- 空间复杂度：$O(n)$，记录每行尾部连续 0 的个数

算法思路：

- 统计每行尾部连续 0 的个数 `zeros[i]`
- 第 $i$ 行需要至少 $n - 1 - i$ 个尾部 0
- 贪心地从第 $i$ 行开始向下查找满足条件的行，将其冒泡交换上来
- 若找不到满足条件的行，返回 -1
