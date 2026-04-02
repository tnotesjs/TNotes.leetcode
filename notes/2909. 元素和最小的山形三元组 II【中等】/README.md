# [2909. 元素和最小的山形三元组 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2909.%20%E5%85%83%E7%B4%A0%E5%92%8C%E6%9C%80%E5%B0%8F%E7%9A%84%E5%B1%B1%E5%BD%A2%E4%B8%89%E5%85%83%E7%BB%84%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 前后缀最小值](#2--s1---前后缀最小值)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-sum-of-mountain-triplets-ii/)

给你一个下标从 0 开始的整数数组 `nums`。

如果下标三元组 `(i, j, k)` 满足下述全部条件，则认为它是一个 山形三元组 ：

- `i < j < k`
- `nums[i] < nums[j]` 且 `nums[k] < nums[j]`

请你找出 `nums` 中 元素和最小 的山形三元组，并返回其 元素和。如果不存在满足条件的三元组，返回 `-1`。

---

示例 1：

```txt
输入：nums = [8,6,1,5,3]
输出：9
解释：三元组 (2, 3, 4) 是一个元素和等于 9 的山形三元组，因为：
- 2 < 3 < 4
- nums[2] < nums[3] 且 nums[4] < nums[3]
这个三元组的元素和等于 nums[2] + nums[3] + nums[4] = 9。可以证明不存在元素和小于 9 的山形三元组。
```

示例 2：

```txt
输入：nums = [5,4,8,7,10,2]
输出：13
解释：三元组 (1, 3, 5) 是一个元素和等于 13 的山形三元组，因为：
- 1 < 3 < 5
- nums[1] < nums[3] 且 nums[5] < nums[3]
这个三元组的元素和等于 nums[1] + nums[3] + nums[5] = 13。可以证明不存在元素和小于 13 的山形三元组。
```

示例 3：

```txt
输入：nums = [6,5,4,3,4,5]
输出：-1
解释：可以证明 nums 中不存在山形三元组。
```

---

提示：

- `3 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^8`

## 2. 🎯 s.1 - 前后缀最小值

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$，存储后缀最小值数组

算法思路：

- 预处理后缀最小值数组 `rightMin[i]`，表示 `nums[i..n-1]` 的最小值
- 从左到右遍历，维护前缀最小值 `leftMin`
- 对每个山峰 j，若 `leftMin < nums[j]` 且 `rightMin[j+1] < nums[j]`，则更新答案
