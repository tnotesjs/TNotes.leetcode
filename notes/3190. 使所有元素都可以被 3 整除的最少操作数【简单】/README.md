# [3190. 使所有元素都可以被 3 整除的最少操作数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3190.%20%E4%BD%BF%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0%E9%83%BD%E5%8F%AF%E4%BB%A5%E8%A2%AB%203%20%E6%95%B4%E9%99%A4%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/)

给你一个整数数组 `nums` 。一次操作中，你可以将 `nums` 中的 **任意** 一个元素增加或者减少 1 。

请你返回将 `nums` 中所有元素都可以被 3 整除的 **最少** 操作次数。

---

- **示例 1：**

**输入：** nums = [1,2,3,4]

**输出：** 3

**解释：**

通过以下 3 个操作，数组中的所有元素都可以被 3 整除：

- 将 1 减少 1 。
- 将 2 增加 1 。
- 将 4 减少 1 。

---

- **示例 2：**

**输入：** nums = [3,6,9]

**输出：** 0

---

**提示：**

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

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
