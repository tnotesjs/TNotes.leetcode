# [3547. 图中边值的最大和【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3547.%20%E5%9B%BE%E4%B8%AD%E8%BE%B9%E5%80%BC%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8C%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-sum-of-edge-values-in-a-graph/)

给你一个包含 `n` 个节点的 无向连通图，节点按从 `0` 到 `n - 1` 编号。每个节点 最多 与其他两个节点相连。

图中包含 `m` 条边，使用一个二维数组 `edges` 表示，其中 `edges[i] = [ai, bi]` 表示节点 `ai` 和节点 `bi` 之间有一条边。

你需要为每个节点分配一个从 `1` 到 `n` 的 唯一 值。边的值定义为其两端节点值的 乘积。

你的得分是图中所有边值的总和。

返回你可以获得的 最大 得分。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-23-11-30.png)

输入： n = 4, edges = [[0,1],[1,2],[2,3]]

输出： 23

解释：

上图展示了一个最优的节点值分配方式。边值的总和为：`(1 * 3) + (3 * 4) + (4 * 2) = 23`。

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-23-11-42.png)

输入： n = 6, edges = [[0,3],[4,5],[2,0],[1,3],[2,4],[1,5]]

输出： 82

解释：

上图展示了一个最优的节点值分配方式。边值的总和为：`(1 * 2) + (2 * 4) + (4 * 6) + (6 * 5) + (5 * 3) + (3 * 1) = 82`。

---

提示：

- `1 <= n <= 5 * 10^4`
- `m == edges.length`
- `1 <= m <= n`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `ai != bi`
- 图中不存在重复边。
- 图是连通的。
- 每个节点最多与其他两个节点相连。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
