# [3454. 分割正方形 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3454.%20%E5%88%86%E5%89%B2%E6%AD%A3%E6%96%B9%E5%BD%A2%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/separate-squares-ii/)

给你一个二维整数数组 `squares` ，其中 `squares[i] = [xi, yi, li]` 表示一个与 x 轴平行的正方形的左下角坐标和正方形的边长。

找到一个最小的 y 坐标，它对应一条水平线，该线需要满足它以上正方形的总面积 等于 该线以下正方形的总面积。

答案如果与实际答案的误差在 `10^-5` 以内，将视为正确答案。

注意：正方形 可能会 重叠。重叠区域只 统计一次。

---

示例 1：

输入：squares = [[0,0,1],[2,2,1]]

输出：1.00000

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-21-20.png)

任何在 `y = 1` 和 `y = 2` 之间的水平线都会有 1 平方单位的面积在其上方，1 平方单位的面积在其下方。最小的 y 坐标是 1。

---

示例 2：

输入：squares = [[0,0,2],[1,1,1]]

输出：1.00000

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-21-27.png)

由于蓝色正方形和红色正方形有重叠区域且重叠区域只统计一次。所以直线 `y = 1` 将正方形分割成两部分且面积相等。

---

提示：

- `1 <= squares.length <= 5 * 10^4`
- `squares[i] = [xi, yi, li]`
- `squares[i].length == 3`
- `0 <= xi, yi <= 10^9`
- `1 <= li <= 10^9`
- 所有正方形的总面积不超过 `10^15`。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
