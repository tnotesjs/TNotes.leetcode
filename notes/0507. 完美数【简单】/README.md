# [0507. 完美数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0507.%20%E5%AE%8C%E7%BE%8E%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/perfect-number/)

对于一个 **正整数**，如果它和除了它自身以外的所有 **正因子** 之和相等，我们称它为 **「完美数」**。

给定一个 **整数** `n`， 如果是完美数，返回 `true`；否则返回 `false`。

---

- **示例 1：**

```txt
输入：num = 28
输出：true
解释：28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, 和 14 是 28 的所有正因子。
```

- **示例 2：**

```txt
输入：num = 7
输出：false
```

---

**提示：**

- `1 <= num <= 10^8`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
