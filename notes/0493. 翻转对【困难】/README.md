# [0493. 翻转对【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0493.%20%E7%BF%BB%E8%BD%AC%E5%AF%B9%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-pairs/)

给定一个数组 `nums`，如果 `i < j` 且 `nums[i] > 2*nums[j]` 我们就将 `(i, j)` 称作一个 重要翻转对。

你需要返回给定数组中的重要翻转对的数量。

---

示例 1：

```txt
输入: [1,3,2,3,1]
输出: 2
```

示例 2：

```txt
输入: [2,4,3,5,1]
输出: 3
```

注意:

1. 给定数组的长度不会超过`50000`。
2. 输入数组中的所有数字都在 32 位整数的表示范围内。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
