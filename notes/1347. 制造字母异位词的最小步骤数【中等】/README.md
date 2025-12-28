# [1347. 制造字母异位词的最小步骤数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1347.%20%E5%88%B6%E9%80%A0%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E7%9A%84%E6%9C%80%E5%B0%8F%E6%AD%A5%E9%AA%A4%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-steps-to-make-two-strings-anagram/)

给你两个长度相等的字符串 `s` 和 `t`。每一个步骤中，你可以选择将 `t` 中的 任一字符 替换为 另一个字符。

返回使 `t` 成为 `s` 的字母异位词的最小步骤数。

字母异位词 指字母相同，但排列不同（也可能相同）的字符串。

---

示例 1：

```txt
输出：s = "bab", t = "aba"
输出：1
提示：用 'b' 替换 t 中的第一个 'a'，t = "bba" 是 s 的一个字母异位词。
```

示例 2：

```txt
输出：s = "leetcode", t = "practice"
输出：5
提示：用合适的字符替换 t 中的 'p', 'r', 'a', 'i' 和 'c'，使 t 变成 s 的字母异位词。
```

示例 3：

```txt
输出：s = "anagram", t = "mangaar"
输出：0
提示："anagram" 和 "mangaar" 本身就是一组字母异位词。
```

示例 4：

```txt
输出：s = "xxyyzz", t = "xxyyzz"
输出：0
```

示例 5：

```txt
输出：s = "friend", t = "family"
输出：4
```

---

提示：

- `1 <= s.length <= 50000`
- `s.length == t.length`
- `s` 和 `t` 只包含小写英文字母

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
