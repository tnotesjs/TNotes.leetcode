# [0357. 统计各位数字都不同的数字个数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0357.%20%E7%BB%9F%E8%AE%A1%E5%90%84%E4%BD%8D%E6%95%B0%E5%AD%97%E9%83%BD%E4%B8%8D%E5%90%8C%E7%9A%84%E6%95%B0%E5%AD%97%E4%B8%AA%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-numbers-with-unique-digits/)

给你一个整数 `n`，统计并返回各位数字都不同的数字 `x` 的个数，其中 `0 <= x < 10^n`。

---

示例 1：

```txt
输入：n = 2
输出：91
解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。
```

示例 2：

```txt
输入：n = 0
输出：1
```

---

提示：

- `0 <= n <= 8`

## 2. 🎯 s.1 - 排列组合

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

算法思路：

- $i$ 位数且各位不同的个数 = $9 \times 9 \times 8 \times \cdots \times (10-i+1)$
- 累加 1 位到 $n$ 位的结果，加上 $n=0$ 的情况
