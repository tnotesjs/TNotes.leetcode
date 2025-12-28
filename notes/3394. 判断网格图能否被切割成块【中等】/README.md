# [3394. 判断网格图能否被切割成块【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3394.%20%E5%88%A4%E6%96%AD%E7%BD%91%E6%A0%BC%E5%9B%BE%E8%83%BD%E5%90%A6%E8%A2%AB%E5%88%87%E5%89%B2%E6%88%90%E5%9D%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-grid-can-be-cut-into-sections/)

给你一个整数 `n` 表示一个 `n x n` 的网格图，坐标原点是这个网格图的左下角。同时给你一个二维坐标数组 `rectangles` ，其中 `rectangles[i]` 的格式为 `[startx, starty, endx, endy]` ，表示网格图中的一个矩形。每个矩形定义如下：

- `(startx, starty)`：矩形的左下角。
- `(endx, endy)`：矩形的右上角。

注意 ，矩形相互之间不会重叠。你的任务是判断是否能找到两条 要么都垂直要么都水平 的 两条切割线 ，满足：

- 切割得到的三个部分分别都 至少 包含一个矩形。
- 每个矩形都 恰好仅 属于一个切割得到的部分。

如果可以得到这样的切割，请你返回 `true` ，否则返回 `false`。

---

示例 1：

输入： n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]

输出： true

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-46-09.png)

网格图如上所示，我们可以在 `y = 2` 和 `y = 4` 处进行水平切割，所以返回 true。

---

示例 2：

输入： n = 4, rectangles = [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]]

输出： true

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-46-15.png)

我们可以在 `x = 2` 和 `x = 3` 处进行竖直切割，所以返回 true。

---

示例 3：

输入： n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]

输出： false

解释：

我们无法进行任何两条水平或者两条竖直切割并且满足题目要求，所以返回 false。

---

提示：

- `3 <= n <= 10^9`
- `3 <= rectangles.length <= 10^5`
- `0 <= rectangles[i][0] < rectangles[i][2] <= n`
- `0 <= rectangles[i][1] < rectangles[i][3] <= n`
- 矩形之间两两不会有重叠。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
