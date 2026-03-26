# [2552. 统计上升四元组【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2552.%20%E7%BB%9F%E8%AE%A1%E4%B8%8A%E5%8D%87%E5%9B%9B%E5%85%83%E7%BB%84%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-increasing-quadruplets/)

给你一个长度为 `n` 下标从 0 开始的整数数组 `nums`，它包含 `1` 到 `n` 的所有数字，请你返回上升四元组的数目。

如果一个四元组 `(i, j, k, l)` 满足以下条件，我们称它是上升的：

- `0 <= i < j < k < l < n` 且
- `nums[i] < nums[k] < nums[j] < nums[l]`。

---

示例 1：

```txt
输入：nums = [1,3,2,4,5]
输出：2
解释：
- 当 i = 0，j = 1，k = 2 且 l = 3 时，有 nums[i] < nums[k] < nums[j] < nums[l]。
- 当 i = 0，j = 1，k = 2 且 l = 4 时，有 nums[i] < nums[k] < nums[j] < nums[l]。
没有其他的四元组，所以我们返回 2。
```

示例 2：

```txt
输入：nums = [1,2,3,4]
输出：0
解释：只存在一个四元组 i = 0，j = 1，k = 2，l = 3，但是 nums[j] < nums[k]，所以我们返回 0。
```

---

提示：

- `4 <= nums.length <= 4000`
- `1 <= nums[i] <= nums.length`
- `nums` 中所有数字 互不相同，`nums` 是一个排列。

## 2. 🎯 s.1 - 枚举 + 前缀计数

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 n 是数组长度
- 空间复杂度：$O(n)$，辅助数组 f 的空间

算法思路：

- 需要统计满足 `i < j < k < l` 且 `nums[i] < nums[k] < nums[j] < nums[l]` 的四元组数
- 定义 `f[j]` = 满足 `i < j < k` 且 `nums[i] < nums[k] < nums[j]` 的 (i, k) 对数
- 从左到右枚举 k，维护 cntLess 表示 j 之前小于 `nums[k]` 的元素个数
- 若 `nums[j] < nums[k]`：k 作为 l 角色，`ans += f[j]`；同时 `cntLess++`
- 若 `nums[j] > nums[k]`：(j, k) 作为中间对，`f[j] += cntLess`
