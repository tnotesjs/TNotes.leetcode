# [1782. 统计点对的数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1782.%20%E7%BB%9F%E8%AE%A1%E7%82%B9%E5%AF%B9%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-pairs-of-nodes/)

给你一个无向图，无向图由整数  `n`  ，表示图中节点的数目，和  `edges`  组成，其中  `edges[i] = [ui, vi]`  表示  `ui` 和  `vi`  之间有一条无向边。同时给你一个代表查询的整数数组  `queries` 。

第 `j` 个查询的答案是满足如下条件的点对 `(a, b)` 的数目：

- `a < b`
- `cnt`  是与 `a` **或者** `b`  相连的边的数目，且 `cnt` **严格大于** `queries[j]` 。

请你返回一个数组  `answers` ，其中  `answers.length == queries.length` 且  `answers[j]`  是第 `j`  个查询的答案。

请注意，图中可能会有 **多重边** 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-18-19.png)

```txt
输入：n = 4, edges = [[1,2],[2,4],[1,3],[2,3],[2,1]], queries = [2,3]
输出：[6,5]
解释：每个点对中，与至少一个点相连的边的数目如上图所示。
answers[0] = 6。所有的点对(a, b)中边数和都大于2，故有6个；
answers[1] = 5。所有的点对(a, b)中除了(3,4)边数等于3，其它点对边数和都大于3，故有5个。
```

- **示例 2：**

```txt
输入：n = 5, edges = [[1,5],[1,5],[3,4],[2,5],[1,3],[5,1],[2,3],[2,5]], queries = [1,2,3,4,5]
输出：[10,10,9,8,6]
```

---

**提示：**

- `2 <= n <= 2 * 10^4`
- `1 <= edges.length <= 10^5`
- `1 <= ui, vi <= n`
- `ui != vi`
- `1 <= queries.length <= 20`
- `0 <= queries[j] < edges.length`

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
