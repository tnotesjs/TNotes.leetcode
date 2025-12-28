# [0420. 强密码检验器【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0420.%20%E5%BC%BA%E5%AF%86%E7%A0%81%E6%A3%80%E9%AA%8C%E5%99%A8%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/strong-password-checker/)

满足以下条件的密码被认为是强密码：

- 由至少 `6` 个，至多 `20` 个字符组成。
- 包含至少 一个小写 字母，至少 一个大写 字母，和至少 一个数字。
- 不包含连续三个重复字符 (比如 `"B*aaa*bb0"` 是弱密码, 但是 `"B*aa*b*a*0"` 是强密码)。

给你一个字符串 `password` ，返回 _将 `password` 修改到满足强密码条件需要的最少修改步数。如果 `password` 已经是强密码，则返回 `0`。_

在一步修改操作中，你可以：

- 插入一个字符到 `password` ，
- 从 `password` 中删除一个字符，或
- 用另一个字符来替换 `password` 中的某个字符。

---

- 示例 1：

```txt
输入：password = "a"
输出：5
```

- 示例 2：

```txt
输入：password = "aA1"
输出：3
```

- 示例 3：

```txt
输入：password = "1337C0d3"
输出：0
```

---

提示：

- `1 <= password.length <= 50`
- `password` 由字母、数字、点 `'.'` 或者感叹号 `'!'` 组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
