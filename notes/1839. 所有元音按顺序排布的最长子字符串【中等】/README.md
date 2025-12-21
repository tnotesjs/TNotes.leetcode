# [1839. 所有元音按顺序排布的最长子字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1839.%20%E6%89%80%E6%9C%89%E5%85%83%E9%9F%B3%E6%8C%89%E9%A1%BA%E5%BA%8F%E6%8E%92%E5%B8%83%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-substring-of-all-vowels-in-order/)

当一个字符串满足如下条件时，我们称它是 美丽的 ：

- 所有 5 个英文元音字母（`'a'` ，`'e'` ，`'i'` ，`'o'` ，`'u'`）都必须 至少 出现一次。
- 这些元音字母的顺序都必须按照 字典序 升序排布（也就是说所有的 `'a'` 都在 `'e'` 前面，所有的 `'e'` 都在 `'i'` 前面，以此类推）

比方说，字符串 `"aeiou"` 和 `"aaaaaaeiiiioou"` 都是 美丽的 ，但是 `"uaeio"` ，`"aeoiu"` 和 `"aaaeeeooo"` 不是美丽的 。

给你一个只包含英文元音字母的字符串 `word` ，请你返回 `word` 中 最长美丽子字符串的长度 。如果不存在这样的子字符串，请返回 `0` 。

子字符串 是字符串中一个连续的字符序列。

---

- 示例 1：

```txt
输入：word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
输出：13
解释：最长子字符串是 "aaaaeiiiiouuu" ，长度为 13 。
```

- 示例 2：

```txt
输入：word = "aeeeiiiioooauuuaeiou"
输出：5
解释：最长子字符串是 "aeiou" ，长度为 5 。
```

- 示例 3：

```txt
输入：word = "a"
输出：0
解释：没有美丽子字符串，所以返回 0 。
```

---

提示：

- `1 <= word.length <= 5 * 10^5`
- `word` 只包含字符 `'a'`，`'e'`，`'i'`，`'o'` 和 `'u'` 。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
