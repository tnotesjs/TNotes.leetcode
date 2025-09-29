# [3347. 执行操作后元素的最高频率 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3347.%20%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C%E5%90%8E%E5%85%83%E7%B4%A0%E7%9A%84%E6%9C%80%E9%AB%98%E9%A2%91%E7%8E%87%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-frequency-of-an-element-after-performing-operations-ii/)

给你一个整数数组 `nums` 和两个整数 `k` 和 `numOperations` 。

你必须对 `nums` 执行 **操作** `numOperations` 次。每次操作中，你可以：

- 选择一个下标 `i` ，它在之前的操作中 **没有** 被选择过。
- 将 `nums[i]` 增加范围 `[-k, k]` 中的一个整数。

在执行完所有操作以后，请你返回 `nums` 中出现 **频率最高** 元素的出现次数。

一个元素 `x` 的 **频率** 指的是它在数组中出现的次数。

---

- **示例 1：**

**输入：** nums = [1,4,5], k = 1, numOperations = 2

**输出：** 2

**解释：**

通过以下操作得到最高频率 2 ：

- 将 `nums[1]` 增加 0 ，`nums` 变为 `[1, 4, 5]` 。
- 将 `nums[2]` 增加 -1 ，`nums` 变为 `[1, 4, 4]` 。

---

- **示例 2：**

**输入：** nums = [5,11,20,20], k = 5, numOperations = 1

**输出：** 2

**解释：**

通过以下操作得到最高频率 2 ：

- 将 `nums[1]` 增加 0 。

---

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`
- `0 <= numOperations <= nums.length`

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
