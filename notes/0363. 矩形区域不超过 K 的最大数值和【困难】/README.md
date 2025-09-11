# [0363. 矩形区域不超过 K 的最大数值和【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0363.%20%E7%9F%A9%E5%BD%A2%E5%8C%BA%E5%9F%9F%E4%B8%8D%E8%B6%85%E8%BF%87%20K%20%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E5%80%BC%E5%92%8C%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/max-sum-of-rectangle-no-larger-than-k/)

给你一个 `m x n` 的矩阵 `matrix` 和一个整数 `k` ，找出并返回矩阵内部矩形区域的不超过 `k` 的最大数值和。

题目数据保证总会存在一个数值和不超过 `k` 的矩形区域。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-11-12-20-53.png)

```txt
输入：matrix = [[1,0,1],[0,-2,3]], k = 2
输出：2
解释：蓝色边框圈出来的矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。
```

- **示例 2：**

```txt
输入：matrix = [[2,2,-1]], k = 3
输出：3
```

---

**提示：**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-100 <= matrix[i][j] <= 100`
- `-10^5 <= k <= 10^5`

**进阶：** 如果行数远大于列数，该如何设计解决方案？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
