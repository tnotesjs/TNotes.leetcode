# [0797. 所有可能的路径【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0797.%20%E6%89%80%E6%9C%89%E5%8F%AF%E8%83%BD%E7%9A%84%E8%B7%AF%E5%BE%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/all-paths-from-source-to-target/)

给你一个有 `n` 个节点的 有向无环图（DAG），请你找出从节点 `0` 到节点 `n-1` 的所有路径并输出（不要求按特定顺序）

`graph[i]` 是一个从节点 `i` 可以访问的所有节点的列表（即从节点 `i` 到节点 `graph[i][j]`存在一条有向边）。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-52-11.png)

```txt
输入：graph = [[1,2],[3],[3],[]]
输出：[[0,1,3],[0,2,3]]
解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-52-16.png)

```txt
输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
```

---

提示：

- `n == graph.length`
- `2 <= n <= 15`
- `0 <= graph[i][j] < n`
- `graph[i][j] != i`（即不存在自环）
- `graph[i]` 中的所有元素 互不相同
- 保证输入为 有向无环图（DAG）

## 2. 🎯 s.1 - DFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(2^n \times n)$，路径数最多为 $2^{n-1}$，每条路径长度最多为 n
- 空间复杂度：$O(n)$，递归栈深度

算法思路：

- 由于是有向无环图，直接从节点 0 开始 DFS
- 到达节点 n-1 时记录当前路径，回溯探索所有可能的路径
