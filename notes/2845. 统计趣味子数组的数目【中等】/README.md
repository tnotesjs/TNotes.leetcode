# [2845. 统计趣味子数组的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2845.%20%E7%BB%9F%E8%AE%A1%E8%B6%A3%E5%91%B3%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-of-interesting-subarrays/)

给你一个下标从 0 开始的整数数组 `nums` ，以及整数 `modulo` 和整数 `k`。

请你找出并统计数组中 趣味子数组 的数目。

如果 子数组 `nums[l..r]` 满足下述条件，则称其为 趣味子数组 ：

- 在范围 `[l, r]` 内，设 `cnt` 为满足 `nums[i] % modulo == k` 的索引 `i` 的数量。并且 `cnt % modulo == k`。

以整数形式表示并返回趣味子数组的数目。

---

注意： 子数组是数组中的一个连续非空的元素序列。

---

- 示例 1：

```txt
输入：nums = [3,2,4], modulo = 2, k = 1
输出：3
解释：在这个示例中，趣味子数组分别是：
子数组 nums[0..0] ，也就是 [3]。
- 在范围 [0, 0] 内，只存在 1 个下标 i = 0 满足 nums[i] % modulo == k。
- 因此 cnt = 1 ，且 cnt % modulo == k。
子数组 nums[0..1] ，也就是 [3,2]。
- 在范围 [0, 1] 内，只存在 1 个下标 i = 0 满足 nums[i] % modulo == k。
- 因此 cnt = 1 ，且 cnt % modulo == k。
子数组 nums[0..2] ，也就是 [3,2,4]。
- 在范围 [0, 2] 内，只存在 1 个下标 i = 0 满足 nums[i] % modulo == k。
- 因此 cnt = 1 ，且 cnt % modulo == k。
可以证明不存在其他趣味子数组。因此，答案为 3。
```

- 示例 2：

```txt
输入：nums = [3,1,9,6], modulo = 3, k = 0
输出：2
解释：在这个示例中，趣味子数组分别是：
子数组 nums[0..3] ，也就是 [3,1,9,6]。
- 在范围 [0, 3] 内，只存在 3 个下标 i = 0, 2, 3 满足 nums[i] % modulo == k。
- 因此 cnt = 3 ，且 cnt % modulo == k。
子数组 nums[1..1] ，也就是 [1]。
- 在范围 [1, 1] 内，不存在下标满足 nums[i] % modulo == k。
- 因此 cnt = 0 ，且 cnt % modulo == k。
可以证明不存在其他趣味子数组，因此答案为 2。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= modulo <= 10^9`
- `0 <= k < modulo`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
