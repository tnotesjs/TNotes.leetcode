# [1030. 距离顺序排列矩阵单元格【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1030.%20%E8%B7%9D%E7%A6%BB%E9%A1%BA%E5%BA%8F%E6%8E%92%E5%88%97%E7%9F%A9%E9%98%B5%E5%8D%95%E5%85%83%E6%A0%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 枚举并按曼哈顿距离排序](#2--s1---枚举并按曼哈顿距离排序)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/matrix-cells-in-distance-order/)

给定四个整数 `rows` , `cols` , `rCenter` 和 `cCenter`。有一个 `rows x cols` 的矩阵，你在单元格上的坐标是 `(rCenter, cCenter)`。

返回矩阵中的所有单元格的坐标，并按与 `(rCenter, cCenter)` 的 距离 从最小到最大的顺序排。你可以按 任何 满足此条件的顺序返回答案。

单元格`(r1, c1)` 和 `(r2, c2)` 之间的距离为`|r1 - r2| + |c1 - c2|`。

---

示例 1：

```txt
输入：rows = 1, cols = 2, rCenter = 0, cCenter = 0
输出：[[0,0],[0,1]]

解释：
从 (r0, c0) 到其他单元格的距离为：[0,1]
```

---

示例 2：

```txt
输入：rows = 2, cols = 2, rCenter = 0, cCenter = 1
输出：[[0,1],[0,0],[1,1],[1,0]]

解释：
从 (r0, c0) 到其他单元格的距离为：[0,1,1,2]
[[0,1],[1,1],[0,0],[1,0]] 也会被视作正确答案
```

---

示例 3：

```txt
输入：rows = 2, cols = 3, rCenter = 1, cCenter = 2
输出：[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]

解释：
从 (r0, c0) 到其他单元格的距离为：[0,1,1,2,2,3]
其他满足题目要求的答案也会被视为正确，例如 [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]]
```

---

提示：

- `1 <= rows, cols <= 100`
- `0 <= rCenter < rows`
- `0 <= cCenter < cols`

## 2. 🎯 s.1 - 枚举并按曼哈顿距离排序

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(RC \log (RC))$
- 空间复杂度：$O(RC)$（存放所有坐标）

解题思路：

- 枚举矩阵所有坐标，计算到中心的曼哈顿距离并排序即可。
