# [0035. 搜索插入位置【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0035.%20%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找](#2--s1---二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/search-insert-position/)

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。

---

示例 1：

```txt
输入: nums = [1, 3, 5, 6], target = 5
输出: 2
```

---

示例 2：

```txt
输入: nums = [1, 3, 5, 6], target = 2
输出: 1
```

---

示例 3：

```txt
输入: nums = [1, 3, 5, 6], target = 7
输出: 4
```

---

提示：

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` 为无重复元素的升序排列数组
- `-10^4 <= target <= 10^4`

## 2. 🎯 s.1 - 二分查找

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log n)$，其中 $n$ 是数组 `nums` 的长度，每次循环都将搜索区间缩小一半
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 因为数组升序且无重复元素，答案要么是 `target` 所在下标，要么是第一个大于 `target` 的元素下标
- 如果 `target` 大于最后一个元素，那么插入位置只能是数组末尾，可以直接返回 `n`
- 否则在闭区间 `[0, n - 1]` 上做二分查找，始终让答案保留在当前搜索区间内
- 如果 `target > nums[mid]`，说明答案一定在右半区，令 `left = mid + 1`
- 如果 `target <= nums[mid]`，说明 `mid` 仍可能是答案，收缩右边界为 `right = mid`
- 当 `left == right` 时，找到的就是第一个大于等于 `target` 的位置，也就是目标值下标或应插入的位置
