# [2901. 最长相邻不相等子序列 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2901.%20%E6%9C%80%E9%95%BF%E7%9B%B8%E9%82%BB%E4%B8%8D%E7%9B%B8%E7%AD%89%E5%AD%90%E5%BA%8F%E5%88%97%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-unequal-adjacent-groups-subsequence-ii/)

给定一个字符串数组 `words` ，和一个数组 `groups` ，两个数组长度都是 `n`。

两个长度相等字符串的 汉明距离 定义为对应位置字符 不同 的数目。

你需要从下标 `[0, 1, ..., n - 1]` 中选出一个 最长子序列 ，将这个子序列记作长度为 `k` 的 `[i0, i1, ..., ik - 1]` ，它需要满足以下条件：

> 子序列 是可以通过从另一个数组删除或不删除某些元素，但不更改其余元素的顺序得到的数组。

- 相邻 下标对应的 `groups` 值 不同。即，对于所有满足 `0 < j + 1 < k` 的 `j` 都有 `groups[ij] != groups[ij + 1]`。
- 对于所有 `0 < j + 1 < k` 的下标 `j` ，都满足 `words[ij]` 和 `words[ij + 1]` 的长度 相等 ，且两个字符串之间的 汉明距离 为 `1`。

请你返回一个字符串数组，它是下标子序列 依次 对应 `words` 数组中的字符串连接形成的字符串数组。如果有多个答案，返回任意一个。

子序列 指的是从原数组中删掉一些（也可能一个也不删掉）元素，剩余元素不改变相对位置得到的新的数组。

---

注意：`words` 中的字符串长度可能 不相等。

---

示例 1：

```txt
输入：words = ["bab","dab","cab"], groups = [1,2,2]
输出：["bab","cab"]
解释：一个可行的子序列是 [0,2]。
- groups[0] != groups[2]
- words[0].length == words[2].length 且它们之间的汉明距离为 1。
所以一个可行的答案是 [words[0],words[2]] = ["bab","cab"]。
另一个可行的子序列是 [0,1]。
- groups[0] != groups[1]
- words[0].length = words[1].length 且它们之间的汉明距离为 1。
所以另一个可行的答案是 [words[0],words[1]] = ["bab","dab"]。
符合题意的最长子序列的长度为 2。
```

示例 2：

```txt
输入：words = ["a","b","c","d"], groups = [1,2,3,4]
输出：["a","b","c","d"]
解释：我们选择子序列 [0,1,2,3]。
它同时满足两个条件。
所以答案为 [words[0],words[1],words[2],words[3]] = ["a","b","c","d"]。
它是所有下标子序列里最长且满足所有条件的。
所以它是唯一的答案。
```

---

提示：

- `1 <= n == words.length == groups.length <= 1000`
- `1 <= words[i].length <= 10`
- `1 <= groups[i] <= n`
- `words` 中的字符串 互不相同。
- `words[i]` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
