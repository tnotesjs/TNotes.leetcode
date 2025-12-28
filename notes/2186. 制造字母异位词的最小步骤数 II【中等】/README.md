# [2186. 制造字母异位词的最小步骤数 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2186.%20%E5%88%B6%E9%80%A0%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E7%9A%84%E6%9C%80%E5%B0%8F%E6%AD%A5%E9%AA%A4%E6%95%B0%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/)

给你两个字符串 `s` 和 `t`。在一步操作中，你可以给 `s` 或者 `t` 追加 任一字符。

返回使 `s` 和 `t` 互为 字母异位词 所需的最少步骤数*。*

字母异位词 指字母相同但是顺序不同（或者相同）的字符串。

---

示例 1：

```txt
输入：s = "leetcode", t = "coats"
输出：7
解释：
- 执行 2 步操作，将 "as" 追加到 s = "leetcode" 中，得到 s = "leetcodeas"。
- 执行 5 步操作，将 "leede" 追加到 t = "coats" 中，得到 t = "coatsleede"。
"leetcodeas" 和 "coatsleede" 互为字母异位词。
总共用去 2 + 5 = 7 步。
可以证明，无法用少于 7 步操作使这两个字符串互为字母异位词。
```

示例 2：

```txt
输入：s = "night", t = "thing"
输出：0
解释：给出的字符串已经互为字母异位词。因此，不需要任何进一步操作。
```

---

提示：

- `1 <= s.length, t.length <= 2 * 10^5`
- `s` 和 `t` 由小写英文字符组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
