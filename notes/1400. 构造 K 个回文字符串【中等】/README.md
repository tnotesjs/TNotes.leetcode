# [1400. 构造 K 个回文字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1400.%20%E6%9E%84%E9%80%A0%20K%20%E4%B8%AA%E5%9B%9E%E6%96%87%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-k-palindrome-strings/)

给你一个字符串 `s` 和一个整数 `k` 。请你用 `s` 字符串中 所有字符 构造 `k` 个非空 回文串 。

> 回文 串是向前和向后读都相同的字符串。

如果你可以用 `s` 中所有字符构造 `k` 个回文字符串，那么请你返回 True ，否则返回 False 。

---

- 示例 1：

```txt
输入：s = "annabelle", k = 2
输出：true
解释：可以用 s 中所有字符构造 2 个回文字符串。
一些可行的构造方案包括："anna" + "elble"，"anbna" + "elle"，"anellena" + "b"
```

- 示例 2：

```txt
输入：s = "leetcode", k = 3
输出：false
解释：无法用 s 中所有字符构造 3 个回文串。
```

- 示例 3：

```txt
输入：s = "true", k = 4
输出：true
解释：唯一可行的方案是让 s 中每个字符单独构成一个字符串。
```

---

提示：

- `1 <= s.length <= 10^5`
- `s` 中所有字符都是小写英文字母。
- `1 <= k <= 10^5`

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
