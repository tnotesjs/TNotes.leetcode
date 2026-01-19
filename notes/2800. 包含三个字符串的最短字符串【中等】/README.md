# [2800. 包含三个字符串的最短字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2800.%20%E5%8C%85%E5%90%AB%E4%B8%89%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E7%9F%AD%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-string-that-contains-three-strings/)

给你三个字符串 `a`，`b` 和 `c`， 你的任务是找到长度 最短 的字符串，且这三个字符串都是它的 子字符串。

如果有多个这样的字符串，请你返回 字典序最小 的一个。

请你返回满足题目要求的字符串。

注意：

- 两个长度相同的字符串 `a` 和 `b`，如果在第一个不相同的字符处，`a` 的字母在字母表中比 `b` 的字母 靠前，那么字符串 `a` 比字符串 `b` 字典序小。
- 子字符串 是一个字符串中一段连续的字符序列。

---

示例 1：

```txt
输入：a = "abc", b = "bca", c = "aaa"
输出："aaabca"

解释：
字符串 "aaabca" 包含所有三个字符串：a = ans[2...4]，b = ans[3..5]，c = ans[0..2]。
结果字符串的长度至少为 6，且"aaabca" 是字典序最小的一个。
```

示例 2：

```txt
输入：a = "ab", b = "ba", c = "aba"
输出："aba"

解释：
字符串 "aba" 包含所有三个字符串：a = ans[0..1]，b = ans[1..2]，c = ans[0..2]。
由于 c 的长度为 3，结果字符串的长度至少为 3。"aba" 是字典序最小的一个。
```

---

提示：

- `1 <= a.length, b.length, c.length <= 100`
- `a`，`b`，`c` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
