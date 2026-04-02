# [1514. 概率最大的路径【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1514.%20%E6%A6%82%E7%8E%87%E6%9C%80%E5%A4%A7%E7%9A%84%E8%B7%AF%E5%BE%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS 松弛](#2--s1---bfs-松弛)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/path-with-maximum-probability/)

给你一个由 `n` 个节点（下标从 0 开始）组成的无向加权图，该图由一个描述边的列表组成，其中 `edges[i] = [a, b]` 表示连接节点 a 和 b 的一条无向边，且该边遍历成功的概率为 `succProb[i]`。

指定两个节点分别作为起点 `start` 和终点 `end`，请你找出从起点到终点成功概率最大的路径，并返回其成功概率。

如果不存在从 `start` 到 `end` 的路径，请 返回 0。只要答案与标准答案的误差不超过 1e-5，就会被视作正确答案。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-03-43.png)

```txt
输入：n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
输出：0.25000
解释：从起点到终点有两条路径，其中一条的成功概率为 0.2，而另一条为 0.5 * 0.5 = 0.25
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-04-15.png)

```txt
输入：n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
输出：0.30000
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-04-26.png)

```txt
输入：n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
输出：0.00000
解释：节点 0 和 节点 2 之间不存在路径
```

---

提示：

- `2 <= n <= 10^4`
- `0 <= start, end < n`
- `start != end`
- `0 <= a, b < n`
- `a != b`
- `0 <= succProb.length == edges.length <= 2*10^4`
- `0 <= succProb[i] <= 1`
- 每两个节点之间最多有一条边

## 2. 🎯 s.1 - BFS 松弛

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(V + E)$，其中 $V$ 是节点数，$E$ 是边数
- 空间复杂度：$O(V + E)$，邻接表和概率数组

算法思路：

- 类似 Dijkstra 的思路，但目标是最大化路径概率（乘积）
- 使用 BFS 队列，维护每个节点到起点的最大概率 `prob[i]`
- 从起点出发，若经过当前节点能使邻居的概率更大，则松弛并入队
- 最终返回终点的最大概率
