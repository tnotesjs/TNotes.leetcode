# [1253. 重构 2 行二进制矩阵【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1253.%20%E9%87%8D%E6%9E%84%202%20%E8%A1%8C%E4%BA%8C%E8%BF%9B%E5%88%B6%E7%9F%A9%E9%98%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reconstruct-a-2-row-binary-matrix/)

给你一个 `2` 行 `n` 列的二进制数组：

- 矩阵是一个二进制矩阵，这意味着矩阵中的每个元素不是 `0` 就是 `1`。
- 第 `0` 行的元素之和为 `upper`。
- 第 `1` 行的元素之和为 `lower`。
- 第 `i` 列（从 `0` 开始编号）的元素之和为 `colsum[i]`，`colsum` 是一个长度为 `n` 的整数数组。

你需要利用 `upper`，`lower` 和 `colsum` 来重构这个矩阵，并以二维整数数组的形式返回它。

如果有多个不同的答案，那么任意一个都可以通过本题。

如果不存在符合要求的答案，就请返回一个空的二维数组。

---

- 示例 1：

```txt
输入：upper = 2, lower = 1, colsum = [1,1,1]
输出：[[1,1,0],[0,0,1]]
解释：[[1,0,1],[0,1,0]] 和 [[0,1,1],[1,0,0]] 也是正确答案。
```

- 示例 2：

```txt
输入：upper = 2, lower = 3, colsum = [2,2,1,1]
输出：[]
```

- 示例 3：

```txt
输入：upper = 5, lower = 5, colsum = [2,1,2,0,1,0,1,2,0,1]
输出：[[1,1,1,0,1,0,0,1,0,0],[1,0,1,0,0,0,1,1,0,1]]
```

---

提示：

- `1 <= colsum.length <= 10^5`
- `0 <= upper, lower <= colsum.length`
- `0 <= colsum[i] <= 2`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
