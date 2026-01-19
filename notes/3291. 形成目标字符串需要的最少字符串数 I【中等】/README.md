# [3291. 形成目标字符串需要的最少字符串数 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3291.%20%E5%BD%A2%E6%88%90%E7%9B%AE%E6%A0%87%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%9C%80%E8%A6%81%E7%9A%84%E6%9C%80%E5%B0%91%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-valid-strings-to-form-target-i/)

给你一个字符串数组 `words` 和一个字符串 `target`。

如果字符串 `x` 是 `words` 中 任意 字符串的 前缀，则认为 `x` 是一个 有效 字符串。

> - 前缀
> - 字符串的前缀是从字符串的开头开始并延伸到其中任意点的子串。

现计划通过 连接 有效字符串形成 `target`，请你计算并返回需要连接的 最少 字符串数量。如果无法通过这种方式形成 `target`，则返回 `-1`。

---

示例 1：

输入：words = ["abc","aaaaa","bcdef"], target = "aabcdabc"

输出：3

解释：

target 字符串可以通过连接以下有效字符串形成：

- `words[1]` 的长度为 2 的前缀，即 `"aa"`。
- `words[2]` 的长度为 3 的前缀，即 `"bcd"`。
- `words[0]` 的长度为 3 的前缀，即 `"abc"`。

---

示例 2：

输入：words = ["abababab","ab"], target = "ababaababa"

输出：2

解释：

target 字符串可以通过连接以下有效字符串形成：

- `words[0]` 的长度为 5 的前缀，即 `"ababa"`。
- `words[0]` 的长度为 5 的前缀，即 `"ababa"`。

---

示例 3：

输入：words = ["abcdef"], target = "xyz"

输出：-1

---

提示：

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 5 * 10^3`
- 输入确保 `sum(words[i].length) <= 10^5`。
- `words[i]` 只包含小写英文字母。
- `1 <= target.length <= 5 * 10^3`
- `target` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
