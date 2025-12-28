# [0132. 分割回文串 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0132.%20%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/palindrome-partitioning-ii/)

给你一个字符串 `s`，请你将 `s` 分割成一些子串，使每个子串都是回文串。

> 回文 串是向前和向后读都相同的字符串。

返回符合要求的 最少分割次数。

---

示例 1：

```txt
输入：s = "aab"
输出：1
解释：只需一次分割就可将s 分割成 ["aa","b"] 这样两个回文子串。
```

示例 2：

```txt
输入：s = "a"
输出：0
```

示例 3：

```txt
输入：s = "ab"
输出：1
```

---

提示：

- `1 <= s.length <= 2000`
- `s` 仅由小写英文字母组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
