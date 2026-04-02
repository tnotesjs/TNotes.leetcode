# [2368. 受限条件下可到达节点的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2368.%20%E5%8F%97%E9%99%90%E6%9D%A1%E4%BB%B6%E4%B8%8B%E5%8F%AF%E5%88%B0%E8%BE%BE%E8%8A%82%E7%82%B9%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - DFS](#2--s1---dfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reachable-nodes-with-restrictions/)

现有一棵由 `n` 个节点组成的无向树，节点编号从 `0` 到 `n - 1`，共有 `n - 1` 条边。

给你一个二维整数数组 `edges`，长度为 `n - 1`，其中 `edges[i] = [ai, bi]` 表示树中节点 `ai` 和 `bi` 之间存在一条边。另给你一个整数数组 `restricted` 表示 受限 节点。

在不访问受限节点的前提下，返回你可以从节点 `0` 到达的 最多 节点数目*。*

注意，节点 `0` 不 会标记为受限节点。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-47-22.png)

```txt
输入：n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]
输出：4
解释：上图所示正是这棵树。
在不访问受限节点的前提下，只有节点 [0,1,2,3] 可以从节点 0 到达。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-47-28.png)

```txt
输入：n = 7, edges = [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], restricted = [4,2,1]
输出：3
解释：上图所示正是这棵树。
在不访问受限节点的前提下，只有节点 [0,5,6] 可以从节点 0 到达。
```

---

提示：

- `2 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `ai != bi`
- `edges` 表示一棵有效的树
- `1 <= restricted.length < n`
- `1 <= restricted[i] < n`
- `restricted` 中的所有值 互不相同

## 2. 🎯 s.1 - DFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + e)$，其中 n 是节点数，e 是边数
- 空间复杂度：$O(n + e)$，邻接表和访问数组

算法思路：

- 将受限节点加入集合
- 建无向图，从节点 0 出发 DFS/BFS
- 遇到受限节点不访问，统计可达节点数
