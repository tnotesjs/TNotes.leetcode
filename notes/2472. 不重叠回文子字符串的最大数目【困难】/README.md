# [2472. 不重叠回文子字符串的最大数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2472.%20%E4%B8%8D%E9%87%8D%E5%8F%A0%E5%9B%9E%E6%96%87%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings/)

给你一个字符串 `s` 和一个 正 整数 `k`。

从字符串 `s` 中选出一组满足下述条件且 不重叠 的子字符串：

- 每个子字符串的长度 至少 为 `k`。
- 每个子字符串是一个 回文串。

返回最优方案中能选择的子字符串的 最大 数目。

子字符串 是字符串中一个连续的字符序列。

---

示例 1 ：

```txt
输入：s = "abaccdbbd", k = 3
输出：2
解释：可以选择 s = "abaccdbbd" 中斜体加粗的子字符串。"aba" 和 "dbbd" 都是回文，且长度至少为 k = 3。
可以证明，无法选出两个以上的有效子字符串。
```

---

示例 2 ：

```txt
输入：s = "adbcda", k = 2
输出：0
解释：字符串中不存在长度至少为 2 的回文子字符串。
```

---

提示：

- `1 <= k <= s.length <= 2000`
- `s` 仅由小写英文字母组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
