# [0264. 丑数 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0264.%20%E4%B8%91%E6%95%B0%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/ugly-number-ii/)

给你一个整数 `n`，请你找出并返回第 `n` 个 丑数。

丑数 就是质因子只包含 `2`、`3` 和 `5` 的正整数。

---

示例 1：

```txt
输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
```

示例 2：

```txt
输入：n = 1
输出：1
解释：1 通常被视为丑数。
```

---

提示：

- `1 <= n <= 1690`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
