# [0318. 最大单词长度乘积【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0318.%20%E6%9C%80%E5%A4%A7%E5%8D%95%E8%AF%8D%E9%95%BF%E5%BA%A6%E4%B9%98%E7%A7%AF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-product-of-word-lengths/)

给你一个字符串数组 `words` ，找出并返回 `length(words[i]) * length(words[j])` 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 `0`。

示例 1：

```txt
输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
输出：16
解释：这两个单词为 "abcw", "xtfn"。
```

示例 2：

```txt
输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
输出：4
解释：这两个单词为 "ab", "cd"。
```

示例 3：

```txt
输入：words = ["a","aa","aaa","aaaa"]
输出：0
解释：不存在这样的两个单词。
```

---

提示：

- `2 <= words.length <= 1000`
- `1 <= words[i].length <= 1000`
- `words[i]` 仅包含小写字母

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
