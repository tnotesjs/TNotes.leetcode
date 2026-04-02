# [2875. 无限数组的最短子数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2875.%20%E6%97%A0%E9%99%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E7%9F%AD%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 滑动窗口 + 取模](#2--s1---滑动窗口--取模)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-size-subarray-in-infinite-array/)

给你一个下标从 0 开始的数组 `nums` 和一个整数 `target`。

下标从 0 开始的数组 `infinite_nums` 是通过无限地将 nums 的元素追加到自己之后生成的。

请你从 `infinite_nums` 中找出满足 元素和 等于 `target` 的 最短 子数组，并返回该子数组的长度。如果不存在满足条件的子数组，返回 `-1`。

---

示例 1：

```txt
输入：nums = [1,2,3], target = 5
输出：2
解释：在这个例子中 infinite_nums = [1,2,3,1,2,3,1,2,...]。
区间 [1,2] 内的子数组的元素和等于 target = 5，且长度 length = 2。
可以证明，当元素和等于目标值 target = 5 时，2 是子数组的最短长度。
```

示例 2：

```txt
输入：nums = [1,1,1,2,3], target = 4
输出：2
解释：在这个例子中 infinite_nums = [1,1,1,2,3,1,1,1,2,3,1,1,...].
区间 [4,5] 内的子数组的元素和等于 target = 4，且长度 length = 2。
可以证明，当元素和等于目标值 target = 4 时，2 是子数组的最短长度。
```

示例 3：

```txt
输入：nums = [2,4,6,8], target = 3
输出：-1
解释：在这个例子中 infinite_nums = [2,4,6,8,2,4,6,8,...]。
可以证明，不存在元素和等于目标值 target = 3 的子数组。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `1 <= target <= 10^9`

## 2. 🎯 s.1 - 滑动窗口 + 取模

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，在双倍数组上进行一次滑动窗口
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 计算数组总和 $totalSum$，将 $target$ 分解为 $fullCycles \times totalSum + remainder$
- 若 $remainder = 0$，直接返回 $fullCycles \times n$
- 否则在逻辑上的双倍数组 $nums + nums$ 上使用滑动窗口，找和恰好为 $remainder$ 的最短子数组
- 最终答案为 $fullCycles \times n + minLen$
