# [3229. 使数组等于目标数组所需的最少操作次数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3229.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E7%AD%89%E4%BA%8E%E7%9B%AE%E6%A0%87%E6%95%B0%E7%BB%84%E6%89%80%E9%9C%80%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-operations-to-make-array-equal-to-target/)

给你两个长度相同的正整数数组 `nums` 和 `target`。

在一次操作中，你可以选择 `nums` 的任何子数组，并将该子数组内的每个元素的值增加或减少 1。

返回使 `nums` 数组变为 `target` 数组所需的 **最少** 操作次数。

---

- **示例 1：**

**输入：** nums = [3,5,1,2], target = [4,6,2,4]

**输出：** 2

**解释：**

执行以下操作可以使 `nums` 等于 `target`：

- `nums[0..3]` 增加 1，`nums = [4,6,2,3]`。
- `nums[3..3]` 增加 1，`nums = [4,6,2,4]`。

---

- **示例 2：**

**输入：** nums = [1,3,2], target = [2,1,4]

**输出：** 5

**解释：**

执行以下操作可以使 `nums` 等于 `target`：

- `nums[0..0]` 增加 1，`nums = [2,3,2]`。
- `nums[1..1]` 减少 1，`nums = [2,2,2]`。
- `nums[1..1]` 减少 1，`nums = [2,1,2]`。
- `nums[2..2]` 增加 1，`nums = [2,1,3]`。
- `nums[2..2]` 增加 1，`nums = [2,1,4]`。

---

**提示：**

- `1 <= nums.length == target.length <= 10^5`
- `1 <= nums[i], target[i] <= 10^8`

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
