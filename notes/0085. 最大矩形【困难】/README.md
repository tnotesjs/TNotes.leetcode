# [0085. 最大矩形【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0085.%20%E6%9C%80%E5%A4%A7%E7%9F%A9%E5%BD%A2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/maximal-rectangle/)

给定一个仅包含 `0` 和 `1` 、大小为 `rows x cols` 的二维二进制矩阵，找出只包含 `1` 的最大矩形，并返回其面积。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-45-54.png)

```txt
输入：matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]
输出：6
```

解释：最大矩形如上图所示。

---

示例 2：

```txt
输入：matrix = [["0"]]
输出：0
```

---

示例 3：

```txt
输入：matrix = [["1"]]
输出：1
```

---

提示：

- `rows == matrix.length`
- `cols == matrix[0].length`
- `1 <= row, cols <= 200`
- `matrix[i][j]` 为 `'0'` 或 `'1'`

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
