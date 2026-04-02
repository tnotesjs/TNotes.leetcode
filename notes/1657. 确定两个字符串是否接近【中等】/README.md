# [1657. 确定两个字符串是否接近【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1657.%20%E7%A1%AE%E5%AE%9A%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%98%AF%E5%90%A6%E6%8E%A5%E8%BF%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 计数 + 排序](#2--s1---计数--排序)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/determine-if-two-strings-are-close)

如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：

- 操作 1：交换任意两个 现有 字符。
  - 例如，`abcde -> aecdb`
- 操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
  - 例如，`aacabb -> bbcbaa`（所有 `a` 转化为 `b`，而所有的 `b` 转换为 `a` ）

你可以根据需要对任意一个字符串多次使用这两种操作。

给你两个字符串，`word1` 和 `word2`。如果 `word1` 和 `word2` 接近，就返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：word1 = "abc", word2 = "bca"
输出：true
解释：2 次操作从 word1 获得 word2。
执行操作 1："abc" -> "acb"
执行操作 1："acb" -> "bca"
```

示例 2：

```txt
输入：word1 = "a", word2 = "aa"
输出：false
解释：不管执行多少次操作，都无法从 word1 得到 word2，反之亦然。
```

示例 3：

```txt
输入：word1 = "cabbba", word2 = "abbccc"
输出：true
解释：3 次操作从 word1 获得 word2。
执行操作 1："cabbba" -> "caabbb"
执行操作 2："caabbb" -> "baaccc"
执行操作 2："baaccc" -> "abbccc"
```

---

提示：

- `1 <= word1.length, word2.length <= 10^5`
- `word1` 和 `word2` 仅包含小写英文字母

## 2. 🎯 s.1 - 计数 + 排序

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + 26\log 26)$，其中 $n$ 是字符串长度
- 空间复杂度：$O(26)$，频率数组

算法思路：

- 两个字符串“接近”的条件：字符集合完全相同，且频率数组排序后相同
- 分别统计两字符串的字符频率
- 比较字符集合是否一致，以及排序后的频率数组是否相同
