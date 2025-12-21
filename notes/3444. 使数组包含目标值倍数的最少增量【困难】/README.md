# [3444. 使数组包含目标值倍数的最少增量【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3444.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E5%8C%85%E5%90%AB%E7%9B%AE%E6%A0%87%E5%80%BC%E5%80%8D%E6%95%B0%E7%9A%84%E6%9C%80%E5%B0%91%E5%A2%9E%E9%87%8F%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-increments-for-target-multiples-in-an-array/)

给你两个数组 `nums` 和 `target` 。

在一次操作中，你可以将 `nums` 中的任意一个元素递增 1 。

返回要使 `target` 中的每个元素在 `nums` 中 至少 存在一个倍数所需的 最少操作次数 。

---

- 示例 1：

输入： nums = [1,2,3], target = [4]

输出： 1

解释：

满足题目条件的最少操作次数是 1 。

- 将 3 增加到 4 ，需要 1 次操作，4 是目标值 4 的倍数。

---

- 示例 2：

输入： nums = [8,4], target = [10,5]

输出： 2

解释：

满足题目条件的最少操作次数是 2 。

- 将 8 增加到 10 ，需要 2 次操作，10 是目标值 5 和 10 的倍数。

---

- 示例 3：

输入： nums = [7,9,10], target = [7]

输出： 0

解释：

数组中已经包含目标值 7 的一个倍数，不需要执行任何额外操作。

---

提示：

- `1 <= nums.length <= 5 * 10^4`
- `1 <= target.length <= 4`
- `target.length <= nums.length`
- `1 <= nums[i], target[i] <= 10^4`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
