# [3203. 合并两棵树后的最小直径【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3203.%20%E5%90%88%E5%B9%B6%E4%B8%A4%E6%A3%B5%E6%A0%91%E5%90%8E%E7%9A%84%E6%9C%80%E5%B0%8F%E7%9B%B4%E5%BE%84%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-minimum-diameter-after-merging-two-trees/)

给你两棵 **无向** 树，分别有 `n` 和 `m` 个节点，节点编号分别为 `0` 到 `n - 1` 和 `0` 到 `m - 1` 。给你两个二维整数数组 `edges1` 和 `edges2` ，长度分别为 `n - 1` 和 `m - 1` ，其中 `edges1[i] = [ai, bi]` 表示在第一棵树中节点 `ai` 和 `bi` 之间有一条边，`edges2[i] = [ui, vi]` 表示在第二棵树中节点 `ui` 和 `vi` 之间有一条边。

你必须在第一棵树和第二棵树中分别选一个节点，并用一条边连接它们。

请你返回添加边后得到的树中，**最小直径** 为多少。

一棵树的 **直径** 指的是树中任意两个节点之间的最长路径长度。

---

**示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-16-55.png)

**输入：** edges1 = [[0,1],[0,2],[0,3]], edges2 = [[0,1]]

**输出：** 3

**解释：**

将第一棵树中的节点 0 与第二棵树中的任意节点连接，得到一棵直径为 3 的树。

---

**示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-17-07.png)

**输入：** edges1 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]], edges2 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]]

**输出：** 5

**解释：**

将第一棵树中的节点 0 和第二棵树中的节点 0 连接，可以得到一棵直径为 5 的树。

---

**提示：**

- `1 <= n, m <= 10^5`
- `edges1.length == n - 1`
- `edges2.length == m - 1`
- `edges1[i].length == edges2[i].length == 2`
- `edges1[i] = [ai, bi]`
- `0 <= ai, bi < n`
- `edges2[i] = [ui, vi]`
- `0 <= ui, vi < m`
- 输入保证 `edges1` 和 `edges2` 分别表示一棵合法的树。

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
