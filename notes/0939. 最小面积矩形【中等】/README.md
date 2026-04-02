# [0939. 最小面积矩形【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0939.%20%E6%9C%80%E5%B0%8F%E9%9D%A2%E7%A7%AF%E7%9F%A9%E5%BD%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希 + 枚举对角线](#2--s1---哈希--枚举对角线)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-area-rectangle/)

给你一个 X-Y 平面上的点数组 `points`，其中 `points[i] = [xi, yi]`。

返回由这些点形成的矩形的最小面积，矩形的边与 X 轴和 Y 轴平行。如果不存在这样的矩形，则返回 `0`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-13-08.png)

```txt
输入：points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
输出：4
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-13-18.png)

```txt
输入：points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
输出：2
```

---

提示：

- `1 <= points.length <= 500`
- `points[i].length == 2`
- `0 <= xi, yi <= 4 * 10^4`
- 所有给定的点都是 唯一 的。

## 2. 🎯 s.1 - 哈希 + 枚举对角线

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 n 是点的数量
- 空间复杂度：$O(n)$，哈希集合

算法思路：

- 将所有点存入哈希集合
- 枚举所有点对作为矩形的对角线端点（要求两点不同行不同列）
- 检查另外两个角的点是否存在，若存在则计算面积并更新最小值
