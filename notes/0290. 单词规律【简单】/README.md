# [0290. 单词规律【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0290.%20%E5%8D%95%E8%AF%8D%E8%A7%84%E5%BE%8B%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/word-pattern/)

给定一种规律 `pattern` 和一个字符串 `s` ，判断 `s` 是否遵循相同的规律。

这里的 **遵循** 指完全匹配，例如， `pattern` 里的每个字母和字符串 `s` 中的每个非空单词之间存在着双向连接的对应规律。

**示例 1:**

```txt
输入: pattern = "abba", s = "dog cat cat dog"
输出: true
```

- **示例 2:**

```txt
输入:pattern = "abba", s = "dog cat cat fish"
输出: false
```

- **示例 3:**

```txt
输入: pattern = "aaaa", s = "dog cat cat dog"
输出: false
```

---

**提示:**

- `1 <= pattern.length <= 300`
- `pattern` 只包含小写英文字母
- `1 <= s.length <= 3000`
- `s` 只包含小写英文字母和 `' '`
- `s` **不包含** 任何前导或尾随对空格
- `s` 中每个单词都被 **单个空格** 分隔

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
