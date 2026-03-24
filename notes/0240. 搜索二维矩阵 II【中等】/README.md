# [0240. 搜索二维矩阵 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0240.%20%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/search-a-2d-matrix-ii/)

编写一个高效的算法来搜索 `*m* x *n*` 矩阵 `matrix` 中的一个目标值 `target`。该矩阵具有以下特性：

- 每行的元素从左到右升序排列。
- 每列的元素从上到下升序排列。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-54-06.png)

```txt
输入：matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
], target = 5
输出：true
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-54-13.png)

```txt
输入：matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
], target = 20
输出：false
```

---

提示：

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= n, m <= 300`
- `-10^9 <= matrix[i][j] <= 10^9`
- 每行的所有元素从左到右升序排列
- 每列的所有元素从上到下升序排列
- `-10^9 <= target <= 10^9`

## 2. 🎯 s.1 - Z 字形搜索

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m + n)$，其中 $m$ 和 $n$ 是矩阵的行数和列数
- 空间复杂度：$O(1)$

算法思路：

- 从矩阵右上角出发，每次比较当前元素与 target
- 当前元素大于 target 则左移，小于 target 则下移
