# [0033. 搜索旋转排序数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0033.%20%E6%90%9C%E7%B4%A2%E6%97%8B%E8%BD%AC%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找](#2--s1---二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

整数数组 `nums` 按升序排列，数组中的值 互不相同。

在传递给函数之前，`nums` 在预先未知的某个下标 `k`（`0 <= k < nums.length`）上进行了 向左旋转，使数组变为 `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`（下标 从 0 开始 计数）。例如， `[0,1,2,4,5,6,7]` 下标 `3` 上向左旋转后可能变为 `[4,5,6,7,0,1,2]`。

给你 旋转后 的数组 `nums` 和一个整数 `target`，如果 `nums` 中存在这个目标值 `target`，则返回它的下标，否则返回 `-1`。

你必须设计一个时间复杂度为 `O(log n)` 的算法解决此问题。

---

示例 1：

```txt
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```

示例 2：

```txt
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
```

示例 3：

```txt
输入：nums = [1], target = 0
输出：-1
```

---

提示：

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- `nums` 中的每个值都 独一无二
- 题目数据保证 `nums` 在预先未知的某个下标上进行了旋转
- `-10^4 <= target <= 10^4`

## 2. 🎯 s.1 - 二分查找

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log n)$，每次二分排除半个搜索序列
- 空间复杂度：$O(1)$，只使用了常数级别的额外变量

算法思路：

- 旋转排序数组将一个升序数组分成两段，对于任意中间点 `mid`，左半 `[left, mid]` 和右半 `[mid, right]` 中必有一半是有序的
- 判断左半是否有序：`nums[left] <= nums[mid]`
  - 满足：若 target 在 `[nums[left], nums[mid])` 内，就在左半，否则去右半
  - 不满足：右半有序，若 target 在 `(nums[mid], nums[right]]` 内，就在右半，否则去左半
- 循环结束未命中则返回 `-1`
