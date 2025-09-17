# [1016. 子串能表示从 1 到 N 数字的二进制串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1016.%20%E5%AD%90%E4%B8%B2%E8%83%BD%E8%A1%A8%E7%A4%BA%E4%BB%8E%201%20%E5%88%B0%20N%20%E6%95%B0%E5%AD%97%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-string-with-substrings-representing-1-to-n/)

给定一个二进制字符串  `s`  和一个正整数  `n`，如果对于  `[1, n]`  范围内的每个整数，*其二进制表示都是  `s` 的 **子字符串** ，就返回 `true`，否则返回 `false`* 。

**子字符串**  是字符串中连续的字符序列。

---

- **示例 1：**

```txt
输入：s = "0110", n = 3
输出：true
```

- **示例 2：**

```txt
输入：s = "0110", n = 4
输出：false
```

---

**提示：**

- `1 <= s.length <= 1000`
- `s[i]`  不是  `'0'`  就是  `'1'`
- `1 <= n <= 10^9`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
