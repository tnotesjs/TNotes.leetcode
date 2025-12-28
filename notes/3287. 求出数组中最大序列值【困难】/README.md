# [3287. 求出数组中最大序列值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3287.%20%E6%B1%82%E5%87%BA%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%BA%8F%E5%88%97%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-maximum-sequence-value-of-array/)

给你一个整数数组 `nums` 和一个 正 整数 `k`。

定义长度为 `2 * x` 的序列 `seq` 的 值 为：

- `(seq[0] OR seq[1] OR ... OR seq[x - 1]) XOR (seq[x] OR seq[x + 1] OR ... OR seq[2 * x - 1])`.

请你求出 `nums` 中所有长度为 `2 * k` 的 子序列 的 最大值。

> 子序列 是可以通过从另一个数组删除或不删除某些元素，但不更改其余元素的顺序得到的数组。

---

- 示例 1：

输入： nums = [2,6,7], k = 1

输出： 5

解释：

子序列 `[2, 7]` 的值最大，为 `2 XOR 7 = 5`。

---

- 示例 2：

输入： nums = [4,2,5,6,7], k = 2

输出： 2

解释：

子序列 `[4, 5, 6, 7]` 的值最大，为 `(4 OR 5) XOR (6 OR 7) = 2`。

---

提示：

- `2 <= nums.length <= 400`
- `1 <= nums[i] < 2^7`
- `1 <= k <= nums.length / 2`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
