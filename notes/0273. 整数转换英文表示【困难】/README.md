# [0273. 整数转换英文表示【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0273.%20%E6%95%B4%E6%95%B0%E8%BD%AC%E6%8D%A2%E8%8B%B1%E6%96%87%E8%A1%A8%E7%A4%BA%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/integer-to-english-words/)

将非负整数 `num` 转换为其对应的英文表示。

---

- 示例 1：

```txt
输入：num = 123
输出："One Hundred Twenty Three"
```

- 示例 2：

```txt
输入：num = 12345
输出："Twelve Thousand Three Hundred Forty Five"
```

- 示例 3：

```txt
输入：num = 1234567
输出："One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

---

提示：

- `0 <= num <= 2^31 - 1`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
