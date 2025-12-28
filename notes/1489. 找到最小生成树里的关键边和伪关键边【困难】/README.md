# [1489. 找到最小生成树里的关键边和伪关键边【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1489.%20%E6%89%BE%E5%88%B0%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91%E9%87%8C%E7%9A%84%E5%85%B3%E9%94%AE%E8%BE%B9%E5%92%8C%E4%BC%AA%E5%85%B3%E9%94%AE%E8%BE%B9%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)

给你一个 `n` 个点的带权无向连通图，节点编号为 `0` 到 `n-1` ，同时还有一个数组 `edges` ，其中 ` edges[i] = [from``i, toi, weighti] ` 表示在 `fromi` 和 `toi` 节点之间有一条带权无向边。最小生成树 (MST) 是给定图中边的一个子集，它连接了所有节点且没有环，而且这些边的权值和最小。

请你找到给定图中最小生成树的所有关键边和伪关键边。如果从图中删去某条边，会导致最小生成树的权值和增加，那么我们就说它是一条关键边。伪关键边则是可能会出现在某些最小生成树中但不会出现在所有最小生成树中的边。

请注意，你可以分别以任意顺序返回关键边的下标和伪关键边的下标。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-21-07.png)

```txt
输入：n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
输出：[[0,1],[2,3,4,5]]
```

- 解释：
  - 上图描述了给定图。
  - 下图是所有的最小生成树。
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-21-14.png)
  - 注意到第 0 条边和第 1 条边出现在了所有最小生成树中，所以它们是关键边，我们将这两个下标作为输出的第一个列表。
  - 边 2，3，4 和 5 是所有 MST 的剩余边，所以它们是伪关键边。我们将它们作为输出的第二个列表。

---

示例 2 ：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-21-41.png)

```txt
输入：n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
输出：[[],[0,1,2,3]]
解释：可以观察到 4 条边都有相同的权值，任选它们中的 3 条可以形成一棵 MST。所以 4 条边都是伪关键边。
```

---

提示：

- `2 <= n <= 100`
- `1 <= edges.length <= min(200, n * (n - 1) / 2)`
- `edges[i].length == 3`
- `0 <= fromi < toi < n`
- `1 <= weighti <= 1000`
- 所有 `(fromi, toi)` 数对都是互不相同的。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
