# [2316. 统计无向图中无法互相到达点对数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2316.%20%E7%BB%9F%E8%AE%A1%E6%97%A0%E5%90%91%E5%9B%BE%E4%B8%AD%E6%97%A0%E6%B3%95%E4%BA%92%E7%9B%B8%E5%88%B0%E8%BE%BE%E7%82%B9%E5%AF%B9%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/)

给你一个整数 `n`，表示一张 无向图 中有 `n` 个节点，编号为 `0` 到 `n - 1`。同时给你一个二维整数数组 `edges`，其中 `edges[i] = [ai, bi]` 表示节点 `ai` 和 `bi` 之间有一条 无向 边。

请你返回 无法互相到达 的不同 点对数目。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-27-01.png)

```txt
输入：n = 3, edges = [[0,1],[0,2],[1,2]]
输出：0
解释：所有点都能互相到达，意味着没有点对无法互相到达，所以我们返回 0。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-27-08.png)

```txt
输入：n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
输出：14
解释：总共有 14 个点对互相无法到达：
[[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]]
所以我们返回 14。
```

---

提示：

- `1 <= n <= 10^5`
- `0 <= edges.length <= 2 * 10^5`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `ai != bi`
- 不会有重复边。

## 2. 🎯 s.1 - 并查集

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + m \times \alpha(n))$，其中 n 是节点数，m 是边数，$\alpha$ 为反阿克曼函数
- 空间复杂度：$O(n)$，存储并查集的 parent 和 size 数组

算法思路：

- 用并查集维护连通分量，合并所有边连接的节点
- 遍历所有根节点，统计每个连通分量的大小
- 用乘法原理计算不同连通分量间的点对数：累加 visited × size[i]
