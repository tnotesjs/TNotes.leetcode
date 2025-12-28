# [1813. 句子相似性 III【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1813.%20%E5%8F%A5%E5%AD%90%E7%9B%B8%E4%BC%BC%E6%80%A7%20III%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sentence-similarity-iii/)

给定两个字符串 `sentence1` 和 `sentence2`，每个表示由一些单词组成的一个句子。句子是一系列由 单个 空格分隔的 单词，且开头和结尾没有多余空格。每个单词都只包含大写和小写英文字母。

如果两个句子 `s1` 和 `s2` ，可以通过往其中一个句子插入一个任意的句子（可以是空句子）而得到另一个句子，那么我们称这两个句子是 相似的。注意，插入的句子必须与现有单词用空白隔开。

比方说，

- `s1 = "Hello Jane"` 与 `s2 = "Hello my name is Jane"`，我们可以往 `s1` 中 `"Hello"` 和 `"Jane"` 之间插入 `"my name is"` 得到 `s2`。
- `s1 = "Frog cool"` 与 `s2 = "Frogs are cool"` 不是相似的，因为尽管往 `s1` 中插入 `"s are"`，它没有与 `"Frog"` 用空格隔开。

给你两个句子 `sentence1` 和 `sentence2` ，如果 `sentence1` 和 `sentence2` 是 相似 的，请你返回 `true` ，否则返回 `false`。

---

- 示例 1：

```txt
输入：sentence1 = "My name is Haley", sentence2 = "My Haley"
输出：true
解释：可以往 `sentence2` 中 "My" 和 "Haley" 之间插入 "name is" ，得到 `sentence1`。
```

- 示例 2：

```txt
输入：sentence1 = "of", sentence2 = "A lot of words"
输出：false
解释：没法往这两个句子中的一个句子只插入一个句子就得到另一个句子。
```

- 示例 3：

```txt
输入：sentence1 = "Eating right now", sentence2 = "Eating"
输出：true
解释：可以往 `sentence2` 的结尾插入 "right now" 得到 `sentence1`。
```

---

提示：

- `1 <= sentence1.length, sentence2.length <= 100`
- `sentence1` 和 `sentence2` 都只包含大小写英文字母和空格。
- `sentence1` 和 `sentence2` 中的单词都只由单个空格隔开。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
