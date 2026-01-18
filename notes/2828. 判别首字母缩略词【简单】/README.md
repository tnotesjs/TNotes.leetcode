# [2828. 判别首字母缩略词【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2828.%20%E5%88%A4%E5%88%AB%E9%A6%96%E5%AD%97%E6%AF%8D%E7%BC%A9%E7%95%A5%E8%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 遍历比较](#2--s1---遍历比较)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-a-string-is-an-acronym-of-words/)

给你一个字符串数组 `words` 和一个字符串 `s`，请你判断 `s` 是不是 `words` 的首字母缩略词。

如果可以按顺序串联 `words` 中每个字符串的第一个字符形成字符串 `s`，则认为 `s` 是 `words` 的首字母缩略词。例如，`"ab"` 可以由 `["apple", "banana"]` 形成，但是无法从 `["bear", "aardvark"]` 形成。

如果 `s` 是 `words` 的首字母缩略词，返回 `true`；否则，返回 `false`。

---

示例 1：

```txt
输入：words = ["alice","bob","charlie"], s = "abc"
输出：true

解释：
words 中 "alice"、"bob" 和 "charlie" 的第一个字符分别是 'a'、'b' 和 'c'。
因此，s = "abc" 是首字母缩略词。
```

---

示例 2：

```txt
输入：words = ["an","apple"], s = "a"
输出：false

解释：
words 中 "an" 和 "apple" 的第一个字符分别是 'a' 和 'a'。
串联这些字符形成的首字母缩略词是 "aa"。
因此，s = "a" 不是首字母缩略词。
```

---

示例 3：

```txt
输入：words = ["never","gonna","give","up","on","you"], s = "ngguoy"
输出：true

解释：
串联数组 words 中每个字符串的第一个字符，得到字符串 "ngguoy"。
因此，s = "ngguoy" 是首字母缩略词。
```

---

提示：

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `1 <= s.length <= 100`
- `words[i]` 和 `s` 由小写英文字母组成

## 2. 🎯 s.1 - 遍历比较

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，n 是 words 数组的长度
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 首先检查 words 数组的长度是否等于字符串 s 的长度
- 如果长度不匹配，直接返回 false
- 遍历 words 数组，检查每个单词的首字母是否等于 s 中对应位置的字符
- 如果所有首字母都匹配，返回 true，否则返回 false
