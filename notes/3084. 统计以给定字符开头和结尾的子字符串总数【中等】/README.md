# [3084. 统计以给定字符开头和结尾的子字符串总数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3084.%20%E7%BB%9F%E8%AE%A1%E4%BB%A5%E7%BB%99%E5%AE%9A%E5%AD%97%E7%AC%A6%E5%BC%80%E5%A4%B4%E5%92%8C%E7%BB%93%E5%B0%BE%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%80%BB%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-substrings-starting-and-ending-with-given-character/)

给你一个字符串 `s` 和一个字符 `c` 。返回在字符串 `s` 中并且以 `c` 字符开头和结尾的非空子字符串的总数。

---

- **示例 1：**
  - **输入：**s = "abada", c = "a"
  - **输出：**6
  - **解释：**以 `"a"` 开头和结尾的子字符串有： `"abada"`、`"abada"`、`"abada"`、`"abada"`、`"abada"`、`"abada"`。

---

- **示例 2：**
  - **输入：**s = "zzz", c = "z"
  - **输出：**6
  - **解释：**字符串 `s` 中总共有 `6` 个子字符串，并且它们都以 `"z"` 开头和结尾。

---

**提示：**

- `1 <= s.length <= 10^5`
- `s` 和 `c` 均由小写英文字母组成。

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
