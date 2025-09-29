# [3244. 新增道路查询后的最短距离 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3244.%20%E6%96%B0%E5%A2%9E%E9%81%93%E8%B7%AF%E6%9F%A5%E8%AF%A2%E5%90%8E%E7%9A%84%E6%9C%80%E7%9F%AD%E8%B7%9D%E7%A6%BB%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-distance-after-road-addition-queries-ii/)

给你一个整数 `n` 和一个二维整数数组 `queries`。

有 `n` 个城市，编号从 `0` 到 `n - 1`。初始时，每个城市 `i` 都有一条**单向**道路通往城市 `i + 1`（ `0 <= i < n - 1`）。

`queries[i] = [ui, vi]` 表示新建一条从城市 `ui` 到城市 `vi` 的**单向**道路。每次查询后，你需要找到从城市 `0` 到城市 `n - 1` 的**最短路径**的**长度**。

所有查询中不会存在两个查询都满足 `queries[i][0] < queries[j][0] < queries[i][1] < queries[j][1]`。

返回一个数组 `answer`，对于范围 `[0, queries.length - 1]` 中的每个 `i`，`answer[i]` 是处理完**前** `i + 1` 个查询后，从城市 `0` 到城市 `n - 1` 的最短路径的*长度*。

---

- **示例 1：**

**输入：** n = 5, queries = [[2, 4], [0, 2], [0, 4]]

**输出：** [3, 2, 1]

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-34-59.png)

新增一条从 2 到 4 的道路后，从 0 到 4 的最短路径长度为 3。

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-35-04.png)

新增一条从 0 到 2 的道路后，从 0 到 4 的最短路径长度为 2。

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-35-08.png)

新增一条从 0 到 4 的道路后，从 0 到 4 的最短路径长度为 1。

---

- **示例 2：**

**输入：** n = 4, queries = [[0, 3], [0, 2]]

**输出：** [1, 1]

**解释：**

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-35-14.png)

新增一条从 0 到 3 的道路后，从 0 到 3 的最短路径长度为 1。

![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-35-18.png)

新增一条从 0 到 2 的道路后，从 0 到 3 的最短路径长度仍为 1。

---

**提示:**

- `3 <= n <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i].length == 2`
- `0 <= queries[i][0] < queries[i][1] < n`
- `1 < queries[i][1] - queries[i][0]`
- 查询中不存在重复的道路。
- 不存在两个查询都满足 `i != j` 且 `queries[i][0] < queries[j][0] < queries[i][1] < queries[j][1]`。

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
