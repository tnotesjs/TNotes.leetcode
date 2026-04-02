# [1887. 使数组元素相等的减少操作次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1887.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E7%9B%B8%E7%AD%89%E7%9A%84%E5%87%8F%E5%B0%91%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序](#2--s1---排序)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reduction-operations-to-make-the-array-elements-equal/)

给你一个整数数组 `nums`，你的目标是令 `nums` 中的所有元素相等。完成一次减少操作需要遵照下面的几个步骤：

1. 找出 `nums` 中的 最大 值。记这个值为 `largest` 并取其下标 `i` （下标从 0 开始计数）。如果有多个元素都是最大值，则取最小的 `i`。
2. 找出 `nums` 中的 下一个最大 值，这个值 严格小于 `largest`，记为 `nextLargest`。
3. 将 `nums[i]` 减少到 `nextLargest`。

返回使 `nums` 中的所有元素相等的操作次数。

---

示例 1：

```txt
输入：nums = [5,1,3]
输出：3
解释：需要 3 次操作使 nums 中的所有元素相等：
1. largest = 5 下标为 0。nextLargest = 3。将 nums[0] 减少到 3。nums = [3,1,3]。
2. largest = 3 下标为 0。nextLargest = 1。将 nums[0] 减少到 1。nums = [1,1,3]。
3. largest = 3 下标为 2。nextLargest = 1。将 nums[2] 减少到 1。nums = [1,1,1]。
```

示例 2：

```txt
输入：nums = [1,1,1]
输出：0
解释：nums 中的所有元素已经是相等的。
```

示例 3：

```txt
输入：nums = [1,1,2,2,3]
输出：4
解释：需要 4 次操作使 nums 中的所有元素相等：
1. largest = 3 下标为 4。nextLargest = 2。将 nums[4] 减少到 2。nums = [1,1,2,2,2]。
2. largest = 2 下标为 2。nextLargest = 1。将 nums[2] 减少到 1。nums = [1,1,1,2,2]。
3. largest = 2 下标为 3。nextLargest = 1。将 nums[3] 减少到 1。nums = [1,1,1,1,2]。
4. largest = 2 下标为 4。nextLargest = 1。将 nums[4] 减少到 1。nums = [1,1,1,1,1]。
```

---

提示：

- `1 <= nums.length <= 5 * 10^4`
- `1 <= nums[i] <= 5 * 10^4`

## 2. 🎯 s.1 - 排序

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，排序的时间
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 排序后中位数是最优目标值（中位数定理）
- 计算所有元素到中位数的绝对差之和
- 这就是最少的操作次数
