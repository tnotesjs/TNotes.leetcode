# [2203. 得到要求路径的最小带权子图【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2203.%20%E5%BE%97%E5%88%B0%E8%A6%81%E6%B1%82%E8%B7%AF%E5%BE%84%E7%9A%84%E6%9C%80%E5%B0%8F%E5%B8%A6%E6%9D%83%E5%AD%90%E5%9B%BE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-weighted-subgraph-with-the-required-paths/)

给你一个整数 `n` ，它表示一个 带权有向 图的节点数，节点编号为 `0` 到 `n - 1`。

同时给你一个二维整数数组 `edges` ，其中 `edges[i] = [fromi, toi, weighti]` ，表示从 `fromi` 到 `toi` 有一条边权为 `weighti` 的 有向 边。

最后，给你三个 互不相同 的整数 `src1` ，`src2` 和 `dest` ，表示图中三个不同的点。

请你从图中选出一个 边权和最小 的子图，使得从 `src1` 和 `src2` 出发，在这个子图中，都 可以 到达 `dest`。如果这样的子图不存在，请返回 `-1`。

子图 中的点和边都应该属于原图的一部分。子图的边权和定义为它所包含的所有边的权值之和。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-10-26-13.png)

```txt
输入：n = 6, edges = [[0,2,2],[0,5,6],[1,0,3],[1,4,5],[2,1,1],[2,3,3],[2,3,4],[3,4,2],[4,5,1]], src1 = 0, src2 = 1, dest = 5
输出：9
解释：
上图为输入的图。
蓝色边为最优子图之一。
注意，子图 [[1,0,3],[0,5,6]] 也能得到最优解，但无法在满足所有限制的前提下，得到更优解。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-10-26-19.png)

```txt
输入：n = 3, edges = [[0,1,1],[2,1,1]], src1 = 0, src2 = 1, dest = 2
输出：-1
解释：
上图为输入的图。
可以看到，不存在从节点 1 到节点 2 的路径，所以不存在任何子图满足所有限制。
```

---

提示：

- `3 <= n <= 10^5`
- `0 <= edges.length <= 10^5`
- `edges[i].length == 3`
- `0 <= fromi, toi, src1, src2, dest <= n - 1`
- `fromi != toi`
- `src1` ，`src2` 和 `dest` 两两不同。
- `1 <= weight[i] <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
