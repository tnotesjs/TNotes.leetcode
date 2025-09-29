# [3303. 第一个几乎相等子字符串的下标【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3303.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%87%A0%E4%B9%8E%E7%9B%B8%E7%AD%89%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E4%B8%8B%E6%A0%87%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-occurrence-of-first-almost-equal-substring/)

给你两个字符串 `s` 和 `pattern` 。

如果一个字符串 `x` 修改 **至多** 一个字符会变成 `y` ，那么我们称它与 `y` **几乎相等** 。

请你返回 `s` 中下标 **最小** 的 子字符串 ，它与 `pattern` **几乎相等** 。如果不存在，返回 `-1` 。

> - 子字符串 是字符串中连续的 非空 字符序列。

**子字符串** 是字符串中的一个 **非空**、连续的字符序列。

---

- **示例 1：**

**输入：** s = "abcdefg", pattern = "bcdffg"

**输出：** 1

**解释：**

将子字符串 `s[1..6] == "bcdefg"` 中 `s[4]` 变为 `"f"` ，得到 `"bcdffg"` 。

---

- **示例 2：**

**输入：** s = "ababbababa", pattern = "bacaba"

**输出：** 4

**解释：**

将子字符串 `s[4..9] == "bababa"` 中 `s[6]` 变为 `"c"` ，得到 `"bacaba"` 。

---

- **示例 3：**

**输入：** s = "abcd", pattern = "dba"

**输出：** -1

---

- **示例 4：**

**输入：** s = "dde", pattern = "d"

**输出：** 0

---

**提示：**

- `1 <= pattern.length < s.length <= 10^5`
- `s` 和 `pattern` 都只包含小写英文字母。

**进阶：**如果题目变为 **至多** `k` 个 **连续** 字符可以被修改，你可以想出解法吗？

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
