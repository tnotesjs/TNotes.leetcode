# [0583. 两个字符串的删除操作【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0583.%20%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/delete-operation-for-two-strings/)

给定两个单词 `word1` 和 `word2` ，返回使得 `word1` 和 `word2` 相同 所需的 最小步数。

每步 可以删除任意一个字符串中的一个字符。

---

- 示例 1：

```txt
输入: word1 = "sea", word2 = "eat"
输出: 2
解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
```

示例 2：

```txt
输入：word1 = "leetcode", word2 = "etco"
输出：4
```

---

提示：

- `1 <= word1.length, word2.length <= 500`
- `word1` 和 `word2` 只包含小写英文字母

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
