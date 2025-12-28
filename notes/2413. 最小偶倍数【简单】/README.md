# [2413. 最小偶倍数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2413.%20%E6%9C%80%E5%B0%8F%E5%81%B6%E5%80%8D%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/smallest-even-multiple/)

给你一个正整数 `n` ，返回 `2` 和 `n` 的最小公倍数（正整数）。

---

示例 1：

```txt
输入：n = 5
输出：10
解释：5 和 2 的最小公倍数是 10。
```

示例 2：

```txt
输入：n = 6
输出：6
解释：6 和 2 的最小公倍数是 6。注意数字会是它自身的倍数。
```

---

提示：

- `1 <= n <= 150`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
