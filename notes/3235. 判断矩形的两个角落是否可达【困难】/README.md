# [3235. 判断矩形的两个角落是否可达【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3235.%20%E5%88%A4%E6%96%AD%E7%9F%A9%E5%BD%A2%E7%9A%84%E4%B8%A4%E4%B8%AA%E8%A7%92%E8%90%BD%E6%98%AF%E5%90%A6%E5%8F%AF%E8%BE%BE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-the-rectangle-corner-is-reachable/)

给你两个正整数 `xCorner` 和 `yCorner` 和一个二维整数数组 `circles` ，其中 `circles[i] = [xi, yi, ri]` 表示一个圆心在 `(xi, yi)` 半径为 `ri` 的圆。

坐标平面内有一个左下角在原点，右上角在 `(xCorner, yCorner)` 的矩形。你需要判断是否存在一条从左下角到右上角的路径满足：路径 **完全** 在矩形内部，**不会** 触碰或者经过 **任何** 圆的内部和边界，同时 **只** 在起点和终点接触到矩形。

如果存在这样的路径，请你返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

**输入：** X = 3, Y = 4, circles = [[2,1,1]]

**输出：** true

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-30-25.png)

黑色曲线表示一条从 `(0, 0)` 到 `(3, 4)` 的路径。

---

- **示例 2：**

**输入：** X = 3, Y = 3, circles = [[1,1,2]]

**输出：** false

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-30-31.png)

不存在从 `(0, 0)` 到 `(3, 3)` 的路径。

---

- **示例 3：**

**输入：** X = 3, Y = 3, circles = [[2,1,1],[1,2,1]]

**输出：** false

**解释：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-30-38.png)

不存在从 `(0, 0)` 到 `(3, 3)` 的路径。

---

- **示例 4：**

**输入：** X = 4, Y = 4, circles = [[5,5,1]]

**输出：** true

**解释：**

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-30-44.png)

---

**提示：**

- `3 <= xCorner, yCorner <= 10^9`
- `1 <= circles.length <= 1000`
- `circles[i].length == 3`
- `1 <= xi, yi, ri <= 10^9`

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
