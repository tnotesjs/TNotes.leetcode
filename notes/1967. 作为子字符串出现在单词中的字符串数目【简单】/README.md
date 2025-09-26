# [1967. 作为子字符串出现在单词中的字符串数目【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1967.%20%E4%BD%9C%E4%B8%BA%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%87%BA%E7%8E%B0%E5%9C%A8%E5%8D%95%E8%AF%8D%E4%B8%AD%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%9B%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-strings-that-appear-as-substrings-in-word/)

给你一个字符串数组 `patterns` 和一个字符串 `word` ，统计 `patterns` 中有多少个字符串是 `word` 的子字符串。返回字符串数目。

**子字符串** 是字符串中的一个连续字符序列。

---

- **示例 1：**

```txt
输入：patterns = ["a","abc","bc","d"], word = "abc"
输出：3
解释：
- "a" 是 "abc" 的子字符串。
- "abc" 是 "abc" 的子字符串。
- "bc" 是 "abc" 的子字符串。
- "d" 不是 "abc" 的子字符串。
patterns 中有 3 个字符串作为子字符串出现在 word 中。
```

- **示例 2：**

```txt
输入：patterns = ["a","b","c"], word = "aaaaabbbbb"
输出：2
解释：
- "a" 是 "aaaaabbbbb" 的子字符串。
- "b" 是 "aaaaabbbbb" 的子字符串。
- "c" 不是 "aaaaabbbbb" 的字符串。
patterns 中有 2 个字符串作为子字符串出现在 word 中。
```

- **示例 3：**

```txt
输入：patterns = ["a","a","a"], word = "ab"
输出：3
解释：patterns 中的每个字符串都作为子字符串出现在 word "ab" 中。
```

---

**提示：**

- `1 <= patterns.length <= 100`
- `1 <= patterns[i].length <= 100`
- `1 <= word.length <= 100`
- `patterns[i]` 和 `word` 由小写英文字母组成

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
