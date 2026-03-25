# [1292. 元素和小于等于阈值的正方形的最大边长【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1292.%20%E5%85%83%E7%B4%A0%E5%92%8C%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E%E9%98%88%E5%80%BC%E7%9A%84%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%9A%84%E6%9C%80%E5%A4%A7%E8%BE%B9%E9%95%BF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/)

给你一个大小为 `m x n` 的矩阵 `mat` 和一个整数阈值 `threshold`。

请你返回元素总和小于或等于阈值的正方形区域的最大边长；如果没有这样的正方形区域，则返回 0。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-20-15-06.png)

```txt
输入：mat = [
  [1, 1, 3, 2, 4, 3, 2],
  [1, 1, 3, 2, 4, 3, 2],
  [1, 1, 3, 2, 4, 3, 2]
], threshold = 4
输出：2
解释：总和小于或等于 4 的正方形的最大边长为 2，如图所示。
```

示例 2：

```txt
输入：mat = [
  [2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2]
], threshold = 1
输出：0
```

---

提示：

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 300`
- `0 <= mat[i][j] <= 10^4`
- `0 <= threshold <= 10^5`

## 2. 🎯 s.1 - 前缀和

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n \times \min(m, n))$，其中 $m$、$n$ 是矩阵的行数和列数
- 空间复杂度：$O(m \times n)$，前缀和数组

算法思路：

- 建立二维前缀和，快速计算任意子矩阵的元素和
- 遍历每个位置，从当前最优解 +1 开始尝试增大边长，直到超过阈值或越界
