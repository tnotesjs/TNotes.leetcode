# [3407. 子字符串匹配模式【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3407.%20%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D%E6%A8%A1%E5%BC%8F%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/substring-matching-pattern/)

给你一个字符串 `s` 和一个模式字符串 `p` ，其中 `p` 恰好 包含 一个 `'*'` 符号。

`p` 中的 `'*'` 符号可以被替换为零个或多个字符组成的任意字符序列。

如果 `p` 可以变成 `s` 的 子字符串，那么返回 `true` ，否则返回 `false` 。

> - 子字符串 是字符串中连续的 非空 字符序列。

---

- 示例 1：

输入： s = "leetcode", p = "ee\*e"

输出： true

解释：

将 `'*'` 替换为 `"tcod"` ，子字符串 `"eetcode"` 匹配模式串。

---

- 示例 2：

输入： s = "car", p = "c\*v"

输出： false

解释：

不存在匹配模式串的子字符串。

---

- 示例 3：

输入： s = "luck", p = "u\*"

输出： true

解释：

子字符串 `"u"` ，`"uc"` 和 `"uck"` 都匹配模式串。

---

提示：

- `1 <= s.length <= 50`
- `1 <= p.length <= 50`
- `s` 只包含小写英文字母。
- `p` 只包含小写英文字母和一个 `'*'` 符号。

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
