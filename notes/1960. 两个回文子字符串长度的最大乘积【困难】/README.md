# [1960. 两个回文子字符串长度的最大乘积【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1960.%20%E4%B8%A4%E4%B8%AA%E5%9B%9E%E6%96%87%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6%E7%9A%84%E6%9C%80%E5%A4%A7%E4%B9%98%E7%A7%AF%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-product-of-the-length-of-two-palindromic-substrings/)

给你一个下标从 0 开始的字符串 `s` ，你需要找到两个 不重叠的回文 子字符串，它们的长度都必须为 奇数 ，使得它们长度的乘积最大。

更正式地，你想要选择四个整数 `i` ，`j` ，`k` ，`l` ，使得 `0 <= i <= j < k <= l < s.length` ，且子字符串 `s[i...j]` 和 `s[k...l]` 都是回文串且长度为奇数。`s[i...j]` 表示下标从 `i` 到 `j` 且 包含 两端下标的子字符串。

请你返回两个不重叠回文子字符串长度的 最大 乘积。

回文字符串 指的是一个从前往后读和从后往前读一模一样的字符串。子字符串 指的是一个字符串中一段连续字符。

---

- 示例 1：

```txt
输入：s = "ababbb"
输出：9
解释：子字符串 "aba" 和 "bbb" 为奇数长度的回文串。乘积为 3 * 3 = 9。
```

- 示例 2：

```txt
输入：s = "zaaaxbbby"
输出：9
解释：子字符串 "aaa" 和 "bbb" 为奇数长度的回文串。乘积为 3 * 3 = 9。
```

---

提示：

- `2 <= s.length <= 10^5`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
