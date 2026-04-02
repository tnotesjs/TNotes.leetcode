# [0540. 有序数组中的单一元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0540.%20%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%8D%95%E4%B8%80%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找](#2--s1---二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/single-element-in-a-sorted-array/)

给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

请你找出并返回只出现一次的那个数。

你设计的解决方案必须满足 `O(log n)` 时间复杂度和 `O(1)` 空间复杂度。

---

示例 1：

```txt
输入: nums = [1,1,2,3,3,4,4,8,8]
输出: 2
```

示例 2：

```txt
输入: nums =  [3,3,7,7,10,11,11]
输出: 10
```

---

提示：

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`

## 2. 🎯 s.1 - 二分查找

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log n)$
- 空间复杂度：$O(1)$

算法思路：

- 将 `mid` 调整为偶数下标
- 若 `nums[mid] == nums[mid+1]`，单一元素在右半部分
- 否则在左半部分（含 `mid`）
