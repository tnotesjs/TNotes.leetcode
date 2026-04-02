# [2642. 设计可以求最短路径的图类【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2642.%20%E8%AE%BE%E8%AE%A1%E5%8F%AF%E4%BB%A5%E6%B1%82%E6%9C%80%E7%9F%AD%E8%B7%AF%E5%BE%84%E7%9A%84%E5%9B%BE%E7%B1%BB%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - Dijkstra 最短路](#2--s1---dijkstra-最短路)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/design-graph-with-shortest-path-calculator/)

给你一个有 `n` 个节点的 有向带权 图，节点编号为 `0` 到 `n - 1`。图中的初始边用数组 `edges` 表示，其中 `edges[i] = [fromi, toi, edgeCosti]` 表示从 `fromi` 到 `toi` 有一条代价为 `edgeCosti` 的边。

请你实现一个 `Graph` 类：

- `Graph(int n, int[][] edges)` 初始化图有 `n` 个节点，并输入初始边。
- `addEdge(int[] edge)` 向边集中添加一条边，其中 `edge = [from, to, edgeCost]`。数据保证添加这条边之前对应的两个节点之间没有有向边。
- `int shortestPath(int node1, int node2)` 返回从节点 `node1` 到 `node2` 的路径 最小 代价。如果路径不存在，返回 `-1`。一条路径的代价是路径中所有边代价之和。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-22-41-06.png)

```txt
输入：
["Graph", "shortestPath", "shortestPath", "addEdge", "shortestPath"]
[[4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]], [3, 2], [0, 3], [[1, 3, 4]], [0, 3]]
输出：
[null, 6, -1, null, 6]

解释：
Graph g = new Graph(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]);
g.shortestPath(3, 2); // 返回 6。从 3 到 2 的最短路径如第一幅图所示：3 -> 0 -> 1 -> 2，总代价为 3 + 2 + 1 = 6。
g.shortestPath(0, 3); // 返回 -1。没有从 0 到 3 的路径。
g.addEdge([1, 3, 4]); // 添加一条节点 1 到节点 3 的边，得到第二幅图。
g.shortestPath(0, 3); // 返回 6。从 0 到 3 的最短路径为 0 -> 1 -> 3，总代价为 2 + 4 = 6。
```

---

提示：

- `1 <= n <= 100`
- `0 <= edges.length <= n * (n - 1)`
- `edges[i].length == edge.length == 3`
- `0 <= fromi, toi, from, to, node1, node2 <= n - 1`
- `1 <= edgeCosti, edgeCost <= 10^6`
- 图中任何时候都不会有重边和自环。
- 调用 `addEdge` 至多 `100` 次。
- 调用 `shortestPath` 至多 `100` 次。

## 2. 🎯 s.1 - Dijkstra 最短路

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：`shortestPath` $O(n^2)$，`addEdge` $O(1)$，其中 n 是节点数
- 空间复杂度：$O(n^2)$，邻接矩阵/邻接表的存储空间

算法思路：

- 使用邻接表（JS/PY）或邻接矩阵（C）存储图
- `addEdge` 直接向邻接结构中添加边
- `shortestPath` 使用朴素 Dijkstra 算法（n ≤ 100，无需优先队列），每次选取未访问的最小距离节点进行松弛
