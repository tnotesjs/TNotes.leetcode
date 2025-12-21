# [3163. 压缩字符串 III【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3163.%20%E5%8E%8B%E7%BC%A9%E5%AD%97%E7%AC%A6%E4%B8%B2%20III%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/string-compression-iii/)

给你一个字符串 `word`，请你使用以下算法进行压缩：

- 从空字符串 `comp` 开始。当 `word` 不为空 时，执行以下操作：
  - 移除 `word` 的最长单字符前缀，该前缀由单一字符 `c` 重复多次组成，且该前缀长度 最多 为 9 。
  - 将前缀的长度和字符 `c` 追加到 `comp` 。

返回字符串 `comp` 。

---

- 示例 1：

输入： word = "abcde"

输出： "1a1b1c1d1e"

解释：

初始时，`comp = ""` 。进行 5 次操作，每次操作分别选择 `"a"`、`"b"`、`"c"`、`"d"` 和 `"e"` 作为前缀。

对每个前缀，将 `"1"` 和对应的字符追加到 `comp`。

---

- 示例 2：

输入： word = "aaaaaaaaaaaaaabb"

输出： "9a5a2b"

解释：

初始时，`comp = ""`。进行 3 次操作，每次操作分别选择 `"aaaaaaaaa"`、`"aaaaa"` 和 `"bb"` 作为前缀。

- 对于前缀 `"aaaaaaaaa"`，将 `"9"` 和 `"a"` 追加到 `comp`。
- 对于前缀 `"aaaaa"`，将 `"5"` 和 `"a"` 追加到 `comp`。
- 对于前缀 `"bb"`，将 `"2"` 和 `"b"` 追加到 `comp`。

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
