# [1749. 任意子数组和的绝对值的最大值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1749.%20%E4%BB%BB%E6%84%8F%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C%E7%9A%84%E7%BB%9D%E5%AF%B9%E5%80%BC%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/)

给你一个整数数组 `nums`。一个子数组 `[numsl, numsl+1, ..., numsr-1, numsr]` 的 和的绝对值 为 `abs(numsl + numsl+1 + ... + numsr-1 + numsr)`。

请你找出 `nums` 中 和的绝对值 最大的任意子数组（可能为空），并返回该 最大值。

`abs(x)` 定义如下：

- 如果 `x` 是负整数，那么 `abs(x) = -x`。
- 如果 `x` 是非负整数，那么 `abs(x) = x`。

---

示例 1：

```txt
输入：nums = [1,-3,2,3,-4]
输出：5
解释：子数组 [2,3] 和的绝对值最大，为 abs(2+3) = abs(5) = 5。
```

示例 2：

```txt
输入：nums = [2,-5,1,-4,3,-2]
输出：8
解释：子数组 [-5,1,-4] 和的绝对值最大，为 abs(-5+1-4) = abs(-8) = 8。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## 2. 🎯 s.1 - Kadane 变体

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 同时维护子数组的最大和和最小和
- 结果为 max(最大和, |最小和|)
- 这是 Kadane 算法的变体，同时跟踪序列的最大值和最小值
