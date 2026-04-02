# [2575. 找出字符串的可整除数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2575.%20%E6%89%BE%E5%87%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%8F%AF%E6%95%B4%E9%99%A4%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 取模运算](#2--s1---取模运算)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-divisibility-array-of-a-string/)

给你一个下标从 0 开始的字符串 `word`，长度为 `n`，由从 `0` 到 `9` 的数字组成。另给你一个正整数 `m`。

`word` 的 可整除数组 `div` 是一个长度为 `n` 的整数数组，并满足：

- 如果 `word[0,...,i]` 所表示的 数值 能被 `m` 整除，`div[i] = 1`
- 否则，`div[i] = 0`

返回 `word` 的可整除数组。

---

示例 1：

```txt
输入：word = "998244353", m = 3
输出：[1,1,0,0,0,1,1,0,0]
解释：仅有 4 个前缀可以被 3 整除："9"、"99"、"998244" 和 "9982443"。
```

示例 2：

```txt
输入：word = "1010", m = 10
输出：[0,1,0,1]
解释：仅有 2 个前缀可以被 10 整除："10" 和 "1010"。
```

---

提示：

- `1 <= n <= 10^5`
- `word.length == n`
- `word` 由数字 `0` 到 `9` 组成
- `1 <= m <= 10^9`

## 2. 🎯 s.1 - 取模运算

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，遍历字符串一次
- 空间复杂度：$O(N)$，结果数组的空间（不计入则为 $O(1)$）

算法思路：

- 维护前缀数值对 m 的余数 `rem`
- 递推公式：`rem = (rem * 10 + digit) % m`
- 若 `rem == 0`，则当前前缀可被 m 整除，`div[i] = 1`；否则 `div[i] = 0`
