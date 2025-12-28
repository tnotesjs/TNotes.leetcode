# [1717. 删除子字符串的最大得分【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1717.%20%E5%88%A0%E9%99%A4%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%A4%A7%E5%BE%97%E5%88%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-score-from-removing-substrings/)

给你一个字符串 `s` 和两个整数 `x` 和 `y`。你可以执行下面两种操作任意次。

- 删除子字符串 `"ab"` 并得到 `x` 分。
  - 比方说，从 `"cabxbae"` 删除 `ab` ，得到 `"cxbae"`。
- 删除子字符串`"ba"` 并得到 `y` 分。
  - 比方说，从 `"cabxbae"` 删除 `ba` ，得到 `"cabxe"`。

请返回对 `s` 字符串执行上面操作若干次能得到的最大得分。

---

- 示例 1：

```txt
输入：s = "cdbcbbaaabab", x = 4, y = 5
输出：19
解释：
- 删除 "cdbcbbaaabab" 中加粗的 "ba" ，得到 s = "cdbcbbaaab" ，加 5 分。
- 删除 "cdbcbbaaab" 中加粗的 "ab" ，得到 s = "cdbcbbaa" ，加 4 分。
- 删除 "cdbcbbaa" 中加粗的 "ba" ，得到 s = "cdbcba" ，加 5 分。
- 删除 "cdbcba" 中加粗的 "ba" ，得到 s = "cdbc" ，加 5 分。
总得分为 5 + 4 + 5 + 5 = 19。
```

- 示例 2：

```txt
输入：s = "aabbaaxybbaabb", x = 5, y = 4
输出：20
```

---

提示：

- `1 <= s.length <= 10^5`
- `1 <= x, y <= 10^4`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
