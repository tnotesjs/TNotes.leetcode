# [2957. 消除相邻近似相等字符【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2957.%20%E6%B6%88%E9%99%A4%E7%9B%B8%E9%82%BB%E8%BF%91%E4%BC%BC%E7%9B%B8%E7%AD%89%E5%AD%97%E7%AC%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-adjacent-almost-equal-characters/)

给你一个下标从 **0** 开始的字符串 `word` 。

一次操作中，你可以选择 `word` 中任意一个下标 `i` ，将 `word[i]` 修改成任意一个小写英文字母。

请你返回消除 `word` 中所有相邻 **近似相等** 字符的 **最少** 操作次数。

两个字符 `a` 和 `b` 如果满足 `a == b` 或者 `a` 和 `b` 在字母表中是相邻的，那么我们称它们是 **近似相等** 字符。

---

- **示例 1：**

```txt
输入：word = "aaaaa"
输出：2
解释：我们将 word 变为 "acaca" ，该字符串没有相邻近似相等字符。
消除 word 中所有相邻近似相等字符最少需要 2 次操作。
```

---

- **示例 2：**

```txt
输入：word = "abddez"
输出：2
解释：我们将 word 变为 "ybdoez" ，该字符串没有相邻近似相等字符。
消除 word 中所有相邻近似相等字符最少需要 2 次操作。
```

---

- **示例 3：**

```txt
输入：word = "zyxyxyz"
输出：3
解释：我们将 word 变为 "zaxaxaz" ，该字符串没有相邻近似相等字符。
消除 word 中所有相邻近似相等字符最少需要 3 次操作
```

---

**提示：**

- `1 <= word.length <= 100`
- `word` 只包含小写英文字母。

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
