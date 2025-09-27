# [2360. 图中的最长环【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2360.%20%E5%9B%BE%E4%B8%AD%E7%9A%84%E6%9C%80%E9%95%BF%E7%8E%AF%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-cycle-in-a-graph/)

给你一个 `n`  个节点的 **有向图** ，节点编号为  `0`  到  `n - 1` ，其中每个节点  **至多**  有一条出边。

图用一个大小为 `n`  下标从  **0**  开始的数组  `edges`  表示，节点 `i`  到节点  `edges[i]`  之间有一条有向边。如果节点  `i`  没有出边，那么  `edges[i] == -1` 。

请你返回图中的 **最长**  环，如果没有任何环，请返回 `-1` 。

一个环指的是起点和终点是 **同一个**  节点的路径。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-45-16.png)

```txt
输入：edges = [3,3,4,2,3]
输出去：3
解释：图中的最长环是：2 -> 4 -> 3 -> 2 。
这个环的长度为 3 ，所以返回 3 。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-45-22.png)

```txt
输入：edges = [2,-1,3,1]
输出：-1
解释：图中没有任何环。
```

---

**提示：**

- `n == edges.length`
- `2 <= n <= 10^5`
- `-1 <= edges[i] < n`
- `edges[i] != i`

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
