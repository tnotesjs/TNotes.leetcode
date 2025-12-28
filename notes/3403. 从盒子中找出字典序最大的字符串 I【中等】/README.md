# [3403. 从盒子中找出字典序最大的字符串 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3403.%20%E4%BB%8E%E7%9B%92%E5%AD%90%E4%B8%AD%E6%89%BE%E5%87%BA%E5%AD%97%E5%85%B8%E5%BA%8F%E6%9C%80%E5%A4%A7%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-lexicographically-largest-string-from-the-box-i/)

给你一个字符串 `word` 和一个整数 `numFriends`。

Alice 正在为她的 `numFriends` 位朋友组织一个游戏。游戏分为多个回合，在每一回合中：

- `word` 被分割成 `numFriends` 个 非空 字符串，且该分割方式与之前的任意回合所采用的都 不完全相同。
- 所有分割出的字符串都会被放入一个盒子中。

在所有回合结束后，找出盒子中 字典序最大的 字符串。

> - 字典序更小
>   - 在字符串 a 和字符串 b 出现第一个不同的位置，如果字符串 a 有一个字母比字符串 b 中的对应字母在字母表中更早出现，则字符串 a 在字典序上小于字符串 b。
>   - 如果前 min(a.length, b.length) 个字符没有不同，则较短的字符串在字段序上较小。

---

- 示例 1：

输入: word = "dbca", numFriends = 2

输出: "dbc"

解释:

所有可能的分割方式为：

- `"d"` 和 `"bca"`。
- `"db"` 和 `"ca"`。
- `"dbc"` 和 `"a"`。

---

- 示例 2：

输入: word = "gggg", numFriends = 4

输出: "g"

解释:

唯一可能的分割方式为：`"g"`, `"g"`, `"g"`, 和 `"g"`。

---

提示：

- `1 <= word.length <= 5 * 10^3`
- `word` 仅由小写英文字母组成。
- `1 <= numFriends <= word.length`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
