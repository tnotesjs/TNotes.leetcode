# [0118. 杨辉三角【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0118.%20%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/pascals-triangle)

给定一个非负整数 `numRows`，生成「杨辉三角」的前 `numRows` 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![gif](./assets/PascalTriangleAnimated2.gif)

---

示例 1：

```
输入: numRows = 5
输出: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
```

---

示例 2：

```
输入: numRows = 1
输出: [[1]]
```

提示：

- `1 <= numRows <= 30`

## 2. 🎯 s.1 - 暴力解法

![svg](./assets/1.svg)

::: code-group

<<< ./solutions/1/1.js

:::

- 时间复杂度：$O(numRows^2)$，需要填充杨辉三角中的每个元素
- 空间复杂度：$O(numRows^2)$，需要存储完整的杨辉三角
