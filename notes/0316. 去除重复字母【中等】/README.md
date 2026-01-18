# [0316. 去除重复字母【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0316.%20%E5%8E%BB%E9%99%A4%E9%87%8D%E5%A4%8D%E5%AD%97%E6%AF%8D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-duplicate-letters/)

给你一个字符串 `s` ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

> 字典序更小
>
> 考虑字符串 a 与 字符串 b，如果字符串 a 在 a 与 b 相异的第一处的字符在字母表上先于对应 b 在此处的字符出现，则称字符串 a 字典序小于 b。如果 a 或 b 其中较短的字符串为另一个字符串的前半部分，则较短的字符串字典序小于另一个字符串。

---

示例 1：

```txt
输入：s = "bcabc"
输出："abc"
```

示例 2：

```txt
输入：s = "cbacdcbc"
输出："acdb"
```

---

提示：

- `1 <= s.length <= 10^4`
- `s` 由小写英文字母组成

---

注意：该题与 [1081. 不同字符的最小子序列][1] 相同

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [1081. 不同字符的最小子序列][1]

[1]: https://leetcode.cn/problems/smallest-subsequence-of-distinct-characters/
