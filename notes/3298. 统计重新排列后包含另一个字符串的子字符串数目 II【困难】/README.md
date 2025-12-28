# [3298. 统计重新排列后包含另一个字符串的子字符串数目 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3298.%20%E7%BB%9F%E8%AE%A1%E9%87%8D%E6%96%B0%E6%8E%92%E5%88%97%E5%90%8E%E5%8C%85%E5%90%AB%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%9B%AE%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/)

给你两个字符串 `word1` 和 `word2`。

如果一个字符串 `x` 重新排列后，`word2` 是重排字符串的 前缀 ，那么我们称字符串 `x` 是 合法的。

> - 前缀
> - 字符串的前缀是从字符串的开头开始并延伸到其中任意点的子串。

请你返回 `word1` 中 合法 子字符串 的数目。

> - 子字符串 是字符串中连续的 非空 字符序列。

注意 ，这个问题中的内存限制比其他题目要 小 ，所以你 必须 实现一个线性复杂度的解法。

---

示例 1：

输入： word1 = "bcca", word2 = "abc"

输出： 1

解释：

唯一合法的子字符串是 `"bcca"` ，可以重新排列得到 `"abcc"` ，`"abc"` 是它的前缀。

---

示例 2：

输入： word1 = "abcabc", word2 = "abc"

输出： 10

解释：

除了长度为 1 和 2 的所有子字符串都是合法的。

---

示例 3：

输入： word1 = "abcabc", word2 = "aaabc"

输出： 0

解释：

- `1 <= word1.length <= 10^6`
- `1 <= word2.length <= 10^4`
- `word1` 和 `word2` 都只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
