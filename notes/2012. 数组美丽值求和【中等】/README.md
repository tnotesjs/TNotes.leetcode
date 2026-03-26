# [2012. 数组美丽值求和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2012.%20%E6%95%B0%E7%BB%84%E7%BE%8E%E4%B8%BD%E5%80%BC%E6%B1%82%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-beauty-in-the-array/)

给你一个下标从 0 开始的整数数组 `nums`。对于每个下标 `i`（`1 <= i <= nums.length - 2`），`nums[i]` 的 美丽值 等于：

- `2`，对于所有 `0 <= j < i` 且 `i < k <= nums.length - 1`，满足 `nums[j] < nums[i] < nums[k]`
- `1`，如果满足 `nums[i - 1] < nums[i] < nums[i + 1]`，且不满足前面的条件
- `0`，如果上述条件全部不满足

返回符合 `1 <= i <= nums.length - 2` 的所有 `nums[i]` 的 美丽值的总和。

---

示例 1：

```txt
输入：nums = [1,2,3]
输出：2
解释：对于每个符合范围 1 <= i <= 1 的下标 i :
- nums[1] 的美丽值等于 2
```

示例 2：

```txt
输入：nums = [2,4,6,4]
输出：1
解释：对于每个符合范围 1 <= i <= 2 的下标 i :
- nums[1] 的美丽值等于 1
- nums[2] 的美丽值等于 0
```

示例 3：

```txt
输入：nums = [3,2,1]
输出：0
解释：对于每个符合范围 1 <= i <= 1 的下标 i :
- nums[1] 的美丽值等于 0
```

---

提示：

- `3 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## 2. 🎯 s.1 - 前缀最大值 + 后缀最小值

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$，前缀最大值和后缀最小值数组各占 $O(n)$

算法思路：

- 预处理 `prefixMax[i]` 表示 `nums[0..i]` 的最大值，`suffixMin[i]` 表示 `nums[i..n-1]` 的最小值
- 遍历中间元素 `i`（1 到 n-2），若 `prefixMax[i-1] < nums[i] < suffixMin[i+1]` 则美丽值 +2
- 否则若 `nums[i-1] < nums[i] < nums[i+1]` 则美丽值 +1
