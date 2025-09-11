# [0140. 单词拆分 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0140.%20%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/word-break-ii/)

给定一个字符串 `s` 和一个字符串字典 `wordDict`，在字符串 `s` 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。**以任意顺序** 返回所有这些可能的句子。

---

**注意：** 词典中的同一个单词可能在分段中被重复使用多次。

---

- **示例 1：**

```txt
输入:s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
输出:["cats and dog","cat sand dog"]
```

- **示例 2：**

```txt
输入:s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
输出:["pine apple pen apple","pineapple pen apple","pine applepen apple"]
解释: 注意你可以重复使用字典中的单词。
```

**示例 3：**

```txt
输入:s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
输出:[]
```

---

**提示：**

- `1 <= s.length <= 20`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 10`
- `s` 和 `wordDict[i]` 仅有小写英文字母组成
- `wordDict` 中所有字符串都 **不同**

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
