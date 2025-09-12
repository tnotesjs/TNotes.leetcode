# [0567. 字符串的排列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0567.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%8E%92%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/permutation-in-string/)

给你两个字符串  `s1`  和  `s2` ，写一个函数来判断 `s2` 是否包含 `s1`  的 排列。如果是，返回 `true` ；否则，返回 `false` 。

> 排列是字符串中所有字符的重新排序。

换句话说，`s1` 的排列之一是 `s2` 的 **子串** 。

---

- **示例 1：**

```txt
输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").
```

- **示例 2：**

```txt
输入：s1= "ab" s2 = "eidboaoo"
输出：false
```

---

**提示：**

- `1 <= s1.length, s2.length <= 10^4`
- `s1` 和 `s2` 仅包含小写字母

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
