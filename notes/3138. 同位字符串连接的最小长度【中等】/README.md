# [3138. 同位字符串连接的最小长度【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3138.%20%E5%90%8C%E4%BD%8D%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%9E%E6%8E%A5%E7%9A%84%E6%9C%80%E5%B0%8F%E9%95%BF%E5%BA%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-length-of-anagram-concatenation/)

给你一个字符串 `s` ，它由某个字符串 `t` 和若干 `t` 的 **同位字符串** 连接而成。

请你返回字符串 `t` 的 **最小** 可能长度。

**同位字符串** 指的是重新排列一个字符串的字母得到的另外一个字符串。例如，"aab"，"aba" 和 "baa" 是 "aab" 的同位字符串。

---

- **示例 1：**

**输入：** s = "abba"

**输出：** 2

**解释：**

一个可能的字符串 `t` 为 `"ba"` 。

---

- **示例 2：**

**输入：** s = "cdef"

**输出：** 4

**解释：**

一个可能的字符串 `t` 为 `"cdef"` ，注意 `t` 可能等于 `s` 。

---

- **示例 3：**

**输入：** s = "abcbcacabbaccba"

**输出：** 3

---

**提示：**

- `1 <= s.length <= 10^5`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
