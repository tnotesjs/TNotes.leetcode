# [1941. 检查是否所有字符出现次数相同【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1941.%20%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E6%89%80%E6%9C%89%E5%AD%97%E7%AC%A6%E5%87%BA%E7%8E%B0%E6%AC%A1%E6%95%B0%E7%9B%B8%E5%90%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-all-characters-have-equal-number-of-occurrences/)

给你一个字符串 `s` ，如果 `s` 是一个 好 字符串，请你返回 `true` ，否则请返回 `false` 。

如果 `s` 中出现过的 所有 字符的出现次数 相同 ，那么我们称字符串 `s` 是 好 字符串。

---

- 示例 1：

```txt
输入：s = "abacbc"
输出：true
解释：s 中出现过的字符为 'a'，'b' 和 'c' 。s 中所有字符均出现 2 次。
```

- 示例 2：

```txt
输入：s = "aaabb"
输出：false
解释：s 中出现过的字符为 'a' 和 'b' 。
'a' 出现了 3 次，'b' 出现了 2 次，两者出现次数不同。
```

---

提示：

- `1 <= s.length <= 1000`
- `s` 只包含小写英文字母。

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
