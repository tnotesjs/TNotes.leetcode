# [3514. 不同 XOR 三元组的数目 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3514.%20%E4%B8%8D%E5%90%8C%20XOR%20%E4%B8%89%E5%85%83%E7%BB%84%E7%9A%84%E6%95%B0%E7%9B%AE%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-unique-xor-triplets-ii/)

给你一个整数数组 `nums` 。

**XOR 三元组** 定义为三个元素的异或值 `nums[i] XOR nums[j] XOR nums[k]`，其中 `i <= j <= k`。

返回所有可能三元组 `(i, j, k)` 中 **不同** 的 XOR 值的数量。

---

- **示例 1：**

**输入：** nums = [1,3]

**输出：** 2

**解释：**

所有可能的 XOR 三元组值为：

- `(0, 0, 0) → 1 XOR 1 XOR 1 = 1`
- `(0, 0, 1) → 1 XOR 1 XOR 3 = 3`
- `(0, 1, 1) → 1 XOR 3 XOR 3 = 1`
- `(1, 1, 1) → 3 XOR 3 XOR 3 = 3`

不同的 XOR 值为 `{1, 3}` 。因此输出为 2 。

---

- **示例 2：**

**输入：** nums = [6,7,8,9]

**输出：** 4

**解释：**

不同的 XOR 值为 `{6, 7, 8, 9}` 。因此输出为 4 。

---

**提示：**

- `1 <= nums.length <= 1500`
- `1 <= nums[i] <= 1500`

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
