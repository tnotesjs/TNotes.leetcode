# [0524. 通过删除字母匹配到字典里最长单词【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0524.%20%E9%80%9A%E8%BF%87%E5%88%A0%E9%99%A4%E5%AD%97%E6%AF%8D%E5%8C%B9%E9%85%8D%E5%88%B0%E5%AD%97%E5%85%B8%E9%87%8C%E6%9C%80%E9%95%BF%E5%8D%95%E8%AF%8D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/)

给你一个字符串 `s` 和一个字符串数组 `dictionary`，找出并返回 `dictionary` 中最长的字符串，该字符串可以通过删除 `s` 中的某些字符得到。

如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

---

示例 1：

```txt
输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
输出："apple"
```

示例 2：

```txt
输入：s = "abpcplea", dictionary = ["a","b","c"]
输出："a"
```

---

提示：

- `1 <= s.length <= 1000`
- `1 <= dictionary.length <= 1000`
- `1 <= dictionary[i].length <= 1000`
- `s` 和 `dictionary[i]` 仅由小写英文字母组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
