# [1584. 连接所有点的最小费用【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1584.%20%E8%BF%9E%E6%8E%A5%E6%89%80%E6%9C%89%E7%82%B9%E7%9A%84%E6%9C%80%E5%B0%8F%E8%B4%B9%E7%94%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/min-cost-to-connect-all-points/)

给你一个`points` 数组，表示 2D 平面上的一些点，其中 `points[i] = [xi, yi]`。

连接点 `[xi, yi]` 和点 `[xj, yj]` 的费用为它们之间的 曼哈顿距离 ：`|xi - xj| + |yi - yj|`，其中 `|val|` 表示 `val` 的绝对值。

请你返回将所有点连接的最小总费用。只有任意两点之间 有且仅有 一条简单路径时，才认为所有点都已连接。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-08-09.png)

```txt
输入：points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
输出：20
```

- 解释：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-08-29.png)
  - 我们可以按照上图所示连接所有点得到最小总费用，总费用为 20。
  - 注意到任意两个点之间只有唯一一条路径互相到达。

---

示例 2：

```txt
输入：points = [[3,12],[-2,5],[-4,1]]
输出：18
```

示例 3：

```txt
输入：points = [[0,0],[1,1],[1,0],[-1,1]]
输出：4
```

示例 4：

```txt
输入：points = [[-1000000,-1000000],[1000000,1000000]]
输出：4000000
```

示例 5：

```txt
输入：points = [[0,0]]
输出：0
```

---

提示：

- `1 <= points.length <= 1000`
- `-10^6 <= xi, yi <= 10^6`
- 所有点 `(xi, yi)` 两两不同。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
