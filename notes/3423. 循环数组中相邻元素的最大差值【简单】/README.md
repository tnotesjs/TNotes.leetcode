# [3423. 循环数组中相邻元素的最大差值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3423.%20%E5%BE%AA%E7%8E%AF%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9B%B8%E9%82%BB%E5%85%83%E7%B4%A0%E7%9A%84%E6%9C%80%E5%A4%A7%E5%B7%AE%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/)

给你一个 **循环** 数组 `nums` ，请你找出相邻元素之间的 **最大** 绝对差值。

---

**注意：** 一个循环数组中，第一个元素和最后一个元素是相邻的。

---

- **示例 1：**

**输入：** nums = [1,2,4]

**输出：** 3

**解释：**

由于 `nums` 是循环的，`nums[0]` 和 `nums[2]` 是相邻的，它们之间的绝对差值是最大值 `|4 - 1| = 3` 。

---

- **示例 2：**

**输入：** nums = [-5,-10,-5]

**输出：** 5

**解释：**

相邻元素 `nums[0]` 和 `nums[1]` 之间的绝对差值为最大值 `|-5 - (-10)| = 5` 。

---

**提示：**

- `2 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

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
