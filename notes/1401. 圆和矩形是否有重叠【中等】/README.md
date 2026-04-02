# [1401. 圆和矩形是否有重叠【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1401.%20%E5%9C%86%E5%92%8C%E7%9F%A9%E5%BD%A2%E6%98%AF%E5%90%A6%E6%9C%89%E9%87%8D%E5%8F%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 最近点检测](#2--s1---最近点检测)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/circle-and-rectangle-overlapping/)

给你一个以 `(radius, xCenter, yCenter)` 表示的圆和一个与坐标轴平行的矩形 `(x1, y1, x2, y2)`，其中 `(x1, y1)` 是矩形左下角的坐标，而 `(x2, y2)` 是右上角的坐标。

如果圆和矩形有重叠的部分，请你返回 `true`，否则返回 `false`。

换句话说，请你检测是否 存在 点 `(xi, yi)`，它既在圆上也在矩形上（两者都包括点落在边界上的情况）。

示例 1 ：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-21-23-41-51.png)

```txt
输入：radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
输出：true
解释：圆和矩形存在公共点 (1,0)。
```

示例 2 ：

```txt
输入：radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
输出：false
```

示例 3 ：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-21-23-42-09.png)

```txt
输入：radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
输出：true
```

---

提示：

- `1 <= radius <= 2000`
- `-10^4 <= xCenter, yCenter <= 10^4`
- `-10^4 <= x1 < x2 <= 10^4`
- `-10^4 <= y1 < y2 <= 10^4`

## 2. 🎯 s.1 - 最近点检测

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

算法思路：

- 找矩形上离圆心最近的点：将圆心坐标分别 clamp 到矩形的 x 和 y 范围内
- 若该最近点到圆心距离的平方 ≤ 半径的平方，则重叠
