# [0576. 出界的路径数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0576.%20%E5%87%BA%E7%95%8C%E7%9A%84%E8%B7%AF%E5%BE%84%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/out-of-boundary-paths/)

给你一个大小为 `m x n` 的网格和一个球。球的起始坐标为 `[startRow, startColumn]`。你可以将球移到在四个方向上相邻的单元格内（可以穿过网格边界到达网格之外）。你 最多 可以移动 `maxMove` 次球。

给你五个整数 `m`、`n`、`maxMove`、`startRow` 以及 `startColumn`，找出并返回可以将球移出边界的路径数量。因为答案可能非常大，返回对 `10^9 + 7` 取余 后的结果。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-17-37-30.png)

```txt
输入：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
输出：6
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-17-37-34.png)

```txt
输入：m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
输出：12
```

---

提示：

- `1 <= m, n <= 50`
- `0 <= maxMove <= 50`
- `0 <= startRow < m`
- `0 <= startColumn < n`

## 2. 🎯 s.1 - 动态规划

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(maxMove \times m \times n)$
- 空间复杂度：$O(m \times n)$

算法思路：

- `dp[i][j]` 表示当前步数下走到位置 `(i,j)` 的路径数
- 每一步向四个方向扩展，走出边界则累加到结果，否则转移到新位置
