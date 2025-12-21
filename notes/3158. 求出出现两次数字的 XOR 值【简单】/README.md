# [3158. 求出出现两次数字的 XOR 值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3158.%20%E6%B1%82%E5%87%BA%E5%87%BA%E7%8E%B0%E4%B8%A4%E6%AC%A1%E6%95%B0%E5%AD%97%E7%9A%84%20XOR%20%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-xor-of-numbers-which-appear-twice/)

给你一个数组 `nums` ，数组中的数字 要么 出现一次，要么 出现两次。

请你返回数组中所有出现两次数字的按位 `XOR` 值，如果没有数字出现过两次，返回 0 。

---

- 示例 1：

输入： nums = [1,2,1,3]

输出： 1

解释：

`nums` 中唯一出现过两次的数字是 1 。

---

- 示例 2：

输入： nums = [1,2,3]

输出： 0

解释：

`nums` 中没有数字出现两次。

---

- 示例 3：

输入： nums = [1,2,2,1]

输出： 3

解释：

数字 1 和 2 出现过两次。`1 XOR 2 == 3` 。

---

提示：

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`
- `nums` 中每个数字要么出现过一次，要么出现过两次。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
