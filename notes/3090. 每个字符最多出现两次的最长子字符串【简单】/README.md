# [3090. 每个字符最多出现两次的最长子字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3090.%20%E6%AF%8F%E4%B8%AA%E5%AD%97%E7%AC%A6%E6%9C%80%E5%A4%9A%E5%87%BA%E7%8E%B0%E4%B8%A4%E6%AC%A1%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-length-substring-with-two-occurrences/)

给你一个字符串 `s` ，请找出满足每个字符最多出现两次的最长子字符串，并返回该子字符串的 **最大** 长度。

> 子字符串 是字符串中连续的字符序列。

---

- **示例 1：**
  - **输入：** s = "bcbbbcba"
  - **输出：** 4
  - **解释：** 以下子字符串长度为 4，并且每个字符最多出现两次：`"bcbbbcba"`。

---

- **示例 2：**
  - **输入：** s = "aaaa"
  - **输出：** 2
  - **解释：** 以下子字符串长度为 2，并且每个字符最多出现两次：`"aaaa"`。

---

**提示：**

- `2 <= s.length <= 100`
- `s` 仅由小写英文字母组成。

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
