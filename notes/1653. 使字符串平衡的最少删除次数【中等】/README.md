# [1653. 使字符串平衡的最少删除次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1653.%20%E4%BD%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%B9%B3%E8%A1%A1%E7%9A%84%E6%9C%80%E5%B0%91%E5%88%A0%E9%99%A4%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced/)

给你一个字符串 `s` ，它仅包含字符 `'a'` 和 `'b'`​​​​ 。

你可以删除 `s` 中任意数目的字符，使得 `s` 平衡 。当不存在下标对 `(i,j)` 满足 `i < j` ，且 `s[i] = 'b'` 的同时 `s[j]= 'a'` ，此时认为 `s` 是 平衡 的。

请你返回使 `s` 平衡 的 最少 删除次数。

---

- 示例 1：

```txt
输入：s = "aababbab"
输出：2
解释：你可以选择以下任意一种方案：
下标从 0 开始，删除第 2 和第 6 个字符（"aababbab" -> "aaabbb"），
下标从 0 开始，删除第 3 和第 6 个字符（"aababbab" -> "aabbbb"）。
```

- 示例 2：

```txt
输入：s = "bbaaaaabb"
输出：2
解释：唯一的最优解是删除最前面两个字符。
```

---

提示：

- `1 <= s.length <= 10^5`
- `s[i]` 要么是 `'a'` 要么是 `'b'`​ 。​

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
