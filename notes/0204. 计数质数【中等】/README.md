# [0204. 计数质数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0204.%20%E8%AE%A1%E6%95%B0%E8%B4%A8%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-primes/)

给定整数 `n`，返回 _所有小于非负整数 `n` 的质数的数量_。

---

示例 1：

```txt
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7。
```

示例 2：

```txt
输入：n = 0
输出：0
```

示例 3：

```txt
输入：n = 1
输出：0
```

---

提示：

- `0 <= n <= 5 * 10^6`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
