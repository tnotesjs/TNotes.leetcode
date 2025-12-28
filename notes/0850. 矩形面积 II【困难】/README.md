# [0850. 矩形面积 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0850.%20%E7%9F%A9%E5%BD%A2%E9%9D%A2%E7%A7%AF%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/rectangle-area-ii/)

给你一个轴对齐的二维数组 `rectangles`。 对于 `rectangle[i] = [x1, y1, x2, y2]`，其中 `(xi1, yi1)` 是该矩形 左下角 的坐标， `(xi2, yi2)` 是该矩形 右上角 的坐标。

计算平面中所有 `rectangles` 所覆盖的 总面积。任何被两个或多个矩形覆盖的区域应只计算 一次。

返回 _总面积_。因为答案可能太大，返回 `10^9 + 7` 的 模。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-29-32.png)

```txt
输入：rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
输出：6
解释：如图所示，三个矩形覆盖了总面积为 6 的区域。
从(1,1)到(2,2)，绿色矩形和红色矩形重叠。
从(1,0)到(2,3)，三个矩形都重叠。
```

- 示例 2：

```txt
输入：rectangles = [[0,0,1000000000,1000000000]]
输出：49
解释：答案是 1018 对 (109 + 7) 取模的结果， 即 49。
```

---

提示：

- `1 <= rectangles.length <= 200`
- `rectanges[i].length = 4`
- `0 <= xi1, yi1, xi2, yi2 <= 10^9`
- `xi1 <= xi2`
- `yi1 <= yi2`
- 所有矩阵面积不为 0。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
