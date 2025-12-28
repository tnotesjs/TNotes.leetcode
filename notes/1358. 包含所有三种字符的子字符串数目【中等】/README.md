# [1358. 包含所有三种字符的子字符串数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1358.%20%E5%8C%85%E5%90%AB%E6%89%80%E6%9C%89%E4%B8%89%E7%A7%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/)

给你一个字符串 `s` ，它只包含三种字符 a, b 和 c。

请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。

---

- 示例 1：

```txt
输入：s = "abcabc"
输出：10
解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。
```

- 示例 2：

```txt
输入：s = "aaacb"
输出：3
解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb"。
```

- 示例 3：

```txt
输入：s = "abc"
输出：1
```

---

提示：

- `3 <= s.length <= 5 x 10^4`
- `s` 只包含字符 a，b 和 c。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
