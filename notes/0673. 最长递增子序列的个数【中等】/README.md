# [0673. 最长递增子序列的个数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0673.%20%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97%E7%9A%84%E4%B8%AA%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 动态规划](#2--s1---动态规划)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-longest-increasing-subsequence/)

给定一个未排序的整数数组 `nums`， 返回最长递增子序列的个数。

注意 这个数列必须是 严格 递增的。

---

示例 1：

```txt
输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
```

示例 2：

```txt
输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
```

提示：

- `1 <= nums.length <= 2000`
- `-10^6 <= nums[i] <= 10^6`

## 2. 🎯 s.1 - 动态规划

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 n 是数组长度
- 空间复杂度：$O(n)$

算法思路：

- `dp[i]` 表示以 `nums[i]` 结尾的 LIS 长度，`cnt[i]` 表示对应的方案数
- 若 `dp[j]+1 > dp[i]`，更新长度并继承方案数；若等于，累加方案数
- 最终统计所有 `dp[i] == maxLen` 的 `cnt[i]` 之和
