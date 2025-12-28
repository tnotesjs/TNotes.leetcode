# [1081. 不同字符的最小子序列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1081.%20%E4%B8%8D%E5%90%8C%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E5%B0%8F%E5%AD%90%E5%BA%8F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/smallest-subsequence-of-distinct-characters/)

返回 `s` 字典序最小的子序列，该子序列包含 `s` 的所有不同字符，且只包含一次。

> 子序列 是可以通过从另一个数组删除或不删除某些元素，但不更改其余元素的顺序得到的数组。

---

示例 1：

```txt
输入：s = "bcabc"
输出："abc"
```

示例 2：

```txt
输入：s = "cbacdcbc"
输出："acdb"
```

---

提示：

- `1 <= s.length <= 1000`
- `s` 由小写英文字母组成

---

注意： 该题与 [316. 去除重复字母][1] 相同

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 5. 🔗 引用

- [316. 去除重复字母][1]

[1]: https://leetcode.cn/problems/remove-duplicate-letters/description/
