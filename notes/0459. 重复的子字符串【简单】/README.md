# [0459. 重复的子字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0459.%20%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/repeated-substring-pattern/)

给定一个非空的字符串  `s` ，检查是否可以通过由它的一个子串重复多次构成。

---

- **示例 1:**

```txt
输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
```

- **示例 2:**

```txt
输入: s = "aba"
输出: false
```

- **示例 3:**

```txt
输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
```

---

**提示：**

- `1 <= s.length <= 10^4`
- `s`  由小写英文字母组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
