# [3332. 旅客可以得到的最多点数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3332.%20%E6%97%85%E5%AE%A2%E5%8F%AF%E4%BB%A5%E5%BE%97%E5%88%B0%E7%9A%84%E6%9C%80%E5%A4%9A%E7%82%B9%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-points-tourist-can-earn/)

给你两个整数 `n` 和 `k`，和两个二维整数数组 `stayScore` 和 `travelScore`。

一位旅客正在一个有 `n` 座城市的国家旅游，每座城市都 直接 与其他所有城市相连。这位游客会旅游 恰好 `k` 天（下标从 0 开始），且旅客可以选择 任意 城市作为起点。

每一天，这位旅客都有两个选择：

- 留在当前城市：如果旅客在第 `i` 天停留在前一天所在的城市 `curr`，旅客会获得 `stayScore[i][curr]` 点数。
- 前往另外一座城市：如果旅客从城市 `curr` 前往城市 `dest`，旅客会获得 `travelScore[curr][dest]` 点数。

请你返回这位旅客可以获得的 最多 点数。

---

示例 1：

输入：n = 2, k = 1, stayScore = [[2,3]], travelScore = [[0,2],[1,0]]

输出：3

解释：

旅客从城市 1 出发并停留在城市 1 可以得到最多点数。

---

示例 2：

输入：n = 3, k = 2, stayScore = [[3,4,2],[2,1,2]], travelScore = [[0,2,1],[2,0,4],[3,2,0]]

输出：8

解释：

旅客从城市 1 出发，第 0 天停留在城市 1，第 1 天前往城市 2，可以得到最多点数。

---

提示：

- `1 <= n <= 200`
- `1 <= k <= 200`
- `n == travelScore.length == travelScore[i].length == stayScore[i].length`
- `k == stayScore.length`
- `1 <= stayScore[i][j] <= 100`
- `0 <= travelScore[i][j] <= 100`
- `travelScore[i][i] == 0`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
