# [1685. 有序数组中差绝对值之和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1685.%20%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E5%B7%AE%E7%BB%9D%E5%AF%B9%E5%80%BC%E4%B9%8B%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-absolute-differences-in-a-sorted-array/)

给你一个 非递减 有序整数数组 `nums`。

请你建立并返回一个整数数组 `result`，它跟 `nums` 长度相同，且`result[i]` 等于 `nums[i]` 与数组中所有其他元素差的绝对值之和。

换句话说， `result[i]` 等于 `sum(|nums[i]-nums[j]|)`，其中 `0 <= j < nums.length` 且 `j != i` （下标从 0 开始）。

---

示例 1：

```txt
输入：nums = [2,3,5]
输出：[4,3,5]
解释：假设数组下标从 0 开始，那么
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4，
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3，
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5。
```

示例 2：

```txt
输入：nums = [1,4,6,8,10]
输出：[24,15,13,15,21]
```

---

提示：

- `2 <= nums.length <= 10^5`
- `1 <= nums[i] <= nums[i + 1] <= 10^4`

## 2. 🎯 s.1 - 前缀和

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是数组长度
- 空间复杂度：$O(n)$，前缀和数组

算法思路：

- 数组有序，对于 nums[i]：左边元素都 ≤ nums[i]，右边元素都 ≥ nums[i]
- result[i] = nums[i] × i - leftSum + rightSum - nums[i] × (n - i - 1)
- 使用前缀和快速计算 leftSum 和 rightSum
