# [0943. 最短超级串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0943.%20%E6%9C%80%E7%9F%AD%E8%B6%85%E7%BA%A7%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-shortest-superstring/)

给定一个字符串数组 `words`，找到以 `words` 中每个字符串作为子字符串的最短字符串。如果有多个有效最短字符串满足题目条件，返回其中 任意一个 即可。

我们可以假设 `words` 中没有字符串是 `words` 中另一个字符串的子字符串。

---

示例 1：

```txt
输入：words = ["alex","loves","leetcode"]
输出："alexlovesleetcode"
解释："alex"，"loves"，"leetcode" 的所有排列都会被接受。
```

示例 2：

```txt
输入：words = ["catg","ctaagt","gcta","ttca","atgcatc"]
输出："gctaagttcatgcatc"
```

---

提示：

- `1 <= words.length <= 12`
- `1 <= words[i].length <= 20`
- `words[i]` 由小写英文字母组成
- `words` 中的所有字符串 互不相同

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
