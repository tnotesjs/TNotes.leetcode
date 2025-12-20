# [1771. 由子序列构造的最长回文串的长度【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1771.%20%E7%94%B1%E5%AD%90%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E7%9A%84%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E4%B8%B2%E7%9A%84%E9%95%BF%E5%BA%A6%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximize-palindrome-length-from-subsequences/)

给你两个字符串 `word1` 和 `word2` ，请你按下述方法构造一个字符串：

- 从 `word1` 中选出某个 非空 子序列 `subsequence1` 。
- 从 `word2` 中选出某个 非空 子序列 `subsequence2` 。
- 连接两个子序列 `subsequence1 + subsequence2` ，得到字符串。

返回可按上述方法构造的最长 回文串 的 长度 。如果无法构造回文串，返回 `0` 。

字符串 `s` 的一个 子序列 是通过从 `s` 中删除一些（也可能不删除）字符而不更改其余字符的顺序生成的字符串。

回文串 是正着读和反着读结果一致的字符串。

---

- 示例 1：

```txt
输入：word1 = "cacb", word2 = "cbba"
输出：5
解释：从 word1 中选出 "ab" ，从 word2 中选出 "cba" ，得到回文串 "abcba" 。
```

- 示例 2：

```txt
输入：word1 = "ab", word2 = "ab"
输出：3
解释：从 word1 中选出 "ab" ，从 word2 中选出 "a" ，得到回文串 "aba" 。
```

- 示例 3：

```txt
输入：word1 = "aa", word2 = "bb"
输出：0
解释：无法按题面所述方法构造回文串，所以返回 0 。
```

---

提示：

- `1 <= word1.length, word2.length <= 1000`
- `word1` 和 `word2` 由小写英文字母组成

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
