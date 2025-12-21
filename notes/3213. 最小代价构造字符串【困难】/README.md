# [3213. 最小代价构造字符串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3213.%20%E6%9C%80%E5%B0%8F%E4%BB%A3%E4%BB%B7%E6%9E%84%E9%80%A0%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-string-with-minimum-cost/)

给你一个字符串 `target`、一个字符串数组 `words` 以及一个整数数组 `costs`，这两个数组长度相同。

设想一个空字符串 `s`。

你可以执行以下操作任意次数（包括 零 次）：

- 选择一个在范围 `[0, words.length - 1]` 的索引 `i`。
- 将 `words[i]` 追加到 `s`。
- 该操作的成本是 `costs[i]`。

返回使 `s` 等于 `target` 的 最小 成本。如果不可能，返回 `-1`。

---

- 示例 1：

输入： target = "abcdef", words = ["abdef","abc","d","def","ef"], costs = [100,1,1,10,5]

输出： 7

解释：

- 选择索引 1 并以成本 1 将 `"abc"` 追加到 `s`，得到 `s = "abc"`。
- 选择索引 2 并以成本 1 将 `"d"` 追加到 `s`，得到 `s = "abcd"`。
- 选择索引 4 并以成本 5 将 `"ef"` 追加到 `s`，得到 `s = "abcdef"`。

---

- 示例 2：

输入： target = "aaaa", words = ["z","zz","zzz"], costs = [1,10,100]

输出： -1

解释：

无法使 `s` 等于 `target`，因此返回 -1。

---

提示：

- `1 <= target.length <= 5 * 10^4`
- `1 <= words.length == costs.length <= 5 * 10^4`
- `1 <= words[i].length <= target.length`
- 所有 `words[i].length` 的总和小于或等于 `5 * 10^4`
- `target` 和 `words[i]` 仅由小写英文字母组成。
- `1 <= costs[i] <= 10^4`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
