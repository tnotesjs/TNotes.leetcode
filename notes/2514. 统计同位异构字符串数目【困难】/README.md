# [2514. 统计同位异构字符串数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2514.%20%E7%BB%9F%E8%AE%A1%E5%90%8C%E4%BD%8D%E5%BC%82%E6%9E%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-anagrams/)

给你一个字符串 `s`，它包含一个或者多个单词。单词之间用单个空格 `' '` 隔开。

如果字符串 `t` 中第 `i` 个单词是 `s` 中第 `i` 个单词的一个 排列，那么我们称字符串 `t` 是字符串 `s` 的同位异构字符串。

- 比方说，`"acb dfe"` 是 `"abc def"` 的同位异构字符串，但是 `"def cab"` 和 `"adc bef"` 不是。

请你返回 `s` 的同位异构字符串的数目，由于答案可能很大，请你将它对 `10^9 + 7` 取余 后返回。

---

示例 1：

```txt
输入：s = "too hot"
输出：18
解释：输入字符串的一些同位异构字符串为 "too hot"，"oot hot"，"oto toh"，"too toh" 以及 "too oht"。
```

示例 2：

```txt
输入：s = "aa"
输出：1
解释：输入字符串只有一个同位异构字符串。
```

---

提示：

- `1 <= s.length <= 10^5`
- `s` 只包含小写英文字母和空格 `' '`。
- 相邻单词之间由单个空格隔开。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
