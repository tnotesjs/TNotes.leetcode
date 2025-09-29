# [3553. 包含给定路径的最小带权子树 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3553.%20%E5%8C%85%E5%90%AB%E7%BB%99%E5%AE%9A%E8%B7%AF%E5%BE%84%E7%9A%84%E6%9C%80%E5%B0%8F%E5%B8%A6%E6%9D%83%E5%AD%90%E6%A0%91%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-weighted-subgraph-with-the-required-paths-ii/)

给你一个 **无向带权** 树，共有 `n` 个节点，编号从 `0` 到 `n - 1`。这棵树由一个二维整数数组 `edges` 表示，长度为 `n - 1`，其中 `edges[i] = [ui, vi, wi]` 表示存在一条连接节点 `ui` 和 `vi` 的边，权重为 `wi`。

此外，给你一个二维整数数组 `queries`，其中 `queries[j] = [src1j, src2j, destj]`。

返回一个长度等于 `queries.length` 的数组 `answer`，其中 `answer[j]` 表示一个子树的 **最小总权重** ，使用该子树的边可以从 `src1j` 和 `src2j` 到达 `destj` 。

这里的 **子树** 是指原树中任意节点和边组成的连通子集形成的一棵有效树。

---

- **示例 1：**

**输入：** edges = [[0,1,2],[1,2,3],[1,3,5],[1,4,4],[2,5,6]], queries = [[2,3,4],[0,2,5]]

**输出：** [12,11]

**解释：**

蓝色边表示可以得到最优答案的子树之一。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-23-16-04.png)

- `answer[0]`：在选出的子树中，从 `src1 = 2` 和 `src2 = 3` 到 `dest = 4` 的路径总权重为 `3 + 5 + 4 = 12`。
- `answer[1]`：在选出的子树中，从 `src1 = 0` 和 `src2 = 2` 到 `dest = 5` 的路径总权重为 `2 + 3 + 6 = 11`。

---

- **示例 2：**

**输入：** edges = [[1,0,8],[0,2,7]], queries = [[0,1,2]]

**输出：** [15]

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-23-16-16.png)

- `answer[0]`：选出的子树中，从 `src1 = 0` 和 `src2 = 1` 到 `dest = 2` 的路径总权重为 `8 + 7 = 15`。

---

**提示：**

- `3 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 3`
- `0 <= ui, vi < n`
- `1 <= wi <= 10^4`
- `1 <= queries.length <= 10^5`
- `queries[j].length == 3`
- `0 <= src1j, src2j, destj < n`
- `src1j`、`src2j` 和 `destj` 互不不同。
- 输入数据保证 `edges` 表示的是一棵有效的树。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
