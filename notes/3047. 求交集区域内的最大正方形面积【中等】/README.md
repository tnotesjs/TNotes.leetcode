# [3047. 求交集区域内的最大正方形面积【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3047.%20%E6%B1%82%E4%BA%A4%E9%9B%86%E5%8C%BA%E5%9F%9F%E5%86%85%E7%9A%84%E6%9C%80%E5%A4%A7%E6%AD%A3%E6%96%B9%E5%BD%A2%E9%9D%A2%E7%A7%AF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-largest-area-of-square-inside-two-rectangles/)

在二维平面上存在 `n` 个矩形。给你两个下标从 **0** 开始的二维整数数组 `bottomLeft` 和 `topRight`，两个数组的大小都是 `n x 2` ，其中 `bottomLeft[i]` 和 `topRight[i]` 分别代表第 `i` 个矩形的 **左下角** 和 **右上角** 坐标。

我们定义 **向右** 的方向为 x 轴正半轴（**x 坐标增加**），**向左** 的方向为 x 轴负半轴（**x 坐标减少**）。同样地，定义 **向上** 的方向为 y 轴正半轴（**y 坐标增加**）**，向下** 的方向为 y 轴负半轴（**y 坐标减少**）。

你可以选择一个区域，该区域由两个矩形的 **交集** 形成。你需要找出能够放入该区域 **内** 的 **最大** 正方形面积，并选择最优解。

返回能够放入交集区域的正方形的 **最大** 可能面积，如果矩形之间不存在任何交集区域，则返回 `0`。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-51-19.png)

```txt
输入：bottomLeft = [[1,1],[2,2],[3,1]], topRight = [[3,3],[4,4],[6,6]]
输出：1
解释：边长为 1 的正方形可以放入矩形 0 和矩形 1 的交集区域，或矩形 1 和矩形 2 的交集区域。因此最大面积是边长 * 边长，即 1 * 1 = 1。
可以证明，边长更大的正方形无法放入任何交集区域。
```

---

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-51-25.png)

```txt
输入：bottomLeft = [[1,1],[2,2],[1,2]], topRight = [[3,3],[4,4],[3,4]]
输出：1
解释：边长为 1 的正方形可以放入矩形 0 和矩形 1，矩形 1 和矩形 2，或所有三个矩形的交集区域。因此最大面积是边长 * 边长，即 1 * 1 = 1。
可以证明，边长更大的正方形无法放入任何交集区域。
请注意，区域可以由多于两个矩形的交集构成。
```

---

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-51-31.png)

```txt
输入：bottomLeft = [[1,1],[3,3],[3,1]], topRight = [[2,2],[4,4],[4,2]]
输出：0
解释：不存在相交的矩形，因此，返回 0 。
```

---

**提示：**

- `n == bottomLeft.length == topRight.length`
- `2 <= n <= 10^3`
- `bottomLeft[i].length == topRight[i].length == 2`
- `1 <= bottomLeft[i][0], bottomLeft[i][1] <= 10^7`
- `1 <= topRight[i][0], topRight[i][1] <= 10^7`
- `bottomLeft[i][0] < topRight[i][0]`
- `bottomLeft[i][1] < topRight[i][1]`

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
