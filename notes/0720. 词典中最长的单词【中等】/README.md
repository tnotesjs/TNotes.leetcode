# [0720. 词典中最长的单词【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0720.%20%E8%AF%8D%E5%85%B8%E4%B8%AD%E6%9C%80%E9%95%BF%E7%9A%84%E5%8D%95%E8%AF%8D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 哈希集合](#2--s1---排序--哈希集合)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-word-in-dictionary/)

给出一个字符串数组 `words` 组成的一本英语词典。返回能够通过 `words` 中其它单词逐步添加一个字母来构造得到的 `words` 中最长的单词。

若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

请注意，单词应该从左到右构建，每个额外的字符都添加到前一个单词的结尾。

---

示例 1：

```txt
输入：words = ["w","wo","wor","worl", "world"]
输出："world"
解释：单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。
```

示例 2：

```txt
输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出："apple"
解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply"
```

---

提示：

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 30`
- 所有输入的字符串 `words[i]` 都只包含小写字母。

## 2. 🎯 s.1 - 排序 + 哈希集合

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times l \times \log n)$，其中 n 是单词数，l 是单词平均长度
- 空间复杂度：$O(n \times l)$

算法思路：

- 对单词字典序排序，保证短单词先被处理
- 维护哈希集合存储可逐步构建的单词
- 若当前单词去掉最后一个字符后在集合中，则加入集合并更新答案
