# [2492. 两个城市间路径的最小分数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2492.%20%E4%B8%A4%E4%B8%AA%E5%9F%8E%E5%B8%82%E9%97%B4%E8%B7%AF%E5%BE%84%E7%9A%84%E6%9C%80%E5%B0%8F%E5%88%86%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS](#2--s1---bfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-score-of-a-path-between-two-cities/)

给你一个正整数 `n`，表示总共有 `n` 个城市，城市从 `1` 到 `n` 编号。给你一个二维数组 `roads`，其中 `roads[i] = [ai, bi, distancei]` 表示城市 `ai` 和 `bi` 之间有一条 双向 道路，道路距离为 `distancei`。城市构成的图不一定是连通的。

两个城市之间一条路径的 分数 定义为这条路径中道路的 最小 距离。

城市 `1` 和城市 `n` 之间的所有路径的 最小 分数。

注意：

- 一条路径指的是两个城市之间的道路序列。
- 一条路径可以 多次 包含同一条道路，你也可以沿着路径多次到达城市 `1` 和城市 `n`。
- 测试数据保证城市 `1` 和城市`n` 之间 至少 有一条路径。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-23-37.png)

```txt
输入：n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
输出：5
解释：城市 1 到城市 4 的路径中，分数最小的一条为：1 -> 2 -> 4。这条路径的分数是 min(9,5) = 5。
不存在分数更小的路径。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-23-42.png)

```txt
输入：n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
输出：2
解释：城市 1 到城市 4 分数最小的路径是：1 -> 2 -> 1 -> 3 -> 4。这条路径的分数是 min(2,2,4,7) = 2。
```

---

提示：

- `2 <= n <= 10^5`
- `1 <= roads.length <= 10^5`
- `roads[i].length == 3`
- `1 <= ai, bi <= n`
- `ai != bi`
- `1 <= distancei <= 10^4`
- 不会有重复的边。
- 城市 `1` 和城市 `n` 之间至少有一条路径。

## 2. 🎯 s.1 - BFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + m)$，其中 n 是节点数，m 是边数
- 空间复杂度：$O(n + m)$

算法思路：

- BFS 遍历从节点 1 可达的所有节点
- 记录遍历过程中经过的最小边权值即为答案
