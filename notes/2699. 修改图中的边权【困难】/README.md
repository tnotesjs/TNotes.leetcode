# [2699. 修改图中的边权【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2699.%20%E4%BF%AE%E6%94%B9%E5%9B%BE%E4%B8%AD%E7%9A%84%E8%BE%B9%E6%9D%83%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/modify-graph-edge-weights/)

给你一个 `n` 个节点的 无向带权连通 图，节点编号为 `0` 到 `n - 1`，再给你一个整数数组 `edges`，其中 `edges[i] = [ai, bi, wi]` 表示节点 `ai` 和 `bi` 之间有一条边权为 `wi` 的边。

部分边的边权为 `-1`（`wi = -1`），其他边的边权都为 正 数（`wi > 0`）。

你需要将所有边权为 `-1` 的边都修改为范围 `[1, 2 * 10^9]` 中的 正整数，使得从节点 `source` 到节点 `destination` 的 最短距离 为整数 `target`。如果有 多种 修改方案可以使 `source` 和 `destination` 之间的最短距离等于 `target`，你可以返回任意一种方案。

如果存在使 `source` 到 `destination` 最短距离为 `target` 的方案，请你按任意顺序返回包含所有边的数组（包括未修改边权的边）。如果不存在这样的方案，请你返回一个 空数组。

---

注意：你不能修改一开始边权为正数的边。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-23-20-43.png)

```txt
输入：n = 5, edges = [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], source = 0, destination = 1, target = 5
输出：[[4,1,1],[2,0,1],[0,3,3],[4,3,1]]
解释：上图展示了一个满足题意的修改方案，从 0 到 1 的最短距离为 5。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-23-20-57.png)

```txt
输入：n = 3, edges = [[0,1,-1],[0,2,5]], source = 0, destination = 2, target = 6
输出：[]
解释：上图是一开始的图。没有办法通过修改边权为 -1 的边，使得 0 到 2 的最短距离等于 6，所以返回一个空数组。
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-23-21-08.png)

```txt
输入：n = 4, edges = [[1,0,4],[1,2,3],[2,3,5],[0,3,-1]], source = 0, destination = 2, target = 6
输出：[[1,0,4],[1,2,3],[2,3,5],[0,3,1]]
解释：上图展示了一个满足题意的修改方案，从 0 到 2 的最短距离为 6。
```

---

提示：

- `1 <= n <= 100`
- `1 <= edges.length <= n * (n - 1) / 2`
- `edges[i].length == 3`
- `0 <= ai, bi < n`
- `wi = -1` 或者 `1 <= wi <= 10^7`
- `ai != bi`
- `0 <= source, destination < n`
- `source != destination`
- `1 <= target <= 10^9`
- 输入的图是连通图，且没有自环和重边。

## 2. 🎯 s.1 - 两遍 Dijkstra

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \times E)$，其中 N 是节点数，E 是边数
- 空间复杂度：$O(N + E)$，存储图和距离数组

算法思路：

- 第一遍 Dijkstra：从终点出发，仅用正权边，求各点到终点的最短距离 dDest[v]
- 若 dDest[source] < target，说明已有更短路径，无解
- 第二遍 Dijkstra：从起点出发，对每条可修改边设置权值为 max(1, target - dist[u] - dDest[v])
- 若最终 dist[destination] ≠ target，无解；否则将未使用的可修改边设为大值
