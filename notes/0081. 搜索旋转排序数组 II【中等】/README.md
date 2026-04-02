# [0081. 搜索旋转排序数组 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0081.%20%E6%90%9C%E7%B4%A2%E6%97%8B%E8%BD%AC%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找](#2--s1---二分查找)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/)

已知存在一个按非降序排列的整数数组 `nums`，数组中的值不必互不相同。

在传递给函数之前，`nums` 在预先未知的某个下标 `k`（`0 <= k < nums.length`）上进行了 旋转，使数组变为 `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`（下标 从 0 开始 计数）。例如， `[0,1,2,4,4,4,5,6,6,7]` 在下标 `5` 处经旋转后可能变为 `[4,5,6,6,7,0,1,2,4,4]`。

给你 旋转后 的数组 `nums` 和一个整数 `target`，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 `nums` 中存在这个目标值 `target`，则返回 `true`，否则返回 `false`。

你必须尽可能减少整个操作步骤。

示例 1：

```txt
输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
```

示例 2：

```txt
输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false
```

---

提示：

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- 题目数据保证 `nums` 在预先未知的某个下标上进行了旋转
- `-10^4 <= target <= 10^4`

进阶：

- 此题与 [搜索旋转排序数组][1] 相似，但本题中的 `nums` 可能包含 重复 元素。这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？

## 2. 🎯 s.1 - 二分查找

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log n)$，最坏情况全部重复时退化为 $O(n)$
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 与 0033 类似，通过二分查找判断 target 在有序的哪一半
- 区别在于存在重复元素：当 `nums[left] == nums[mid]` 时无法判断有序半边，此时 `left++` 跳过重复值
- 否则根据左半段或右半段有序，判断 target 是否落在有序区间内，收缩边界

## 3. 🔗 引用

- [33. 搜索旋转排序数组][1]

[1]: https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
