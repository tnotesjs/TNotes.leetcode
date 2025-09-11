# [0389. 找不同【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0389.%20%E6%89%BE%E4%B8%8D%E5%90%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-difference/)

给定两个字符串 `s` 和 `t` ，它们只包含小写字母。

字符串 `t`  由字符串 `s` 随机重排，然后在随机位置添加一个字母。

请找出在 `t`  中被添加的字母。

---

- **示例 1：**

```txt
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
```

- **示例 2：**

```txt
输入：s = "", t = "y"
输出："y"
```

---

**提示：**

- `0 <= s.length <= 1000`
- `t.length == s.length + 1`
- `s` 和 `t` 只包含小写字母

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
