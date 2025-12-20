# [2255. 统计是给定字符串前缀的字符串数目【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2255.%20%E7%BB%9F%E8%AE%A1%E6%98%AF%E7%BB%99%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%89%8D%E7%BC%80%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%9B%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-prefixes-of-a-given-string/)

给你一个字符串数组 `words` 和一个字符串 `s` ，其中 `words[i]` 和 `s` 只包含 小写英文字母 。

请你返回 `words` 中是字符串 `s` 前缀 的 字符串数目 。

一个字符串的 前缀 是出现在字符串开头的子字符串。子字符串 是一个字符串中的连续一段字符序列。

---

- 示例 1：

```txt
输入：words = ["a","b","c","ab","bc","abc"], s = "abc"
输出：3
解释：
words 中是 s = "abc" 前缀的字符串为：
"a" ，"ab" 和 "abc" 。
所以 words 中是字符串 s 前缀的字符串数目为 3 。
```

- 示例 2：

```txt
输入：words = ["a","a"], s = "aa"
输出：2
解释：
两个字符串都是 s 的前缀。
注意，相同的字符串可能在 words 中出现多次，它们应该被计数多次。
```

---

提示：

- `1 <= words.length <= 1000`
- `1 <= words[i].length, s.length <= 10`
- `words[i]` 和 `s` 只 包含小写英文字母。

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
