# [0131. 分割回文串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0131.%20%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/palindrome-partitioning/)

给你一个字符串 `s`，请你将 `s` 分割成一些 子串，使每个子串都是 回文串 。返回 `s` 所有可能的分割方案。

> - 子字符串 是字符串中连续的 非空 字符序列。
> - 回文 串是向前和向后读都相同的字符串。

---

- 示例 1：

```txt
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
```

- 示例 2：

```txt
输入：s = "a"
输出：[["a"]]
```

---

提示：

- `1 <= s.length <= 16`
- `s` 仅由小写英文字母组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
