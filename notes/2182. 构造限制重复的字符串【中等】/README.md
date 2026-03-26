# [2182. 构造限制重复的字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2182.%20%E6%9E%84%E9%80%A0%E9%99%90%E5%88%B6%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-string-with-repeat-limit/)

给你一个字符串 `s` 和一个整数 `repeatLimit`，用 `s` 中的字符构造一个新字符串 `repeatLimitedString`，使任何字母 连续 出现的次数都不超过 `repeatLimit` 次。你不必使用 `s` 中的全部字符。

返回 字典序最大的 `repeatLimitedString`。

如果在字符串 `a` 和 `b` 不同的第一个位置，字符串 `a` 中的字母在字母表中出现时间比字符串 `b` 对应的字母晚，则认为字符串 `a` 比字符串 `b` 字典序更大。如果字符串中前 `min(a.length, b.length)` 个字符都相同，那么较长的字符串字典序更大。

---

示例 1：

```txt
输入：s = "cczazcc", repeatLimit = 3
输出："zzcccac"
解释：使用 s 中的所有字符来构造 repeatLimitedString "zzcccac"。
字母 'a' 连续出现至多 1 次。
字母 'c' 连续出现至多 3 次。
字母 'z' 连续出现至多 2 次。
因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString。
该字符串是字典序最大的 repeatLimitedString，所以返回 "zzcccac"。
注意，尽管 "zzcccca" 字典序更大，但字母 'c' 连续出现超过 3 次，所以它不是一个有效的 repeatLimitedString。
```

示例 2：

```txt
输入：s = "aababab", repeatLimit = 2
输出："bbabaa"
解释：
使用 s 中的一些字符来构造 repeatLimitedString "bbabaa"。
字母 'a' 连续出现至多 2 次。
字母 'b' 连续出现至多 2 次。
因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString。
该字符串是字典序最大的 repeatLimitedString，所以返回 "bbabaa"。
注意，尽管 "bbabaaa" 字典序更大，但字母 'a' 连续出现超过 2 次，所以它不是一个有效的 repeatLimitedString。
```

---

提示：

- `1 <= repeatLimit <= s.length <= 10^5`
- `s` 由小写英文字母组成

## 2. 🎯 s.1 - 贪心 + 频率统计

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + |\Sigma|)$，其中 $n$ 是字符串长度，$|\Sigma| = 26$
- 空间复杂度：$O(|\Sigma|)$，存储字符频率

算法思路：

- 统计各字符频率，从最大字符开始贪心构造
- 每次最多连续放 `repeatLimit` 个相同字符
- 若当前字符还有剩余，插入一个次大字符来打断连续，然后继续
