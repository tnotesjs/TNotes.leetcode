# [1910. 删除一个字符串中所有出现的给定子字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1910.%20%E5%88%A0%E9%99%A4%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E6%89%80%E6%9C%89%E5%87%BA%E7%8E%B0%E7%9A%84%E7%BB%99%E5%AE%9A%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-all-occurrences-of-a-substring/)

给你两个字符串  `s`  和  `part` ，请你对  `s`  反复执行以下操作直到 **所有**  子字符串  `part`  都被删除：

- 找到 `s`  中 **最左边**  的子字符串 `part` ，并将它从 `s`  中删除。

请你返回从 `s`  中删除所有 `part`  子字符串以后得到的剩余字符串。

一个 **子字符串**  是一个字符串中连续的字符序列。

---

- **示例 1：**

```txt
输入：s = "daabcbaabcbc", part = "abc"
输出："dab"
解释：以下操作按顺序执行：
- s = "daabcbaabcbc" ，删除下标从 2 开始的 "abc" ，得到 s = "dabaabcbc" 。
- s = "dabaabcbc" ，删除下标从 4 开始的 "abc" ，得到 s = "dababc" 。
- s = "dababc" ，删除下标从 3 开始的 "abc" ，得到 s = "dab" 。
此时 s 中不再含有子字符串 "abc" 。
```

- **示例 2：**

```txt
输入：s = "axxxxyyyyb", part = "xy"
输出："ab"
解释：以下操作按顺序执行：
- s = "axxxxyyyyb" ，删除下标从 4 开始的 "xy" ，得到 s = "axxxyyyb" 。
- s = "axxxyyyb" ，删除下标从 3 开始的 "xy" ，得到 s = "axxyyb" 。
- s = "axxyyb" ，删除下标从 2 开始的 "xy" ，得到 s = "axyb" 。
- s = "axyb" ，删除下标从 1 开始的 "xy" ，得到 s = "ab" 。
此时 s 中不再含有子字符串 "xy" 。
```

---

**提示：**

- `1 <= s.length <= 1000`
- `1 <= part.length <= 1000`
- `s`​​​​​​ 和  `part`  只包小写英文字母。

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
