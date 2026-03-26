# [2809. 使数组和小于等于 x 的最少时间【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2809.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E5%92%8C%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E%20x%20%E7%9A%84%E6%9C%80%E5%B0%91%E6%97%B6%E9%97%B4%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-time-to-make-array-sum-at-most-x/)

给你两个长度相等下标从 0 开始的整数数组 `nums1` 和 `nums2`。每一秒，对于所有下标 `0 <= i < nums1.length`，`nums1[i]` 的值都增加 `nums2[i]`。操作 完成后，你可以进行如下操作：

- 选择任一满足 `0 <= i < nums1.length` 的下标 `i`，并使 `nums1[i] = 0`。

同时给你一个整数 `x`。

请你返回使 `nums1` 中所有元素之和 小于等于 `x` 所需要的 最少 时间，如果无法实现，那么返回 `-1`。

---

示例 1：

```txt
输入：nums1 = [1,2,3], nums2 = [1,2,3], x = 4
输出：3
解释：
第 1 秒，我们对 i = 0 进行操作，得到 nums1 = [0,2+2,3+3] = [0,4,6]。
第 2 秒，我们对 i = 1 进行操作，得到 nums1 = [0+1,0,6+3] = [1,0,9]。
第 3 秒，我们对 i = 2 进行操作，得到 nums1 = [1+1,0+2,0] = [2,2,0]。
现在 nums1 的和为 4。不存在更少次数的操作，所以我们返回 3。
```

---

示例 2：

```txt
输入：nums1 = [1,2,3], nums2 = [3,3,3], x = 4
输出：-1
解释：不管如何操作，nums1 的和总是会超过 x。
```

---

提示：

- `1 <= nums1.length <= 10^3`
- `1 <= nums1[i] <= 10^3`
- `0 <= nums2[i] <= 10^3`
- `nums1.length == nums2.length`
- `0 <= x <= 10^6`

## 2. 🎯 s.1 - 动态规划 + 排序

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，双重循环的 0-1 背包
- 空间复杂度：$O(n)$，一维 dp 数组

算法思路：

- 经过 t 秒不重置时，总和为 $\sum nums1[i] + t \cdot \sum nums2[i]$
- 在第 j 秒重置元素 i 可节省 $nums1[i] + j \cdot nums2[i]$
- 按 nums2 升序排序后，用 0-1 背包求选 j 个元素重置的最大总节省 dp[j]
- 枚举 t = 0..n，若 $\text{sum1} + \text{sum2} \cdot t - dp[t] \leq x$ 则返回 t
