# [3143. 正方形中的最多点数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3143.%20%E6%AD%A3%E6%96%B9%E5%BD%A2%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%9A%E7%82%B9%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-points-inside-the-square)

给你一个二维数组 `points` 和一个字符串 `s` ，其中 `points[i]` 表示第 `i` 个点的坐标，`s[i]` 表示第 `i` 个点的 **标签** 。

如果一个正方形的中心在 `(0, 0)` ，所有边都平行于坐标轴，且正方形内 **不** 存在标签相同的两个点，那么我们称这个正方形是 **合法** 的。

请你返回 **合法** 正方形中可以包含的 **最多** 点数。

**注意：**

- 如果一个点位于正方形的边上或者在边以内，则认为该点位于正方形内。
- 正方形的边长可以为零。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-08-05-37.png)

**输入：** points = [[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]], s = "abdca"

**输出：** 2

**解释：**

边长为 4 的正方形包含两个点 `points[0]` 和 `points[1]` 。

---

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-08-05-42.png)

**输入：** points = [[1,1],[-2,-2],[-2,2]], s = "abb"

**输出：** 1

**解释：**

边长为 2 的正方形包含 1 个点 `points[0]` 。

---

- **示例 3：**

**输入：** points = [[1,1],[-1,-1],[2,-2]], s = "ccd"

**输出：** 0

**解释：**

任何正方形都无法只包含 `points[0]` 和 `points[1]` 中的一个点，所以合法正方形中都不包含任何点。

---

**提示：**

- `1 <= s.length, points.length <= 10^5`
- `points[i].length == 2`
- `-10^9 <= points[i][0], points[i][1] <= 10^9`
- `s.length == points.length`
- `points` 中的点坐标互不相同。
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
