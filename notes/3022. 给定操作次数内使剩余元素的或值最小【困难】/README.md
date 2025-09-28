# [3022. 给定操作次数内使剩余元素的或值最小【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3022.%20%E7%BB%99%E5%AE%9A%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E5%86%85%E4%BD%BF%E5%89%A9%E4%BD%99%E5%85%83%E7%B4%A0%E7%9A%84%E6%88%96%E5%80%BC%E6%9C%80%E5%B0%8F%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimize-or-of-remaining-elements-using-operations/)

给你一个下标从 **0** 开始的整数数组 `nums` 和一个整数 `k` 。

一次操作中，你可以选择 `nums` 中满足 `0 <= i < nums.length - 1` 的一个下标 `i` ，并将 `nums[i]` 和 `nums[i + 1]` 替换为数字 `nums[i] & nums[i + 1]` ，其中 `&` 表示按位 `AND` 操作。

请你返回 **至多** `k` 次操作以内，使 `nums` 中所有剩余元素按位 `OR` 结果的 **最小值** 。

---

- **示例 1：**

```txt
输入：nums = [3,5,3,2,7], k = 2
输出：3
解释：执行以下操作：
1. 将 nums[0] 和 nums[1] 替换为 (nums[0] & nums[1]) ，得到 nums 为 [1,3,2,7] 。
2. 将 nums[2] 和 nums[3] 替换为 (nums[2] & nums[3]) ，得到 nums 为 [1,3,2] 。
最终数组的按位或值为 3 。
3 是 k 次操作以内，可以得到的剩余元素的最小按位或值。
```

---

- **示例 2：**

```txt
输入：nums = [7,3,15,14,2,8], k = 4
输出：2
解释：执行以下操作：
1. 将 nums[0] 和 nums[1] 替换为 (nums[0] & nums[1]) ，得到 nums 为 [3,15,14,2,8] 。
2. 将 nums[0] 和 nums[1] 替换为 (nums[0] & nums[1]) ，得到 nums 为 [3,14,2,8] 。
3. 将 nums[0] 和 nums[1] 替换为 (nums[0] & nums[1]) ，得到 nums 为 [2,2,8] 。
4. 将 nums[1] 和 nums[2] 替换为 (nums[1] & nums[2]) ，得到 nums 为 [2,0] 。
最终数组的按位或值为 2 。
2 是 k 次操作以内，可以得到的剩余元素的最小按位或值。
```

---

- **示例 3：**

```txt
输入：nums = [10,7,10,3,9,14,9,4], k = 1
输出：15
解释：不执行任何操作，nums 的按位或值为 15 。
15 是 k 次操作以内，可以得到的剩余元素的最小按位或值。
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] < 2^30`
- `0 <= k < nums.length`

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
