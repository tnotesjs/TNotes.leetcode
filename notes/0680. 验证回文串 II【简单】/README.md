# [0680. 验证回文串 II【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0680.%20%E9%AA%8C%E8%AF%81%E5%9B%9E%E6%96%87%E4%B8%B2%20II%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双指针法](#2--s1---双指针法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/valid-palindrome-ii/)

给你一个字符串 `s`，最多 可以从中删除一个字符。

请你判断 `s` 是否能成为回文字符串：如果能，返回 `true` ；否则，返回 `false`。

---

- 示例 1：

```txt
输入：s = "aba"
输出：true
```

- 示例 2：

```txt
输入：s = "abca"
输出：true
解释：你可以删除字符 'c'。
```

- 示例 3：

```txt
输入：s = "abc"
输出：false
```

---

提示：

- `1 <= s.length <= 10^5`
- `s` 由小写英文字母组成

## 2. 🎯 s.1 - 双指针法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串的长度，最坏情况下需要遍历字符串两次
- 空间复杂度：$O(1)$，只使用了常数个额外变量
- 解题思路：
  - 使用双指针从两端向中间扫描，当遇到不匹配的字符时，尝试删除左边或右边的字符，看是否能形成回文串。
