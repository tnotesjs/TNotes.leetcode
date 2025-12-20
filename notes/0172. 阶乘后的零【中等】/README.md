# [0172. 阶乘后的零【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0172.%20%E9%98%B6%E4%B9%98%E5%90%8E%E7%9A%84%E9%9B%B6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/factorial-trailing-zeroes/)

给定一个整数 `n` ，返回 `n!` 结果中尾随零的数量。

提示 `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`

---

- 示例 1：

```txt
输入：n = 3
输出：0
解释：3! = 6 ，不含尾随 0
```

- 示例 2：

```txt
输入：n = 5
输出：1
解释：5! = 120 ，有一个尾随 0
```

- 示例 3：

```txt
输入：n = 0
输出：0
```

---

提示：

- `0 <= n <= 10^4`

进阶： 你可以设计并实现对数时间复杂度的算法来解决此问题吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
