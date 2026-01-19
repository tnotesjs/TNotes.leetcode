# [0854. 相似度为 K 的字符串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0854.%20%E7%9B%B8%E4%BC%BC%E5%BA%A6%E4%B8%BA%20K%20%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/k-similar-strings/)

对于某些非负整数 `k`，如果交换 `s1` 中两个字母的位置恰好 `k` 次，能够使结果字符串等于 `s2`，则认为字符串 `s1` 和 `s2` 的 相似度为 `k`。

给你两个字母异位词 `s1` 和 `s2`，返回 `s1` 和 `s2` 的相似度 `k` 的最小值。

---

示例 1：

```txt
输入：s1 = "ab", s2 = "ba"
输出：1
```

示例 2：

```txt
输入：s1 = "abc", s2 = "bca"
输出：2
```

---

提示：

- `1 <= s1.length <= 20`
- `s2.length == s1.length`
- `s1` 和 `s2` 只包含集合 `{'a', 'b', 'c', 'd', 'e', 'f'}` 中的小写字母
- `s2` 是 `s1` 的一个字母异位词

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
