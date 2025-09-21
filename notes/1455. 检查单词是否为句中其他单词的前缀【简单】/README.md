# [1455. 检查单词是否为句中其他单词的前缀【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1455.%20%E6%A3%80%E6%9F%A5%E5%8D%95%E8%AF%8D%E6%98%AF%E5%90%A6%E4%B8%BA%E5%8F%A5%E4%B8%AD%E5%85%B6%E4%BB%96%E5%8D%95%E8%AF%8D%E7%9A%84%E5%89%8D%E7%BC%80%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/)

给你一个字符串 `sentence` 作为句子并指定检索词为 `searchWord` ，其中句子由若干用 **单个空格** 分隔的单词组成。请你检查检索词 `searchWord` 是否为句子 `sentence` 中任意单词的前缀。

如果 `searchWord` 是某一个单词的前缀，则返回句子 `sentence` 中该单词所对应的下标（**下标从 1 开始**）。如果 `searchWord` 是多个单词的前缀，则返回匹配的第一个单词的下标（**最小下标**）。如果 `searchWord` 不是任何单词的前缀，则返回 `-1` 。

字符串 `s` 的 **前缀** 是 `s` 的任何前导连续子字符串。

---

- **示例 1：**

```txt
输入：sentence = "i love eating burger", searchWord = "burg"
输出：4

解释：
"burg" 是 "burger" 的前缀，而 "burger" 是句子中第 4 个单词。
```

- **示例 2：**

```txt
输入：sentence = "this problem is an easy problem", searchWord = "pro"
输出：2

解释：
"pro" 是 "problem" 的前缀，而 "problem" 是句子中第 2 个也是第 6 个单词，但是应该返回最小下标 2 。
```

- **示例 3：**

```txt
输入：sentence = "i am tired", searchWord = "you"
输出：-1

解释：
"you" 不是句子中任何单词的前缀。
```

---

**提示：**

- `1 <= sentence.length <= 100`
- `1 <= searchWord.length <= 10`
- `sentence` 由小写英文字母和空格组成。
- `searchWord` 由小写英文字母组成。

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
