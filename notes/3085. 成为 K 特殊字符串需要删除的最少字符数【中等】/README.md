# [3085. 成为 K 特殊字符串需要删除的最少字符数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3085.%20%E6%88%90%E4%B8%BA%20K%20%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%9C%80%E8%A6%81%E5%88%A0%E9%99%A4%E7%9A%84%E6%9C%80%E5%B0%91%E5%AD%97%E7%AC%A6%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-deletions-to-make-string-k-special/)

给你一个字符串 `word` 和一个整数 `k`。

如果 `|freq(word[i]) - freq(word[j])| <= k` 对于字符串中所有下标 `i` 和 `j` 都成立，则认为 `word` 是 k 特殊字符串。

此处，`freq(x)` 表示字符 `x` 在 `word` 中的出现频率，而 `|y|` 表示 `y` 的绝对值。

> 字母 x 的 频率 是该字母在字符串中出现的次数。

返回使 `word` 成为 k 特殊字符串 需要删除的字符的最小数量。

---

- 示例 1：
  - 输入： word = "aabcaba", k = 0
  - 输出： 3
  - 解释： 可以删除 `2` 个 `"a"` 和 `1` 个 `"c"` 使 `word` 成为 `0` 特殊字符串。`word` 变为 `"baba"`，此时 `freq('a') == freq('b') == 2`。

---

- 示例 2：
  - 输入： word = "dabdcbdcdcd", k = 2
  - 输出： 2
  - 解释： 可以删除 `1` 个 `"a"` 和 `1` 个 `"d"` 使 `word` 成为 `2` 特殊字符串。`word` 变为 `"bdcbdcdcd"`，此时 `freq('b') == 2`，`freq('c') == 3`，`freq('d') == 4`。

---

- 示例 3：
  - 输入： word = "aaabaaa", k = 2
  - 输出： 1
  - 解释： 可以删除 1 个 `"b"` 使 `word` 成为 `2`特殊字符串。因此，`word` 变为 `"aaaaaa"`，此时每个字母的频率都是 `6`。

---

提示：

- `1 <= word.length <= 10^5`
- `0 <= k <= 10^5`
- `word` 仅由小写英文字母组成。

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
