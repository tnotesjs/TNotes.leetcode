# [3288. 最长上升路径的长度【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3288.%20%E6%9C%80%E9%95%BF%E4%B8%8A%E5%8D%87%E8%B7%AF%E5%BE%84%E7%9A%84%E9%95%BF%E5%BA%A6%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/length-of-the-longest-increasing-path/)

给你一个长度为 `n` 的二维整数数组 `coordinates` 和一个整数 `k` ，其中 `0 <= k < n` 。

`coordinates[i] = [xi, yi]` 表示二维平面里一个点 `(xi, yi)` 。

如果一个点序列 `(x1, y1)`, `(x2, y2)`, `(x3, y3)`, ..., `(xm, ym)` 满足以下条件，那么我们称它是一个长度为 `m` 的 **上升序列** ：

- 对于所有满足 `1 <= i < m` 的 `i` 都有 `xi < xi + 1` 且 `yi < yi + 1` 。
- 对于所有 `1 <= i <= m` 的 `i` 对应的点 `(xi, yi)` 都在给定的坐标数组里。

请你返回包含坐标 `coordinates[k]` 的 **最长上升路径** 的长度。

---

- **示例 1：**

**输入：** coordinates = [[3,1],[2,2],[4,1],[0,0],[5,3]], k = 1

**输出：** 3

**解释：**

`(0, 0)` ，`(2, 2)` ，`(5, 3)` 是包含坐标 `(2, 2)` 的最长上升路径。

---

- **示例 2：**

**输入：** coordinates = [[2,1],[7,0],[5,6]], k = 2

**输出：** 2

**解释：**

`(2, 1)` ，`(5, 6)` 是包含坐标 `(5, 6)` 的最长上升路径。

---

**提示：**

- `1 <= n == coordinates.length <= 10^5`
- `coordinates[i].length == 2`
- `0 <= coordinates[i][0], coordinates[i][1] <= 10^9`
- `coordinates` 中的元素 **互不相同** 。
- `0 <= k <= n - 1`

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
