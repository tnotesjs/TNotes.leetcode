# [2272. 最大波动的子字符串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2272.%20%E6%9C%80%E5%A4%A7%E6%B3%A2%E5%8A%A8%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/substring-with-largest-variance/)

字符串的 波动 定义为子字符串中出现次数 最多 的字符次数与出现次数 最少 的字符次数之差。

给你一个字符串 `s` ，它只包含小写英文字母。请你返回 `s` 里所有 子字符串的 最大波动 值。

子字符串 是一个字符串的一段连续字符序列。

---

示例 1：

```txt
输入：s = "aababbb"
输出：3
解释：
所有可能的波动值和它们对应的子字符串如以下所示：
- 波动值为 0 的子字符串："a" ，"aa" ，"ab" ，"abab" ，"aababb" ，"ba" ，"b" ，"bb" 和 "bbb"。
- 波动值为 1 的子字符串："aab" ，"aba" ，"abb" ，"aabab" ，"ababb" ，"aababbb" 和 "bab"。
- 波动值为 2 的子字符串："aaba" ，"ababbb" ，"abbb" 和 "babb"。
- 波动值为 3 的子字符串 "babbb"。
所以，最大可能波动值为 3。
```

示例 2：

```txt
输入：s = "abcde"
输出：0
解释：
s 中没有字母出现超过 1 次，所以 s 中每个子字符串的波动值都是 0。
```

---

提示：

- `1 <= s.length <= 10^4`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
