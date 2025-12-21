# [3305. 元音辅音字符串计数 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3305.%20%E5%85%83%E9%9F%B3%E8%BE%85%E9%9F%B3%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%AE%A1%E6%95%B0%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/)

给你一个字符串 `word` 和一个 非负 整数 `k`。

返回 `word` 的 子字符串 中，每个元音字母（`'a'`、`'e'`、`'i'`、`'o'`、`'u'`）至少 出现一次，并且 恰好 包含 `k` 个辅音字母的子字符串的总数。

> - 子字符串 是字符串中连续的 非空 字符序列。

---

- 示例 1：

输入： word = "aeioqq", k = 1

输出： 0

解释：

不存在包含所有元音字母的子字符串。

---

- 示例 2：

输入： word = "aeiou", k = 0

输出： 1

解释：

唯一一个包含所有元音字母且不含辅音字母的子字符串是 `word[0..4]`，即 `"aeiou"`。

---

- 示例 3：

输入： word = "ieaouqqieaouqq", k = 1

输出： 3

解释：

包含所有元音字母并且恰好含有一个辅音字母的子字符串有：

- `word[0..5]`，即 `"ieaouq"`。
- `word[6..11]`，即 `"qieaou"`。
- `word[7..12]`，即 `"ieaouq"`。

---

提示：

- `5 <= word.length <= 250`
- `word` 仅由小写英文字母组成。
- `0 <= k <= word.length - 5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
