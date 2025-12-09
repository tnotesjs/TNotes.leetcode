# [0440. 字典序的第 K 小数字【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0440.%20%E5%AD%97%E5%85%B8%E5%BA%8F%E7%9A%84%E7%AC%ACK%E5%B0%8F%E6%95%B0%E5%AD%97%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/k-th-smallest-in-lexicographical-order/)

给定整数 `n` 和 `k`，返回 `[1, n]` 中字典序第 `k` 小的数字。

---

- 示例 1：

```txt
输入: n = 13, k = 2
输出: 10
解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
```

- 示例 2：

```txt
输入: n = 1, k = 1
输出: 1
```

---

提示：

- `1 <= k <= n <= 10^9`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
