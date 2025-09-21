# [1408. 数组中的字符串匹配【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1408.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/string-matching-in-an-array/)

给你一个字符串数组 `words` ，数组中的每个字符串都可以看作是一个单词。请你按 **任意** 顺序返回 `words` 中是其他单词的 子字符串 的所有单词。

> 子字符串 是字符串中连续的 非空 字符序列。

---

- **示例 1：**

```txt
输入：words = ["mass","as","hero","superhero"]
输出：["as","hero"]

解释：
"as" 是 "mass" 的子字符串，"hero" 是 "superhero" 的子字符串。
["hero","as"] 也是有效的答案。
```

- **示例 2：**

```txt
输入：words = ["leetcode","et","code"]
输出：["et","code"]

解释：
"et" 和 "code" 都是 "leetcode" 的子字符串。
```

- **示例 3：**

```txt
输入：words = ["blue","green","bu"]
输出：[]
```

---

**提示：**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 30`
- `words[i]` 仅包含小写英文字母。
- 题目数据 **保证** `words` 的每个字符串都是独一无二的。

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
