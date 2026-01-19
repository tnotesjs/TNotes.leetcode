# [1595. 连通两组点的最小成本【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1595.%20%E8%BF%9E%E9%80%9A%E4%B8%A4%E7%BB%84%E7%82%B9%E7%9A%84%E6%9C%80%E5%B0%8F%E6%88%90%E6%9C%AC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-cost-to-connect-two-groups-of-points/)

给你两组点，其中第一组中有 `size1` 个点，第二组中有 `size2` 个点，且 `size1 >= size2`。

任意两点间的连接成本 `cost` 由大小为 `size1 x size2` 矩阵给出，其中 `cost[i][j]` 是第一组中的点 `i` 和第二组中的点 `j` 的连接成本。如果两个组中的每个点都与另一组中的一个或多个点连接，则称这两组点是连通的。换言之，第一组中的每个点必须至少与第二组中的一个点连接，且第二组中的每个点必须至少与第一组中的一个点连接。

返回连通两组点所需的最小成本。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-13-52.png)

```txt
输入：cost = [[15, 96], [36, 2]]
输出：17

解释：
连通两组点的最佳方法是：
1--A
2--B
总成本为 17。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-14-02.png)

```txt
输入：cost = [[1, 3, 5], [4, 1, 1], [1, 5, 3]]
输出：4

解释：
连通两组点的最佳方法是：
1--A
2--B
2--C
3--A
最小成本为 4。
请注意，虽然有多个点连接到第一组中的点 2 和第二组中的点 A，但由于题目并不限制连接点的数目，所以只需要关心最低总成本。
```

示例 3：

```txt
输入：cost = [[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]
输出：10
```

---

提示：

- `size1 == cost.length`
- `size2 == cost[i].length`
- `1 <= size1, size2 <= 12`
- `size1 >= size2`
- `0 <= cost[i][j] <= 100`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
