# [1786. 从第一个节点出发到最后一个节点的受限路径数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1786.%20%E4%BB%8E%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%8A%82%E7%82%B9%E5%87%BA%E5%8F%91%E5%88%B0%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E8%8A%82%E7%82%B9%E7%9A%84%E5%8F%97%E9%99%90%E8%B7%AF%E5%BE%84%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - Dijkstra + DP](#2--s1---dijkstra--dp)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-restricted-paths-from-first-to-last-node/)

现有一个加权无向连通图。给你一个正整数 `n`，表示图中有 `n` 个节点，并按从 `1` 到 `n` 给节点编号；另给你一个数组 `edges`，其中每个 `edges[i] = [ui, vi, weighti]` 表示存在一条位于节点 `ui` 和 `vi` 之间的边，这条边的权重为 `weighti`。

从节点 `start` 出发到节点 `end` 的路径是一个形如 `[z0, z1, z2, ..., zk]` 的节点序列，满足 `z0 = start` 、`zk = end` 且在所有符合 `0 <= i <= k-1` 的节点 `zi` 和 `zi+1` 之间存在一条边。

路径的距离定义为这条路径上所有边的权重总和。用 `distanceToLastNode(x)` 表示节点 `n` 和 `x` 之间路径的最短距离。受限路径 为满足 `distanceToLastNode(zi) > distanceToLastNode(zi+1)` 的一条路径，其中 `0 <= i <= k-1`。

返回从节点 `1` 出发到节点 `n` 的 受限路径数。由于数字可能很大，请返回对 `10^9 + 7` 取余 的结果。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-19-10.png)

```txt
输入：n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]
输出：3
解释：每个圆包含黑色的节点编号和蓝色的 distanceToLastNode 值。三条受限路径分别是：
1) 1 --> 2 --> 5
2) 1 --> 2 --> 3 --> 5
3) 1 --> 3 --> 5
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-19-18.png)

```txt
输入：n = 7, edges = [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]
输出：1
解释：每个圆包含黑色的节点编号和蓝色的 distanceToLastNode 值。唯一一条受限路径是：1 --> 3 --> 7。
```

---

提示：

- `1 <= n <= 2 * 10^4`
- `n - 1 <= edges.length <= 4 * 10^4`
- `edges[i].length == 3`
- `1 <= ui, vi <= n`
- `ui != vi`
- `1 <= weighti <= 10^5`
- 任意两个节点之间至多存在一条边
- 任意两个节点之间至少存在一条路径

## 2. 🎯 s.1 - Dijkstra + DP

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(E \log V)$，其中 E 是边数，V 是节点数
- 空间复杂度：$O(V + E)$，邻接表和距离数组

算法思路：

- 先用 Dijkstra 求出每个节点到终点的最短距离
- 然后 DP：从距离较大的节点向距离较小的节点转移
- 只能沿着距离递减的方向移动，保证是“受限路径”
