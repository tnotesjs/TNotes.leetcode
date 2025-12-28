# [1312. 让字符串成为回文串的最少插入次数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1312.%20%E8%AE%A9%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%88%90%E4%B8%BA%E5%9B%9E%E6%96%87%E4%B8%B2%E7%9A%84%E6%9C%80%E5%B0%91%E6%8F%92%E5%85%A5%E6%AC%A1%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/)

给你一个字符串 `s` ，每一次操作你都可以在字符串的任意位置插入任意字符。

请你返回让 `s` 成为回文串的 最少操作次数。

「回文串」是正读和反读都相同的字符串。

---

- 示例 1：

```txt
输入：s = "zzazz"
输出：0
解释：字符串 "zzazz" 已经是回文串了，所以不需要做任何插入操作。
```

- 示例 2：

```txt
输入：s = "mbadm"
输出：2
解释：字符串可变为 "mbdadbm" 或者 "mdbabdm"。
```

- 示例 3：

```txt
输入：s = "leetcode"
输出：5
解释：插入 5 个字符后字符串变为 "leetcodocteel"。
```

---

提示：

- `1 <= s.length <= 500`
- `s` 中所有字符都是小写字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
