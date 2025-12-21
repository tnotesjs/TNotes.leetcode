# [1316. 不同的循环子字符串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1316.%20%E4%B8%8D%E5%90%8C%E7%9A%84%E5%BE%AA%E7%8E%AF%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/distinct-echo-substrings/)

给你一个字符串 `text` ，请你返回满足下述条件的 不同 非空子字符串的数目：

- 可以写成某个字符串与其自身相连接的形式（即，可以写为 `a + a`，其中 `a` 是某个字符串）。

例如，`abcabc` 就是 `abc` 和它自身连接形成的。

---

- 示例 1：

```txt
输入：text = "abcabcabc"
输出：3
解释：3 个子字符串分别为 "abcabc"，"bcabca" 和 "cabcab" 。
```

- 示例 2：

```txt
输入：text = "leetcodeleetcode"
输出：2
解释：2 个子字符串为 "ee" 和 "leetcodeleetcode" 。
```

---

提示：

- `1 <= text.length <= 2000`
- `text` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
