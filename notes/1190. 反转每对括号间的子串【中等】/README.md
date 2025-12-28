# [1190. 反转每对括号间的子串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1190.%20%E5%8F%8D%E8%BD%AC%E6%AF%8F%E5%AF%B9%E6%8B%AC%E5%8F%B7%E9%97%B4%E7%9A%84%E5%AD%90%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-substrings-between-each-pair-of-parentheses/)

给出一个字符串 `s`（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

---

- 示例 1：

```txt
输入：s = "(abcd)"
输出："dcba"
```

- 示例 2：

```txt
输入：s = "(u(love)i)"
输出："iloveu"
解释：先反转子字符串 "love" ，然后反转整个字符串。
```

- 示例 3：

```txt
输入：s = "(ed(et(oc))el)"
输出："leetcode"
解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
```

---

提示：

- `1 <= s.length <= 2000`
- `s` 中只有小写英文字母和括号
- 题目测试用例确保所有括号都是成对出现的

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
