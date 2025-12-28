# [1297. 子串的最大出现次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1297.%20%E5%AD%90%E4%B8%B2%E7%9A%84%E6%9C%80%E5%A4%A7%E5%87%BA%E7%8E%B0%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-occurrences-of-a-substring/)

给你一个字符串 `s` ，请你返回满足以下条件且出现次数最大的 任意 子串的出现次数：

- 子串中不同字母的数目必须小于等于 `maxLetters`。
- 子串的长度必须大于等于 `minSize` 且小于等于 `maxSize`。

---

- 示例 1：

```txt
输入：s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
输出：2
解释：子串 "aab" 在原字符串中出现了 2 次。
它满足所有的要求：2 个不同的字母，长度为 3 （在 minSize 和 maxSize 范围内）。
```

- 示例 2：

```txt
输入：s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
输出：2
解释：子串 "aaa" 在原字符串中出现了 2 次，且它们有重叠部分。
```

- 示例 3：

```txt
输入：s = "aabcabcab", maxLetters = 2, minSize = 2, maxSize = 3
输出：3
```

- 示例 4：

```txt
输入：s = "abcde", maxLetters = 2, minSize = 3, maxSize = 3
输出：0
```

---

提示：

- `1 <= s.length <= 10^5`
- `1 <= maxLetters <= 26`
- `1 <= minSize <= maxSize <= min(26, s.length)`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
