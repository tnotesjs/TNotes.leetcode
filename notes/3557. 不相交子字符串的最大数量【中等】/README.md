# [3557. 不相交子字符串的最大数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3557.%20%E4%B8%8D%E7%9B%B8%E4%BA%A4%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-maximum-number-of-non-intersecting-substrings/)

给你一个字符串 `word`。

返回以 首尾字母相同 且 长度至少为 4 的 不相交子字符串 的最大数量。

子字符串 是字符串中连续的 非空 字符序列。

---

- 示例 1：

输入： word = "abcdeafdef"

输出： 2

解释：

两个子字符串是 `"abcdea"` 和 `"fdef"`。

---

- 示例 2：

输入： word = "bcdaaaab"

输出： 1

解释：

唯一的子字符串是 `"aaaa"`。注意我们 不能 同时选择 `"bcdaaaab"`，因为它和另一个子字符串有重叠。

---

提示：

- `1 <= word.length <= 2 * 10^5`
- `word` 仅由小写英文字母组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
