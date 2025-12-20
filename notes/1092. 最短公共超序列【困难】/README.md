# [1092. 最短公共超序列【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1092.%20%E6%9C%80%E7%9F%AD%E5%85%AC%E5%85%B1%E8%B6%85%E5%BA%8F%E5%88%97%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-common-supersequence/)

给你两个字符串 `str1` 和 `str2`，返回同时以 `str1` 和 `str2` 作为 子序列 的最短字符串。如果答案不止一个，则可以返回满足条件的 任意一个 答案。

如果从字符串 `t` 中删除一些字符（也可能不删除），可以得到字符串 `s` ，那么 `s` 就是 t 的一个子序列。

---

- 示例 1：

```txt
输入：str1 = "abac", str2 = "cab"
输出："cabac"
解释：
str1 = "abac" 是 "cabac" 的一个子串，因为我们可以删去 "cabac" 的第一个 "c"得到 "abac"。
str2 = "cab" 是 "cabac" 的一个子串，因为我们可以删去 "cabac" 末尾的 "ac" 得到 "cab"。
最终我们给出的答案是满足上述属性的最短字符串。
```

- 示例 2：

```txt
输入：str1 = "aaaaaaaa", str2 = "aaaaaaaa"
输出："aaaaaaaa"
```

---

提示：

- `1 <= str1.length, str2.length <= 1000`
- `str1` 和 `str2` 都由小写英文字母组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
