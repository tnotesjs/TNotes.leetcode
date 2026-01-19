# [0479. 最大回文数乘积【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0479.%20%E6%9C%80%E5%A4%A7%E5%9B%9E%E6%96%87%E6%95%B0%E4%B9%98%E7%A7%AF%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-palindrome-product/)

给定一个整数 n，返回 \*可表示为两个 `n` 位整数乘积的 最大回文整数。因为答案可能非常大，所以返回它对 `1337` 取余。

---

示例 1：

```txt
输入：n = 2
输出：987
解释：99 x 91 = 9009, 9009 % 1337 = 987
```

示例 2：

```txt
输入：n = 1
输出：9
```

---

提示：

- `1 <= n <= 8`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
