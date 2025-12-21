# [3120. 统计特殊字母的数量 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3120.%20%E7%BB%9F%E8%AE%A1%E7%89%B9%E6%AE%8A%E5%AD%97%E6%AF%8D%E7%9A%84%E6%95%B0%E9%87%8F%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-the-number-of-special-characters-i/)

给你一个字符串 `word`。如果 `word` 中同时存在某个字母的小写形式和大写形式，则称这个字母为 特殊字母 。

返回 `word` 中 特殊字母 的数量。

---

- 示例 1：

输入： word = "aaAbcBC"

输出： 3

解释： `word` 中的特殊字母是 `'a'`、`'b'` 和 `'c'`。

---

- 示例 2：

输入： word = "abc"

输出： 0

解释： `word` 中不存在大小写形式同时出现的字母。

---

- 示例 3：

输入： word = "abBCab"

输出： 1

解释： `word` 中唯一的特殊字母是 `'b'`。

---

提示：

- `1 <= word.length <= 50`
- `word` 仅由小写和大写英文字母组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
