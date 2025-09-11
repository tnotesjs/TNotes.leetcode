# [0336. 回文对【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0336.%20%E5%9B%9E%E6%96%87%E5%AF%B9%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/palindrome-pairs/)

给定一个由唯一字符串构成的 **0 索引**  数组 `words` 。

**回文对** 是一对整数 `(i, j)` ，满足以下条件：

- `0 <= i, j < words.length`，
- `i != j` ，并且
- `words[i] + words[j]`（两个字符串的连接）是一个回文串。

> 回文 串是向前和向后读都相同的字符串。

返回一个数组，它包含  `words` 中所有满足 **回文对** 条件的字符串。

你必须设计一个时间复杂度为 `O(sum of words[i].length)` 的算法。

---

- **示例 1：**

```txt
输入：words = ["abcd","dcba","lls","s","sssll"]
输出：[[0,1],[1,0],[3,2],[2,4]]
解释：可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
```

- **示例 2：**

```txt
输入：words = ["bat","tab","cat"]
输出：[[0,1],[1,0]]
解释：可拼接成的回文串为 ["battab","tabbat"]
```

- **示例 3：**

```txt
输入：words = ["a",""]
输出：[[0,1],[1,0]] 
```

---

**提示：**

- `1 <= words.length <= 5000`
- `0 <= words[i].length <= 300`
- `words[i]` 由小写英文字母组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
