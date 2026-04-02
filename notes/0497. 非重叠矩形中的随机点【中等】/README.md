# [0497. 非重叠矩形中的随机点【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0497.%20%E9%9D%9E%E9%87%8D%E5%8F%A0%E7%9F%A9%E5%BD%A2%E4%B8%AD%E7%9A%84%E9%9A%8F%E6%9C%BA%E7%82%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 前缀面积和 + 二分查找](#2--s1---前缀面积和--二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/random-point-in-non-overlapping-rectangles/)

给定一个由非重叠的轴对齐矩形的数组 `rects`，其中 `rects[i] = [ai, bi, xi, yi]` 表示 `(ai, bi)` 是第 `i` 个矩形的左下角点，`(xi, yi)` 是第 `i` 个矩形的右上角点。设计一个算法来随机挑选一个被某一矩形覆盖的整数点。矩形周长上的点也算做是被矩形覆盖。所有满足要求的点必须等概率被返回。

在给定的矩形覆盖的空间内的任何整数点都有可能被返回。

请注意，整数点是具有整数坐标的点。

实现 `Solution` 类:

- `Solution(int[][] rects)` 用给定的矩形数组 `rects` 初始化对象。
- `int[] pick()` 返回一个随机的整数点 `[u, v]` 在给定的矩形所覆盖的空间内。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-18-23.png)

```txt
输入:
["Solution", "pick", "pick", "pick", "pick", "pick"]
[[[[-2, -2, 1, 1], [2, 2, 4, 6]]], [], [], [], [], []]
输出:
[null, [1, -2], [1, -1], [-1, -2], [-2, -2], [0, 0]]

解释：
Solution solution = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);
solution.pick(); // 返回 [1, -2]
solution.pick(); // 返回 [1, -1]
solution.pick(); // 返回 [-1, -2]
solution.pick(); // 返回 [-2, -2]
solution.pick(); // 返回 [0, 0]
```

---

提示：

- `1 <= rects.length <= 100`
- `rects[i].length == 4`
- `-10^9 <= ai < xi <= 10^9`
- `-10^9 <= bi < yi <= 10^9`
- `xi - ai <= 2000`
- `yi - bi <= 2000`
- 所有的矩形不重叠。
- `pick` 最多被调用 `10^4` 次。

## 2. 🎯 s.1 - 前缀面积和 + 二分查找

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：初始化 $O(k)$，每次 `pick` $O(\log k)$，其中 $k$ 是矩形数量
- 空间复杂度：$O(k)$

算法思路：

- 按每个矩形包含的整数点数构建前缀和
- 随机一个 $[1, total]$ 的数，二分定位到对应矩形
- 在矩形内通过偏移量计算具体坐标
