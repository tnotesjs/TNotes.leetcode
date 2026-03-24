# [0633. 平方数之和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0633.%20%E5%B9%B3%E6%96%B9%E6%95%B0%E4%B9%8B%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-square-numbers/)

给定一个非负整数 `c`，你要判断是否存在两个整数 `a` 和 `b`，使得 `a^2 + b^2 = c`。

---

示例 1：

```txt
输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
```

示例 2：

```txt
输入：c = 3
输出：false
```

---

提示：

- `0 <= c <= 2^31 - 1`

## 2. 🎯 s.1 - 双指针

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\sqrt{c})$
- 空间复杂度：$O(1)$

算法思路：

- 初始化 `a = 0`、`b = floor(sqrt(c))`
- 若 `a² + b² == c` 则返回 true，小于则 `a++`，大于则 `b--`
