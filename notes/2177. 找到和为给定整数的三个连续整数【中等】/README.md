# [2177. 找到和为给定整数的三个连续整数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2177.%20%E6%89%BE%E5%88%B0%E5%92%8C%E4%B8%BA%E7%BB%99%E5%AE%9A%E6%95%B4%E6%95%B0%E7%9A%84%E4%B8%89%E4%B8%AA%E8%BF%9E%E7%BB%AD%E6%95%B4%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-three-consecutive-integers-that-sum-to-a-given-number/)

给你一个整数 `num` ，请你返回三个连续的整数，它们的 和 为 `num` 。如果 `num` 无法被表示成三个连续整数的和，请你返回一个 空 数组。

---

- 示例 1：

```txt
输入：num = 33
输出：[10,11,12]
解释：33 可以表示为 10 + 11 + 12 = 33 。
10, 11, 12 是 3 个连续整数，所以返回 [10, 11, 12] 。
```

- 示例 2：

```txt
输入：num = 4
输出：[]
解释：没有办法将 4 表示成 3 个连续整数的和。
```

---

提示：

- `0 <= num <= 10^15`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
