# [0343. 整数拆分【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0343.%20%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 数学贪心](#2--s1---数学贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/integer-break/)

给定一个正整数 `n`，将其拆分为 `k` 个 正整数 的和（ `k >= 2` ），并使这些整数的乘积最大化。

返回 _你可以获得的最大乘积_。

---

示例 1：

```txt
输入: n = 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
```

示例 2：

```txt
输入: n = 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
```

---

提示：

- `2 <= n <= 58`

## 2. 🎯 s.1 - 数学贪心

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

算法思路：

- 尽可能拆成 3，因为 $3 \times 3 > 2 \times 2 \times 2$
- 余数为 0 直接返回 $3^q$，余 1 则拆一个 3 出来凑成 $4$，余 2 则乘 $2$
