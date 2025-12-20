# [0068. 文本左右对齐【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0068.%20%E6%96%87%E6%9C%AC%E5%B7%A6%E5%8F%B3%E5%AF%B9%E9%BD%90%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/add-binary/)

给你两个二进制字符串 `a` 和 `b` ，以二进制字符串的形式返回它们的和。

示例 1：

```txt
输入:a = "11", b = "1"
输出："100"
```

示例 2：

```txt
输入：a = "1010", b = "1011"
输出："10101"
```

---

提示：

- `1 <= a.length, b.length <= 10^4`
- `a` 和 `b` 仅由字符 `'0'` 或 `'1'` 组成
- 字符串如果不是 `"0"` ，就不含前导零

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
