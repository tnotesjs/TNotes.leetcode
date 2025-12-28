# [0214. 最短回文串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0214.%20%E6%9C%80%E7%9F%AD%E5%9B%9E%E6%96%87%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-palindrome/)

给定一个字符串 `s`，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

> 回文 串是向前和向后读都相同的字符串。

---

示例 1：

```txt
输入：s = "aacecaaa"
输出："aaacecaaa"
```

示例 2：

```txt
输入：s = "abcd"
输出："dcbabcd"
```

---

提示：

- `0 <= s.length <= 5 * 10^4`
- `s` 仅由小写英文字母组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
