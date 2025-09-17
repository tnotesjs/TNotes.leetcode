# [1163. 按字典序排在最后的子串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1163.%20%E6%8C%89%E5%AD%97%E5%85%B8%E5%BA%8F%E6%8E%92%E5%9C%A8%E6%9C%80%E5%90%8E%E7%9A%84%E5%AD%90%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/last-substring-in-lexicographical-order/)

给你一个字符串 `s` ，找出它的所有子串并按字典序排列，返回排在最后的那个子串。

---

- **示例 1：**

```txt
输入：s = "abab"
输出："bab"

解释：
我们可以找出 7 个子串 ["a", "ab", "aba", "abab", "b", "ba", "bab"]。
按字典序排在最后的子串是 "bab"。
```

**示例 2：**

```txt
输入：s = "leetcode"
输出："tcode"
```

---

**提示：**

- `1 <= s.length <= 4 * 10^5`
- `s` 仅含有小写英文字符。

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
