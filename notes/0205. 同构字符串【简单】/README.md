# [0205. 同构字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0205.%20%E5%90%8C%E6%9E%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/isomorphic-strings/)

给定两个字符串 `s` 和 `t` ，判断它们是否是同构的。

如果 `s` 中的字符可以按某种映射关系替换得到 `t` ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

---

- **示例 1:**

```txt
输入：s = "egg", t = "add"
输出：true
```

- **示例 2：**

```txt
输入：s = "foo", t = "bar"
输出：false
```

- **示例 3：**

```txt
输入：s = "paper", t = "title"
输出：true
```

---

**提示：**

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` 和 `t` 由任意有效的 ASCII 字符组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
