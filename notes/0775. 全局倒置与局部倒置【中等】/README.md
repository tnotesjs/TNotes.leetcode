# [0775. 全局倒置与局部倒置【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0775.%20%E5%85%A8%E5%B1%80%E5%80%92%E7%BD%AE%E4%B8%8E%E5%B1%80%E9%83%A8%E5%80%92%E7%BD%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/global-and-local-inversions/)

给你一个长度为 `n` 的整数数组 `nums` ，表示由范围 `[0, n - 1]` 内所有整数组成的一个排列。

全局倒置 的数目等于满足下述条件不同下标对 `(i, j)` 的数目：

- `0 <= i < j < n`
- `nums[i] > nums[j]`

局部倒置 的数目等于满足下述条件的下标 `i` 的数目：

- `0 <= i < n - 1`
- `nums[i] > nums[i + 1]`

当数组 `nums` 中 全局倒置 的数量等于 局部倒置 的数量时，返回 `true` ；否则，返回 `false`。

---

- 示例 1：

```txt
输入：nums = [1,0,2]
输出：true
解释：有 1 个全局倒置，和 1 个局部倒置。
```

- 示例 2：

```txt
输入：nums = [1,2,0]
输出：false
解释：有 2 个全局倒置，和 1 个局部倒置。
```

---

提示：

- `n == nums.length`
- `1 <= n <= 10^5`
- `0 <= nums[i] < n`
- `nums` 中的所有整数 互不相同
- `nums` 是范围 `[0, n - 1]` 内所有数字组成的一个排列

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
