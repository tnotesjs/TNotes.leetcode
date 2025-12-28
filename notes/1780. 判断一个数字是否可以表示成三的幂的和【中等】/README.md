# [1780. 判断一个数字是否可以表示成三的幂的和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1780.%20%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E6%95%B0%E5%AD%97%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E8%A1%A8%E7%A4%BA%E6%88%90%E4%B8%89%E7%9A%84%E5%B9%82%E7%9A%84%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-number-is-a-sum-of-powers-of-three/)

给你一个整数 `n` ，如果你可以将 `n` 表示成若干个不同的三的幂之和，请你返回 `true` ，否则请返回 `false`。

对于一个整数 `y` ，如果存在整数 `x` 满足 `y == 3^x` ，我们称这个整数 `y` 是三的幂。

---

示例 1：

```txt
输入：n = 12
输出：true
解释：12 = 31 + 32
```

示例 2：

```txt
输入：n = 91
输出：true
解释：91 = 30 + 32 + 34
```

示例 3：

```txt
输入：n = 21
输出：false
```

---

提示：

- `1 <= n <= 10^7`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
