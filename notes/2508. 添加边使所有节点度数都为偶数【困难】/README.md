# [2508. 添加边使所有节点度数都为偶数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2508.%20%E6%B7%BB%E5%8A%A0%E8%BE%B9%E4%BD%BF%E6%89%80%E6%9C%89%E8%8A%82%E7%82%B9%E5%BA%A6%E6%95%B0%E9%83%BD%E4%B8%BA%E5%81%B6%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 奇数度节点分类讨论](#2--s1---奇数度节点分类讨论)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/add-edges-to-make-degrees-of-all-nodes-even/)

给你一个有 `n` 个节点的 无向 图，节点编号为 `1` 到 `n`。再给你整数 `n` 和一个二维整数数组 `edges`，其中 `edges[i] = [ai, bi]` 表示节点 `ai` 和 `bi` 之间有一条边。图不一定连通。

你可以给图中添加 至多 两条额外的边（也可以一条边都不添加），使得图中没有重边也没有自环。

如果添加额外的边后，可以使得图中所有点的度数都是偶数，返回 `true`，否则返回 `false`。

点的度数是连接一个点的边的数目。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-36-59.png)

```txt
输入：n = 5, edges = [[1,2],[2,3],[3,4],[4,2],[1,4],[2,5]]
输出：true
解释：上图展示了添加一条边的合法方案。
最终图中每个节点都连接偶数条边。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-37-14.png)

```txt
输入：n = 4, edges = [[1,2],[3,4]]
输出：true
解释：上图展示了添加两条边的合法方案。
```

---

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-37-20.png)

```txt
输入：n = 4, edges = [[1,2],[1,3],[1,4]]
输出：false
解释：无法添加至多 2 条边得到一个符合要求的图。
```

---

提示：

- `3 <= n <= 10^5`
- `2 <= edges.length <= 10^5`
- `edges[i].length == 2`
- `1 <= ai, bi <= n`
- `ai != bi`
- 图中不会有重边

## 2. 🎯 s.1 - 奇数度节点分类讨论

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + m)$，其中 $n$ 是节点数，$m$ 是边数
- 空间复杂度：$O(n + m)$，存储邻接表

算法思路：

- 找出所有度数为奇数的节点，设为 `odd`
- 若奇数度节点数为 0：直接返回 `true`
- 若为 2：尝试在两个奇数度节点之间连边，或找一个中间节点分别与它们连边
- 若为 4：尝试三种配对方案，检查能否加两条不重复的边
- 其它情况：返回 `false`
