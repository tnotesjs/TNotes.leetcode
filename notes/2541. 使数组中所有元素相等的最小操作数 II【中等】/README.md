# [2541. 使数组中所有元素相等的最小操作数 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2541.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E4%B8%AD%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0%E7%9B%B8%E7%AD%89%E7%9A%84%E6%9C%80%E5%B0%8F%E6%93%8D%E4%BD%9C%E6%95%B0%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-operations-to-make-array-equal-ii/)

给你两个整数数组 `nums1` 和 `nums2` ，两个数组长度都是 `n` ，再给你一个整数 `k` 。你可以对数组 `nums1` 进行以下操作：

- 选择两个下标 `i` 和 `j` ，将 `nums1[i]` 增加 `k` ，将 `nums1[j]` 减少 `k` 。换言之，`nums1[i] = nums1[i] + k` 且 `nums1[j] = nums1[j] - k` 。

如果对于所有满足 `0 <= i < n` 都有 `num1[i] == nums2[i]` ，那么我们称 `nums1` **等于** `nums2` 。

请你返回使 `nums1` 等于 `nums2` 的 **最少** 操作数。如果没办法让它们相等，请你返回 `-1` 。

---

- **示例 1：**

```txt
输入：nums1 = [4,3,1,4], nums2 = [1,3,7,1], k = 3
输出：2
解释：我们可以通过 2 个操作将 nums1 变成 nums2 。
第 1 个操作：i = 2 ，j = 0 。操作后得到 nums1 = [1,3,4,4] 。
第 2 个操作：i = 2 ，j = 3 。操作后得到 nums1 = [1,3,7,1] 。
无法用更少操作使两个数组相等。
```

- **示例 2：**

```txt
输入：nums1 = [3,8,5,2], nums2 = [2,4,1,6], k = 1
输出：-1
解释：无法使两个数组相等。
```

---

**提示：**

- `n == nums1.length == nums2.length`
- `2 <= n <= 10^5`
- `0 <= nums1[i], nums2[j] <= 10^9`
- `0 <= k <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
