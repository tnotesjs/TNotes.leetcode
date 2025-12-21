# [1637. 两点之间不包含任何点的最宽垂直区域【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1637.%20%E4%B8%A4%E7%82%B9%E4%B9%8B%E9%97%B4%E4%B8%8D%E5%8C%85%E5%90%AB%E4%BB%BB%E4%BD%95%E7%82%B9%E7%9A%84%E6%9C%80%E5%AE%BD%E5%9E%82%E7%9B%B4%E5%8C%BA%E5%9F%9F%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points/)

给你 `n` 个二维平面上的点 `points` ，其中 `points[i] = [xi, yi]` ，请你返回两点之间内部不包含任何点的 最宽垂直区域 的宽度。

垂直区域 的定义是固定宽度，而 y 轴上无限延伸的一块区域（也就是高度为无穷大）。 最宽垂直区域 为宽度最大的一个垂直区域。

请注意，垂直区域 边上 的点 不在 区域内。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-31-17.png)

```txt
​输入：points = [[8,7],[9,9],[7,4],[9,7]]
输出：1
解释：红色区域和蓝色区域都是最优区域。
```

- 示例 2：

```txt
输入：points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
输出：3
```

---

提示：

- `n == points.length`
- `2 <= n <= 10^5`
- `points[i].length == 2`
- `0 <= xi, yi <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
