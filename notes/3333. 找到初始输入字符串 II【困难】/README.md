# [3333. 找到初始输入字符串 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3333.%20%E6%89%BE%E5%88%B0%E5%88%9D%E5%A7%8B%E8%BE%93%E5%85%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-original-typed-string-ii/)

Alice 正在她的电脑上输入一个字符串。但是她打字技术比较笨拙，她 可能 在一个按键上按太久，导致一个字符被输入 多次 。

给你一个字符串 `word` ，它表示 最终 显示在 Alice 显示屏上的结果。同时给你一个 正 整数 `k` ，表示一开始 Alice 输入字符串的长度 至少 为 `k` 。

请你返回 Alice 一开始可能想要输入字符串的总方案数。

由于答案可能很大，请你将它对 `10^9 + 7` 取余 后返回。

---

- 示例 1：

输入： word = "aabbccdd", k = 7

输出： 5

解释：

可能的字符串包括：`"aabbccdd"` ，`"aabbccd"` ，`"aabbcdd"` ，`"aabccdd"` 和 `"abbccdd"` 。

---

- 示例 2：

输入： word = "aabbccdd", k = 8

输出： 1

解释：

唯一可能的字符串是 `"aabbccdd"` 。

---

- 示例 3：

输入： word = "aaabbb", k = 3

输出： 8

---

提示：

- `1 <= word.length <= 5 * 10^5`
- `word` 只包含小写英文字母。
- `1 <= k <= 2000`

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
