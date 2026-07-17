# [0084. 柱状图中最大的矩形【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0084.%20%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/largest-rectangle-in-histogram/)

给定 _n_ 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-45-14.png)

```txt
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-45-20.png)

```txt
输入：heights = [2,4]
输出：4
```

---

提示：

- `1 <= heights.length <=10^5`
- `0 <= heights[i] <= 10^4`

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
