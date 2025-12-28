# [0829. 连续整数求和【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0829.%20%E8%BF%9E%E7%BB%AD%E6%95%B4%E6%95%B0%E6%B1%82%E5%92%8C%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/consecutive-numbers-sum/)

给定一个正整数 `n`，返回 _连续正整数满足所有数字之和为 `n` 的组数_。

示例 1：

```txt
输入: n = 5
输出: 2
解释: 5 = 2 + 3，共有两组连续整数([5],[2,3])求和后为 5。
```

示例 2：

```txt
输入: n = 9
输出: 3
解释: 9 = 4 + 5 = 2 + 3 + 4
```

示例 3：

```txt
输入: n = 15
输出: 4
解释: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
```

---

提示：

- `1 <= n <= 10^9`​​​​​​​

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
