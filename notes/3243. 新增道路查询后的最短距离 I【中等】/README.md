# [3243. 新增道路查询后的最短距离 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3243.%20%E6%96%B0%E5%A2%9E%E9%81%93%E8%B7%AF%E6%9F%A5%E8%AF%A2%E5%90%8E%E7%9A%84%E6%9C%80%E7%9F%AD%E8%B7%9D%E7%A6%BB%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-distance-after-road-addition-queries-i/)

给你一个整数 `n` 和一个二维整数数组 `queries`。

有 `n` 个城市，编号从 `0` 到 `n - 1`。初始时，每个城市 `i` 都有一条单向道路通往城市 `i + 1`（ `0 <= i < n - 1`）。

`queries[i] = [ui, vi]` 表示新建一条从城市 `ui` 到城市 `vi` 的单向道路。每次查询后，你需要找到从城市 `0` 到城市 `n - 1` 的最短路径的长度。

返回一个数组 `answer`，对于范围 `[0, queries.length - 1]` 中的每个 `i`，`answer[i]` 是处理完前 `i + 1` 个查询后，从城市 `0` 到城市 `n - 1` 的最短路径的*长度*。

---

示例 1：

输入：n = 5, queries = [[2, 4], [0, 2], [0, 4]]

输出：[3, 2, 1]

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-34-15.png)

新增一条从 2 到 4 的道路后，从 0 到 4 的最短路径长度为 3。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-34-20.png)

新增一条从 0 到 2 的道路后，从 0 到 4 的最短路径长度为 2。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-34-26.png)

新增一条从 0 到 4 的道路后，从 0 到 4 的最短路径长度为 1。

---

示例 2：

输入：n = 4, queries = [[0, 3], [0, 2]]

输出：[1, 1]

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-34-31.png)

新增一条从 0 到 3 的道路后，从 0 到 3 的最短路径长度为 1。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-34-37.png)

新增一条从 0 到 2 的道路后，从 0 到 3 的最短路径长度仍为 1。

---

提示：

- `3 <= n <= 500`
- `1 <= queries.length <= 500`
- `queries[i].length == 2`
- `0 <= queries[i][0] < queries[i][1] < n`
- `1 < queries[i][1] - queries[i][0]`
- 查询中没有重复的道路。

## 2. 🎯 s.1 - BFS

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(q \times (n + m))$，每次查询做一次 BFS
- 空间复杂度：$O(n + m)$，图和队列

算法思路：

- 维护图结构，每次查询添加新边后做 BFS 求最短路
- 初始有 n-1 条链式边

