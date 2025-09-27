# [2531. 使字符串中不同字符的数目相等【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2531.%20%E4%BD%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E4%B8%8D%E5%90%8C%E5%AD%97%E7%AC%A6%E7%9A%84%E6%95%B0%E7%9B%AE%E7%9B%B8%E7%AD%89%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/make-number-of-distinct-characters-equal/)

给你两个下标从 **0** 开始的字符串 `word1` 和 `word2` 。

一次 **移动** 由以下两个步骤组成：

- 选中两个下标  `i` 和 `j` ，分别满足 `0 <= i < word1.length` 和 `0 <= j < word2.length` ，
- 交换 `word1[i]` 和 `word2[j]` 。

如果可以通过 **恰好一次** 移动，使 `word1` 和 `word2` 中不同字符的数目相等，则返回 `true` ；否则，返回 `false` 。

---

- **示例 1：**

```txt
输入：word1 = "ac", word2 = "b"
输出：false
解释：交换任何一组下标都会导致第一个字符串中有 2 个不同的字符，而在第二个字符串中只有 1 个不同字符。
```

- **示例 2：**

```txt
输入：word1 = "abcc", word2 = "aab"
输出：true
解释：交换第一个字符串的下标 2 和第二个字符串的下标 0 。之后得到 word1 = "abac" 和 word2 = "cab" ，各有 3 个不同字符。
```

- **示例 3：**

```txt
输入：word1 = "abcde", word2 = "fghij"
输出：true
解释：无论交换哪一组下标，两个字符串中都会有 5 个不同字符。
```

---

**提示：**

- `1 <= word1.length, word2.length <= 10^5`
- `word1` 和 `word2` 仅由小写英文字母组成。

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
