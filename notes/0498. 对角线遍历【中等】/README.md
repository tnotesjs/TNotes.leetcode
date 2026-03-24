# [0498. 对角线遍历【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0498.%20%E5%AF%B9%E8%A7%92%E7%BA%BF%E9%81%8D%E5%8E%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/diagonal-traverse/)

给你一个大小为 `m x n` 的矩阵 `mat`，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-26-23.png)

```txt
输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
```

示例 2：

```txt
输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
```

---

提示：

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 10^4`
- `1 <= m * n <= 10^4`
- `-10^5 <= mat[i][j] <= 10^5`

## 2. 🎯 s.1 - 模拟

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$
- 空间复杂度：$O(1)$（不计结果数组）

算法思路：

- 维护方向标志，交替向右上和左下遍历
- 到达边界时转向，根据当前位置决定右移还是下移
