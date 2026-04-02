# [2523. 范围内最接近的两个质数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2523.%20%E8%8C%83%E5%9B%B4%E5%86%85%E6%9C%80%E6%8E%A5%E8%BF%91%E7%9A%84%E4%B8%A4%E4%B8%AA%E8%B4%A8%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 埃拉托斯特尼筛法](#2--s1---埃拉托斯特尼筛法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/closest-prime-numbers-in-range/)

给你两个正整数 `left` 和 `right`，请你找到两个整数 `num1` 和 `num2`，它们满足：

- `left <= nums1 < nums2 <= right`。
- `nums1` 和 `nums2` 都是 质数（质数是指大于 1 且因子只有 1 和它本身的自然数）。
- `nums2 - nums1` 是满足上述条件的质数对中的 最小值。

请你返回正整数数组 `ans = [nums1, nums2]`。如果有多个整数对满足上述条件，请你返回 `nums1` 最小的质数对。如果不存在符合题意的质数对，请你返回 `[-1, -1]`。

---

示例 1：

```txt
输入：left = 10, right = 19
输出：[11,13]
解释：10 到 19 之间的质数为 11，13，17 和 19。
质数对的最小差值是 2，[11,13] 和 [17,19] 都可以得到最小差值。
由于 11 比 17 小，我们返回第一个质数对。
```

示例 2：

```txt
输入：left = 4, right = 6
输出：[-1,-1]
解释：给定范围内只有一个质数，所以题目条件无法被满足。
```

---

提示：

- `1 <= left <= right <= 10^6`

## 2. 🎯 s.1 - 埃拉托斯特尼筛法

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(R \log \log R)$，其中 $R$ 是 `right` 的值
- 空间复杂度：$O(R)$，筛法数组

算法思路：

- 用埃拉托斯特尼筛法预处理 $[0, \text{right}]$ 范围内的所有质数
- 遍历 $[\text{left}, \text{right}]$ 范围的质数，记录相邻质数对的最小差值
- 返回差值最小的质数对，若不存在则返回 $[-1, -1]$
