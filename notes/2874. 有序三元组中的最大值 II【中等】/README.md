# [2874. 有序三元组中的最大值 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2874.%20%E6%9C%89%E5%BA%8F%E4%B8%89%E5%85%83%E7%BB%84%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 一次遍历](#2--s1---一次遍历)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-value-of-an-ordered-triplet-ii/)

给你一个下标从 0 开始的整数数组 `nums`。

请你从所有满足 `i < j < k` 的下标三元组 `(i, j, k)` 中，找出并返回下标三元组的最大值。如果所有满足条件的三元组的值都是负数，则返回 `0`。

下标三元组 `(i, j, k)` 的值等于 `(nums[i] - nums[j]) * nums[k]`。

---

示例 1：

```txt
输入：nums = [12,6,1,2,7]
输出：77
解释：下标三元组 (0, 2, 4) 的值是 (nums[0] - nums[2]) * nums[4] = 77。
可以证明不存在值大于 77 的有序下标三元组。
```

示例 2：

```txt
输入：nums = [1,10,3,4,19]
输出：133
解释：下标三元组 (1, 2, 4) 的值是 (nums[1] - nums[2]) * nums[4] = 133。
可以证明不存在值大于 133 的有序下标三元组。
```

示例 3：

```txt
输入：nums = [1,2,3]
输出：0
解释：唯一的下标三元组 (0, 1, 2) 的值是一个负数，(nums[0] - nums[1]) * nums[2] = -3。因此，答案是 0。
```

---

提示：

- `3 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`

## 2. 🎯 s.1 - 一次遍历

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，一次遍历数组
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 从左到右遍历，每个元素 $x$ 依次扮演三个角色：
  1. 作为 $nums[k]$：用当前最大差值 $maxDiff \times x$ 更新答案
  2. 作为 $nums[j]$：用 $prefixMax - x$ 更新 $maxDiff$
  3. 作为 $nums[i]$：用 $x$ 更新 $prefixMax$
- 这样一次遍历即可求得 $(nums[i] - nums[j]) \times nums[k]$ 的最大值
