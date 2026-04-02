# [1129. 颜色交替的最短路径【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1129.%20%E9%A2%9C%E8%89%B2%E4%BA%A4%E6%9B%BF%E7%9A%84%E6%9C%80%E7%9F%AD%E8%B7%AF%E5%BE%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS](#2--s1---bfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-path-with-alternating-colors/)

给定一个整数 `n`，即有向图中的节点数，其中节点标记为 `0` 到 `n - 1`。图中的每条边为红色或者蓝色，并且可能存在自环或平行边。

给定两个数组 `redEdges` 和 `blueEdges`，其中：

- `redEdges[i] = [ai, bi]` 表示图中存在一条从节点 `ai` 到节点 `bi` 的红色有向边，
- `blueEdges[j] = [uj, vj]` 表示图中存在一条从节点 `uj` 到节点 `vj` 的蓝色有向边。

返回长度为 `n` 的数组 `answer`，其中 `answer[X]` 是从节点 `0` 到节点 `X` 的红色边和蓝色边交替出现的最短路径的长度。如果不存在这样的路径，那么 `answer[x] = -1`。

---

示例 1：

```txt
输入：n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
输出：[0,1,-1]
```

示例 2：

```txt
输入：n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
输出：[0,1,-1]
```

---

提示：

- `1 <= n <= 100`
- `0 <= redEdges.length, blueEdges.length <= 400`
- `redEdges[i].length == blueEdges[j].length == 2`
- `0 <= ai, bi, uj, vj < n`

## 2. 🎯 s.1 - BFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + E)$，其中 $E$ 是边的总数
- 空间复杂度：$O(n + E)$，邻接表和距离数组

算法思路：

- 将状态定义为 (node, lastColor)，从节点 0 开始 BFS
- 每次只能走与上一次不同颜色的边
- 每个节点的答案是两种颜色状态下距离的最小值
