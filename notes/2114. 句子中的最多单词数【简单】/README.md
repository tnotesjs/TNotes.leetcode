# [2114. 句子中的最多单词数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2114.%20%E5%8F%A5%E5%AD%90%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%9A%E5%8D%95%E8%AF%8D%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/maximum-number-of-words-found-in-sentences/)

一个 **句子**  由一些 **单词**  以及它们之间的单个空格组成，句子的开头和结尾不会有多余空格。

给你一个字符串数组  `sentences` ，其中  `sentences[i]`  表示单个 **句子** 。

请你返回单个句子里 **单词的最多数目** 。

---

- **示例 1：**

```
输入：sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
输出：6
解释：
- 第一个句子 "alice and bob love leetcode" 总共有 5 个单词。
- 第二个句子 "i think so too" 总共有 4 个单词。
- 第三个句子 "this is great thanks very much" 总共有 6 个单词。
所以，单个句子中有最多单词数的是第三个句子，总共有 6 个单词。
```

- **示例 2：**

```
输入：sentences = ["please wait", "continue to fight", "continue to win"]
输出：3
解释：可能有多个句子有相同单词数。
这个例子中，第二个句子和第三个句子（加粗斜体）有相同数目的单词数。
```

---

**提示：**

- `1 <= sentences.length <= 100`
- `1 <= sentences[i].length <= 100`
- `sentences[i]`  只包含小写英文字母和  `' '` 。
- `sentences[i]`  的开头和结尾都没有空格。
- `sentences[i]`  中所有单词由单个空格隔开。

:::

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
