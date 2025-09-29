# [3195. 包含所有 1 的最小矩形面积 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3195.%20%E5%8C%85%E5%90%AB%E6%89%80%E6%9C%89%201%20%E7%9A%84%E6%9C%80%E5%B0%8F%E7%9F%A9%E5%BD%A2%E9%9D%A2%E7%A7%AF%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-minimum-area-to-cover-all-ones-i/)

给你一个二维 **二进制** 数组 `grid`。请你找出一个边在水平方向和竖直方向上、面积 **最小** 的矩形，并且满足 `grid` 中所有的 1 都在矩形的内部。

返回这个矩形可能的 **最小** 面积。

---

- **示例 1：**

**输入：** grid = [[0,1,0],[1,0,1]]

**输出：** 6

**解释：**

![](https://assets.leetcode.com/uploads/2024/05/08/examplerect0.png)

这个最小矩形的高度为 2，宽度为 3，因此面积为 `2 * 3 = 6`。

---

- **示例 2：**

**输入：** grid = [[0,0],[1,0]]

**输出：** 1

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-14-08.png)

这个最小矩形的高度和宽度都是 1，因此面积为 `1 * 1 = 1`。

---

**提示：**

- `1 <= grid.length, grid[i].length <= 1000`
- `grid[i][j]` 是 0 或 1。
- 输入保证 `grid` 中至少有一个 1 。

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

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-14-16.png)

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
