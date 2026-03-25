# [1027. 最长等差数列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1027.%20%E6%9C%80%E9%95%BF%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-arithmetic-subsequence/)

给你一个整数数组 `nums`，返回 `nums` 中最长等差子序列的长度。

回想一下，`nums` 的子序列是一个列表 `nums[i1], nums[i2], ..., nums[ik]`，且 `0 <= i1 < i2 < ... < ik <= nums.length - 1`。并且如果 `seq[i+1] - seq[i]`( `0 <= i < seq.length - 1`) 的值都相同，那么序列 `seq` 是等差的。

---

示例 1：

```txt
输入：nums = [3,6,9,12]
输出：4
解释：
整个数组是公差为 3 的等差数列。
```

示例 2：

```txt
输入：nums = [9,4,7,2,10]
输出：3
解释：
最长的等差子序列是 [4,7,10]。
```

示例 3：

```txt
输入：nums = [20,1,15,3,10,5,8]
输出：4
解释：
最长的等差子序列是 [20,15,10,5]。
```

---

提示：

- `2 <= nums.length <= 1000`
- `0 <= nums[i] <= 500`

## 2. 🎯 s.1 - 动态规划

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 $n$ 是数组的长度
- 空间复杂度：$O(n \cdot d)$，其中 $d$ 是不同公差的数量

算法思路：

- `dp[i][diff]` 表示以 `nums[i]` 结尾、公差为 `diff` 的等差数列的最大长度
- 对于每对 `(j, i)`，计算 `diff = nums[i] - nums[j]`，更新 `dp[i][diff] = dp[j][diff] + 1`
- 过程中维护全局最大值
