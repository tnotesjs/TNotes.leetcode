# [0738. 单调递增的数字【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0738.%20%E5%8D%95%E8%B0%83%E9%80%92%E5%A2%9E%E7%9A%84%E6%95%B0%E5%AD%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心](#2--s1---贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/monotone-increasing-digits/)

当且仅当每个相邻位数上的数字 `x` 和 `y` 满足 `x <= y` 时，我们称这个整数是单调递增的。

给定一个整数 `n`，返回 小于或等于 `n` 的最大数字，且数字呈 单调递增。

---

示例 1：

```txt
输入: n = 10
输出: 9
```

示例 2：

```txt
输入: n = 1234
输出: 1234
```

示例 3：

```txt
输入: n = 332
输出: 299
```

---

提示：

- `0 <= n <= 10^9`

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(d)$，其中 d 是数字位数
- 空间复杂度：$O(d)$

算法思路：

- 从右向左扫描，若出现逆序（`digits[i] < digits[i-1]`），将 `digits[i-1]` 减 1 并记录位置
- 从记录位置开始将后续所有位置置为 9
