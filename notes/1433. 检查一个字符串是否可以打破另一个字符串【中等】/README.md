# [1433. 检查一个字符串是否可以打破另一个字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1433.%20%E6%A3%80%E6%9F%A5%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E6%89%93%E7%A0%B4%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-a-string-can-break-another-string/)

给你两个字符串 `s1` 和 `s2` ，它们长度相等，请你检查是否存在一个 `s1` 的排列可以打破 `s2` 的一个排列，或者是否存在一个 `s2` 的排列可以打破 `s1` 的一个排列。

字符串 `x` 可以打破字符串 `y` （两者长度都为 `n` ）需满足对于所有 `i`（在 `0` 到 `n - 1` 之间）都有 `x[i] >= y[i]`（字典序意义下的顺序）。

---

示例 1：

```txt
输入：s1 = "abc", s2 = "xya"
输出：true

解释：
"ayx" 是 s2="xya" 的一个排列，"abc" 是字符串 s1="abc" 的一个排列，且 "ayx" 可以打破 "abc"。
```

示例 2：

```txt
输入：s1 = "abe", s2 = "acd"
输出：false

解释：
s1="abe" 的所有排列包括："abe"，"aeb"，"bae"，"bea"，"eab" 和 "eba" ，s2="acd" 的所有排列包括：
"acd"，"adc"，"cad"，"cda"，"dac" 和 "dca"。然而没有任何 s1 的排列可以打破 s2 的排列。
也没有 s2 的排列能打破 s1 的排列。
```

示例 3：

```txt
输入：s1 = "leetcodee", s2 = "interview"
输出：true
```

---

提示：

- `s1.length == n`
- `s2.length == n`
- `1 <= n <= 10^5`
- 所有字符串都只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
