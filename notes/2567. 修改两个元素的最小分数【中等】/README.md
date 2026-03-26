# [2567. 修改两个元素的最小分数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2567.%20%E4%BF%AE%E6%94%B9%E4%B8%A4%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E6%9C%80%E5%B0%8F%E5%88%86%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-score-by-changing-two-elements/)

给你一个下标从 0 开始的整数数组 `nums`。

- `nums` 的 最小 得分是满足 `0 <= i < j < nums.length` 的 `|nums[i] - nums[j]|` 的最小值。
- `nums`的 最大 得分是满足 `0 <= i < j < nums.length` 的 `|nums[i] - nums[j]|` 的最大值。
- `nums` 的分数是 最大 得分与 最小 得分的和。

我们的目标是最小化 `nums` 的分数。你 最多 可以修改 `nums` 中 2 个元素的值。

请你返回修改 `nums` 中 至多两个 元素的值后，可以得到的 最小分数。

`|x|` 表示 `x` 的绝对值。

---

示例 1：

```txt
输入：nums = [1,4,3]
输出：0

解释：
将 nums[1] 和 nums[2] 的值改为 1，nums 变为 [1,1,1]。|nums[i] - nums[j]| 的值永远为 0，所以我们返回 0 + 0 = 0。
```

示例 2：

```txt
输入：nums = [1,4,7,8,5]
输出：3

解释：
将 nums[0] 和 nums[1] 的值变为 6，nums 变为 [6,6,7,8,5]。
最小得分是 i = 0 且 j = 1 时得到的 |nums[i] - nums[j]| = |6 - 6| = 0。
最大得分是 i = 3 且 j = 4 时得到的 |nums[i] - nums[j]| = |8 - 5| = 3。
最大得分与最小得分之和为 3。这是最优答案。
```

---

提示：

- `3 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 排序 + 贪心

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \log N)$，排序的时间复杂度
- 空间复杂度：$O(\log N)$，排序的栈空间

算法思路：

- 排序后，修改 2 个元素可以使最小得分为 0（将它们改为已有的值即可产生重复）
- 最大得分取决于剩余元素的范围，考虑三种方案：去掉最小的两个、去掉最大的两个、各去掉一个
- 取三种方案的最小值即为答案
