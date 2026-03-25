# [0910. 最小差值 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0910.%20%E6%9C%80%E5%B0%8F%E5%B7%AE%E5%80%BC%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/smallest-range-ii/)

给你一个整数数组 `nums`，和一个整数 `k`。

对于每个下标 `i`（`0 <= i < nums.length`），将 `nums[i]` 变成 `nums[i] + k` 或 `nums[i] - k`。

`nums` 的 分数 是 `nums` 中最大元素和最小元素的差值。

在更改每个下标对应的值之后，返回 `nums` 的最小 分数。

---

示例 1：

```txt
输入：nums = [1], k = 0
输出：0
解释：分数 = max(nums) - min(nums) = 1 - 1 = 0。
```

示例 2：

```txt
输入：nums = [0,10], k = 2
输出：6
解释：将数组变为 [2, 8]。分数 = max(nums) - min(nums) = 8 - 2 = 6。
```

示例 3：

```txt
输入：nums = [1,3,6], k = 3
输出：3
解释：将数组变为 [4, 6, 3]。分数 = max(nums) - min(nums) = 6 - 3 = 3。
```

---

提示：

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^4`
- `0 <= k <= 10^4`

## 2. 🎯 s.1 - 排序 + 贪心

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 n 是数组长度
- 空间复杂度：$O(1)$

算法思路：

- 排序后枚举分割点 i，左侧 +k 右侧 -k
- 最大值为 `max(nums[i]+k, nums[n-1]-k)`，最小值为 `min(nums[0]+k, nums[i+1]-k)`
