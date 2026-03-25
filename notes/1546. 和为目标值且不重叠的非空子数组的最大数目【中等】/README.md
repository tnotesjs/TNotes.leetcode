# [1546. 和为目标值且不重叠的非空子数组的最大数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1546.%20%E5%92%8C%E4%B8%BA%E7%9B%AE%E6%A0%87%E5%80%BC%E4%B8%94%E4%B8%8D%E9%87%8D%E5%8F%A0%E7%9A%84%E9%9D%9E%E7%A9%BA%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/)

给你一个数组 `nums` 和一个整数 `target`。

请你返回 非空不重叠 子数组的最大数目，且每个子数组中数字和都为 `target`。

---

示例 1：

```txt
输入：nums = [1,1,1,1,1], target = 2
输出：2

解释：
总共有 2 个不重叠子数组（加粗数字表示） [1,1,1,1,1]，它们的和为目标值 2。
```

示例 2：

```txt
输入：nums = [-1,3,5,1,4,2,-9], target = 6
输出：2

解释：
总共有 3 个子数组和为 6。
([5,1], [4,2], [3,5,1,4,2,-9]) 但只有前 2 个是不重叠的。
```

示例 3：

```txt
输入：nums = [-2,6,6,3,5,4,1,2,8], target = 10
输出：3
```

示例 4：

```txt
输入：nums = [0,0,0], target = 0
输出：3
```

---

提示：

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `0 <= target <= 10^6`

## 2. 🎯 s.1 - 贪心 + 前缀和

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是数组长度
- 空间复杂度：$O(n)$，哈希集合的空间

算法思路：

- 使用前缀和 + 哈希集合来检测和为 target 的子数组
- 贪心策略：一旦找到一个满足条件的子数组，立即选取并清空哈希集合
- 这样可以保证选取的子数组不重叠，且尽可能早地选取，为后续留出更多空间
