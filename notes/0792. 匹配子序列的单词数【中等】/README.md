# [0792. 匹配子序列的单词数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0792.%20%E5%8C%B9%E9%85%8D%E5%AD%90%E5%BA%8F%E5%88%97%E7%9A%84%E5%8D%95%E8%AF%8D%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-matching-subsequences/)

给定字符串 `s` 和字符串数组 `words`, 返回 `words[i]` 中是`s`的子序列的单词个数。

字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是 none)，而不改变其余字符的相对顺序。

- 例如， `“ace”` 是 `“abcde”` 的子序列。

---

示例 1：

```txt
输入: s = "abcde", words = ["a","bb","acd","ace"]
输出: 3
解释: 有三个是 s 的子序列的单词: "a", "acd", "ace"。
```

示例 2：

```txt
输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
输出: 2
```

---

提示：

- `1 <= s.length <= 5 * 10^4`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 50`
- `words[i]`和 s 都只由小写字母组成。

## 2. 🎯 s.1 - 桶分组

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + \sum|w_i|)$，其中 n 是 s 的长度，$\sum|w_i|$ 是所有单词长度之和
- 空间复杂度：$O(m)$，其中 m 是单词数量

算法思路：

- 将所有单词按当前等待匹配的字符分入 26 个桶中
- 遍历 s，每次取出对应桶中的单词，匹配一个字符后重新入桶或计数
