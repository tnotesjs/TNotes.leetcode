# [2182. 构造限制重复的字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2182.%20%E6%9E%84%E9%80%A0%E9%99%90%E5%88%B6%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-string-with-repeat-limit/)

给你一个字符串 `s` 和一个整数 `repeatLimit` ，用 `s` 中的字符构造一个新字符串 `repeatLimitedString` ，使任何字母 **连续** 出现的次数都不超过 `repeatLimit` 次。你不必使用 `s` 中的全部字符。

返回 **字典序最大的** `repeatLimitedString` 。

如果在字符串 `a` 和 `b` 不同的第一个位置，字符串 `a` 中的字母在字母表中出现时间比字符串 `b` 对应的字母晚，则认为字符串 `a` 比字符串 `b` **字典序更大** 。如果字符串中前 `min(a.length, b.length)` 个字符都相同，那么较长的字符串字典序更大。

---

- **示例 1：**

```txt
输入：s = "cczazcc", repeatLimit = 3
输出："zzcccac"
解释：使用 s 中的所有字符来构造 repeatLimitedString "zzcccac"。
字母 'a' 连续出现至多 1 次。
字母 'c' 连续出现至多 3 次。
字母 'z' 连续出现至多 2 次。
因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString 。
该字符串是字典序最大的 repeatLimitedString ，所以返回 "zzcccac" 。
注意，尽管 "zzcccca" 字典序更大，但字母 'c' 连续出现超过 3 次，所以它不是一个有效的 repeatLimitedString 。
```

- **示例 2：**

```txt
输入：s = "aababab", repeatLimit = 2
输出："bbabaa"
解释：
使用 s 中的一些字符来构造 repeatLimitedString "bbabaa"。
字母 'a' 连续出现至多 2 次。
字母 'b' 连续出现至多 2 次。
因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString 。
该字符串是字典序最大的 repeatLimitedString ，所以返回 "bbabaa" 。
注意，尽管 "bbabaaa" 字典序更大，但字母 'a' 连续出现超过 2 次，所以它不是一个有效的 repeatLimitedString 。
```

---

**提示：**

- `1 <= repeatLimit <= s.length <= 10^5`
- `s` 由小写英文字母组成

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
