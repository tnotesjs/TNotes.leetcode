# [3083. 字符串及其反转中是否存在同一子字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3083.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8F%8A%E5%85%B6%E5%8F%8D%E8%BD%AC%E4%B8%AD%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%E5%90%8C%E4%B8%80%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/existence-of-a-substring-in-a-string-and-its-reverse/)

给你一个字符串 `s` ，请你判断字符串 `s` 是否存在一个长度为 `2` 的子字符串，在 `s` 反转后的字符串中也出现。

如果存在这样的子字符串，返回 `true`；如果不存在，返回 `false` 。

---

- 示例 1：

```txt
输入：s = "leetcode"
输出：true

解释：
子字符串 `"ee"` 的长度为 `2`，它也出现在 `reverse(s) == "edocteel"` 中。
```

- 示例 2：

```txt
输入：s = "abcba"
输出：true

解释：
所有长度为 `2` 的子字符串 `"ab"`、`"bc"`、`"cb"`、`"ba"` 也都出现在 `reverse(s) == "abcba"` 中。
```

- 示例 3：

```txt
输入：s = "abcd"
输出：false

解释：
字符串 `s` 中不存在满足「在其反转后的字符串中也出现」且长度为 `2` 的子字符串。
```

---

提示：

- `1 <= s.length <= 100`
- 字符串 `s` 仅由小写英文字母组成。

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
