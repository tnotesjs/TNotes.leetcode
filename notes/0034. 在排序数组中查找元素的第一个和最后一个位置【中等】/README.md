# [0034. 在排序数组中查找元素的第一个和最后一个位置【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0034.%20%E5%9C%A8%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9F%A5%E6%89%BE%E5%85%83%E7%B4%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%92%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BD%8D%E7%BD%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找左边界](#2--s1---二分查找左边界)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

给你一个按照非递减顺序排列的整数数组 `nums`，和一个目标值 `target`。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

你必须设计并实现时间复杂度为 `O(log n)` 的算法解决此问题。

---

示例 1：

```txt
输入：nums = [5, 7, 7, 8, 8, 10], target = 8
输出：[3, 4]
```

---

示例 2：

```txt
输入：nums = [5, 7, 7, 8, 8, 10], target = 6
输出：[-1, -1]
```

---

示例 3：

```txt
输入：nums = [], target = 0
输出：[-1, -1]
```

---

提示：

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `nums` 是一个非递减数组
- `-10^9 <= target <= 10^9`

## 2. 🎯 s.1 - 二分查找左边界

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log n)$，两次二分查找各一次
- 空间复杂度：$O(1)$，只使用了常数级别的额外变量

算法思路：

- 封装一个 `lowerBound(t)` 函数，返回数组中第一个大于等于 `t` 的元素下标（左闭右开区间 `[0, n)` 内二分）
- `start = lowerBound(target)`
  - 直接返回 `[-1, -1]` 的两种情况：
  - 情况 1：所有元素都 `< target`，会导致越界，即 `start = len(nums)`
  - 情况 2：未找到目标成员 `nums[start] != target`
  - 在 `start` 合法的情况下，再继续查找 `end`
- `end = lowerBound(target + 1) - 1`
  - `target + 1` 的左边界就是 `target` 的右边界 + 1
