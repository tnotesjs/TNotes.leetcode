# [2942. 查找包含给定字符的单词【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2942.%20%E6%9F%A5%E6%89%BE%E5%8C%85%E5%90%AB%E7%BB%99%E5%AE%9A%E5%AD%97%E7%AC%A6%E7%9A%84%E5%8D%95%E8%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 遍历](#2--s1---遍历)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-words-containing-character/)

给你一个下标从 0 开始的字符串数组 `words` 和一个字符 `x`。

请你返回一个 下标数组，表示下标在数组中对应的单词包含字符 `x`。

注意，返回的数组可以是 任意 顺序。

---

示例 1：

- 输入：words = ["leet","code"], x = "e"
- 输出：[0,1]
- 解释："e" 在两个单词中都出现了："leet" 和 "code"。所以我们返回下标 0 和 1。

---

示例 2：

- 输入：words = ["abc","bcd","aaaa","cbc"], x = "a"
- 输出：[0,2]
- 解释："a" 在 "abc" 和 "aaaa" 中出现了，所以我们返回下标 0 和 2。

---

示例 3：

- 输入：words = ["abc","bcd","aaaa","cbc"], x = "z"
- 输出：[]
- 解释："z" 没有在任何单词中出现。所以我们返回空数组。

---

提示：

- `1 <= words.length <= 50`
- `1 <= words[i].length <= 50`
- `x` 是一个小写英文字母。
- `words[i]` 只包含小写英文字母。

## 2. 🎯 s.1 - 遍历

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n \times m)$，其中 n 是单词数量，m 是单词的平均长度
- 空间复杂度：$O(1)$，不计算返回结果的空间

算法思路：

- 遍历每个单词，检查是否包含字符 x
- 如果包含，将该单词的下标加入结果数组
- 返回所有包含字符 x 的单词的下标数组
