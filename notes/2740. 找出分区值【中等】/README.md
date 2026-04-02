# [2740. 找出分区值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2740.%20%E6%89%BE%E5%87%BA%E5%88%86%E5%8C%BA%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序](#2--s1---排序)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-value-of-the-partition/)

给你一个 正 整数数组 `nums`。

将 `nums` 分成两个数组：`nums1` 和 `nums2`，并满足下述条件：

- 数组 `nums` 中的每个元素都属于数组 `nums1` 或数组 `nums2`。
- 两个数组都 非空。
- 分区值 最小。

分区值的计算方法是 `|max(nums1) - min(nums2)|`。

其中，`max(nums1)` 表示数组 `nums1` 中的最大元素，`min(nums2)` 表示数组 `nums2` 中的最小元素。

返回表示分区值的整数。

---

示例 1：

```txt
输入：nums = [1,3,2,4]
输出：1
解释：可以将数组 nums 分成 nums1 = [1,2] 和 nums2 = [3,4]。
- 数组 nums1 的最大值等于 2。
- 数组 nums2 的最小值等于 3。
分区值等于 |2 - 3| = 1。
可以证明 1 是所有分区方案的最小值。
```

示例 2：

```txt
输入：nums = [100,1,10]
输出：9
解释：可以将数组 nums 分成 nums1 = [10] 和 nums2 = [100,1]。
- 数组 nums1 的最大值等于 10。
- 数组 nums2 的最小值等于 1。
分区值等于 |10 - 1| = 9。
可以证明 9 是所有分区方案的最小值。
```

---

提示：

- `2 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 排序

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，排序开销
- 空间复杂度：$O(\log n)$，排序栈空间

算法思路：

- 排序后，最优分区一定是将排序后的数组在某个相邻元素之间一分为二
- 遍历排序后的数组，取相邻元素差的最小值即为答案
