# [1915. 最美子字符串的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1915.%20%E6%9C%80%E7%BE%8E%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 位运算 + 前缀异或](#2--s1---位运算--前缀异或)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-wonderful-substrings/)

如果某个字符串中 至多一个 字母出现 奇数 次，则称其为 最美 字符串。

- 例如，`"ccjjc"` 和 `"abab"` 都是最美字符串，但 `"ab"` 不是。

给你一个字符串 `word`，该字符串由前十个小写英文字母组成（`'a'` 到 `'j'`）。请你返回 `word` 中 最美非空子字符串 的数目*。*如果同样的子字符串在 `word` 中出现多次，那么应当对 每次出现 分别计数*。*

子字符串 是字符串中的一个连续字符序列。

---

示例 1：

```txt
输入：word = "aba"
输出：4
解释：4 个最美子字符串如下所示：
- "aba" -> "a"
- "aba" -> "b"
- "aba" -> "a"
- "aba" -> "aba"
```

示例 2：

```txt
输入：word = "aabb"
输出：9
解释：9 个最美子字符串如下所示：
- "aabb" -> "a"
- "aabb" -> "aa"
- "aabb" -> "aab"
- "aabb" -> "aabb"
- "aabb" -> "a"
- "aabb" -> "abb"
- "aabb" -> "b"
- "aabb" -> "bb"
- "aabb" -> "b"
```

示例 3：

```txt
输入：word = "he"
输出：2
解释：2 个最美子字符串如下所示：
- "he" -> "h"
- "he" -> "e"
```

---

提示：

- `1 <= word.length <= 10^5`
- `word` 由从 `'a'` 到 `'j'` 的小写英文字母组成

## 2. 🎯 s.1 - 位运算 + 前缀异或

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times 10)$，其中 n 是字符串长度
- 空间复杂度：$O(2^{10})$，状态计数的哈希表

算法思路：

- 用 10 位二进制表示每个字符出现的奇偶性
- 前缀异或得到当前状态，当状态为 0 或只有 1 位为 1 时“最美”
- 统计之前相同状态或差一位的前缀数量
