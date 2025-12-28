# [1556. 千位分隔数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1556.%20%E5%8D%83%E4%BD%8D%E5%88%86%E9%9A%94%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/thousand-separator/)

给你一个整数 `n`，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。

---

示例 1：

```txt
输入：n = 987
输出："987"
```

示例 2：

```txt
输入：n = 1234
输出："1.234"
```

示例 3：

```txt
输入：n = 123456789
输出："123.456.789"
```

示例 4：

```txt
输入：n = 0
输出："0"
```

---

提示：

- `0 <= n < 2^31`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
