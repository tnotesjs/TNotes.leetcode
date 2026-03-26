# [2608. 图中的最短环【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2608.%20%E5%9B%BE%E4%B8%AD%E7%9A%84%E6%9C%80%E7%9F%AD%E7%8E%AF%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-cycle-in-a-graph/)

现有一个含 `n` 个顶点的 双向 图，每个顶点按从 `0` 到 `n - 1` 标记。图中的边由二维整数数组 `edges` 表示，其中 `edges[i] = [ui, vi]` 表示顶点 `ui` 和 `vi` 之间存在一条边。每对顶点最多通过一条边连接，并且不存在与自身相连的顶点。

返回图中 最短 环的长度。如果不存在环，则返回 `-1`。

环 是指以同一节点开始和结束，并且路径中的每条边仅使用一次。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-21-11-46.png)

```txt
输入：n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]
输出：3
解释：长度最小的循环是：0 -> 1 -> 2 -> 0
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-21-11-51.png)

```txt
输入：n = 4, edges = [[0,1],[0,2]]
输出：-1
解释：图中不存在循环
```

---

提示：

- `2 <= n <= 1000`
- `1 <= edges.length <= 1000`
- `edges[i].length == 2`
- `0 <= ui, vi < n`
- `ui != vi`
- 不存在重复的边

## 2. 🎯 s.1 - BFS 枚举

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \cdot (N + E))$，其中 N 是节点数，E 是边数
- 空间复杂度：$O(N + E)$，邻接表和 BFS 队列的空间

算法思路：

- 以每个节点为起点做 BFS，当发现一个已访问的邻居 v 且 dist[v] >= dist[u] 时，说明找到了一个环
- 环长 = dist[u] + dist[v] + 1，取所有环的最小值
