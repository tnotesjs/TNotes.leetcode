# [0686. 重复叠加字符串匹配【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0686.%20%E9%87%8D%E5%A4%8D%E5%8F%A0%E5%8A%A0%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 字符串匹配](#2--s1---字符串匹配)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/repeated-string-match/)

给定两个字符串 `a` 和 `b`，寻找重复叠加字符串 `a` 的最小次数，使得字符串 `b` 成为叠加后的字符串 `a` 的子串，如果不存在则返回 `-1`。

---

注意：字符串 `"abc"` 重复叠加 0 次是 `""`，重复叠加 1 次是 `"abc"`，重复叠加 2 次是 `"abcabc"`。

---

示例 1：

```txt
输入：a = "abcd", b = "cdabcdab"
输出：3
```

解释：a 重复叠加三遍后为 "abcdabcdabcd", 此时 b 是其子串。

---

示例 2：

```txt
输入：a = "a", b = "aa"
输出：2
```

---

示例 3：

```txt
输入：a = "a", b = "a"
输出：1
```

---

示例 4：

```txt
输入：a = "abc", b = "wxyz"
输出：-1
```

---

提示：

- `1 <= a.length <= 10^4`
- `1 <= b.length <= 10^4`
- `a` 和 `b` 由小写英文字母组成

## 2. 🎯 s.1 - 字符串匹配

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + m)$，其中 n 和 m 分别是字符串 a 和 b 的长度
- 空间复杂度：$O(n + m)$

算法思路：

- 将 a 重复叠加直到长度 ≥ b，然后检查 b 是否为子串
- 若不是，再多加一次 a（处理跨边界的情况）
- 仍不是则返回 -1
