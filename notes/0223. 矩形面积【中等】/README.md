# [0223. 矩形面积【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0223.%20%E7%9F%A9%E5%BD%A2%E9%9D%A2%E7%A7%AF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 数学](#2--s1---数学)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/rectangle-area/)

给你 二维 平面上两个 由直线构成且边与坐标轴平行/垂直 的矩形，请你计算并返回两个矩形覆盖的总面积。

每个矩形由其 左下 顶点和 右上 顶点坐标表示：

- 第一个矩形由其左下顶点 `(ax1, ay1)` 和右上顶点 `(ax2, ay2)` 定义。
- 第二个矩形由其左下顶点 `(bx1, by1)` 和右上顶点 `(bx2, by2)` 定义。

---

示例 1：

![Rectangle Area](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-47-06.png)

```txt
输入：ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
输出：45
```

示例 2：

```txt
输入：ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
输出：16
```

---

提示：

- `-10^4 <= ax1 <= ax2 <= 10^4`
- `-10^4 <= ay1 <= ay2 <= 10^4`
- `-10^4 <= bx1 <= bx2 <= 10^4`
- `-10^4 <= by1 <= by2 <= 10^4`

## 2. 🎯 s.1 - 数学

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

算法思路：

- 总面积 = 矩形1面积 + 矩形2面积 - 重叠面积
- 重叠宽度 = $\max(0,\, \min(ax2, bx2) - \max(ax1, bx1))$
- 重叠高度 = $\max(0,\, \min(ay2, by2) - \max(ay1, by1))$
