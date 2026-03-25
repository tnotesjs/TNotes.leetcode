# [1828. 统计一个圆中点的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1828.%20%E7%BB%9F%E8%AE%A1%E4%B8%80%E4%B8%AA%E5%9C%86%E4%B8%AD%E7%82%B9%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/queries-on-number-of-points-inside-a-circle/)

给你一个数组 `points`，其中 `points[i] = [xi, yi]`，表示第 `i` 个点在二维平面上的坐标。多个点可能会有 相同 的坐标。

同时给你一个数组 `queries`，其中 `queries[j] = [xj, yj, rj]`，表示一个圆心在 `(xj, yj)` 且半径为 `rj` 的圆。

对于每一个查询 `queries[j]`，计算在第 `j` 个圆 内 点的数目。如果一个点在圆的 边界上，我们同样认为它在圆 内。

请你返回一个数组 `answer`，其中 `answer[j]`是第 `j` 个查询的答案。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-30-44.png)

```txt
输入：points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
输出：[3,2,2]
解释：所有的点和圆如上图所示。
queries[0] 是绿色的圆，queries[1] 是红色的圆，queries[2] 是蓝色的圆。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-30-49.png)

```txt
输入：points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]
输出：[2,3,2,4]
解释：所有的点和圆如上图所示。
queries[0] 是绿色的圆，queries[1] 是红色的圆，queries[2] 是蓝色的圆，queries[3] 是紫色的圆。
```

---

提示：

- `1 <= points.length <= 500`
- `points[i].length == 2`
- `0 <= x​​​​​​i, y​​​​​​i <= 500`
- `1 <= queries.length <= 500`
- `queries[j].length == 3`
- `0 <= xj, yj <= 500`
- `1 <= rj <= 500`
- 所有的坐标都是整数。

## 2. 🎯 s.1 - 暴力枚举

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(q \times n)$，其中 q 是查询数，n 是点的数量
- 空间复杂度：$O(1)$，不计输出数组的额外空间

算法思路：

- 对每个查询圆，遍历所有点判断是否在圆内
- 点 $(px, py)$ 在圆心 $(cx, cy)$ 半径 $r$ 的圆内的条件：$(px-cx)^2 + (py-cy)^2 \leq r^2$
