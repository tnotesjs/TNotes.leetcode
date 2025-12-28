# [0878. 第 N 个神奇数字【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0878.%20%E7%AC%AC%20N%20%E4%B8%AA%E7%A5%9E%E5%A5%87%E6%95%B0%E5%AD%97%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/nth-magical-number/)

一个正整数如果能被 `a` 或 `b` 整除，那么它是神奇的。

给定三个整数 `n` , `a` , `b` ，返回第 `n` 个神奇的数字。因为答案可能很大，所以返回答案 对 `10^9 + 7` 取模 后的值。

---

示例 1：

```txt
输入：n = 1, a = 2, b = 3
输出：2
```

示例 2：

```txt
输入：n = 4, a = 2, b = 3
输出：6
```

---

提示：

- `1 <= n <= 10^9`
- `2 <= a, b <= 4 * 10^4`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
