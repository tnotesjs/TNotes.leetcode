# [0795. 区间子数组个数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0795.%20%E5%8C%BA%E9%97%B4%E5%AD%90%E6%95%B0%E7%BB%84%E4%B8%AA%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 计数](#2--s1---计数)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-subarrays-with-bounded-maximum/)

给你一个整数数组 `nums` 和两个整数：`left` 及 `right`。找出 `nums` 中连续、非空且其中最大元素在范围 `[left, right]` 内的子数组，并返回满足条件的子数组的个数。

生成的测试用例保证结果符合 32-bit 整数范围。

---

示例 1：

```txt
输入：nums = [2,1,4,3], left = 2, right = 3
输出：3
解释：满足条件的三个子数组：[2], [2, 1], [3]
```

示例 2：

```txt
输入：nums = [2,9,2,5,6], left = 2, right = 8
输出：7
```

---

提示：

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= left <= right <= 10^9`

## 2. 🎯 s.1 - 计数

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(1)$

算法思路：

- 最大值在 [left, right] 范围内的子数组个数 = 最大值 <= right 的子数组数 - 最大值 <= left-1 的子数组数
- `count(bound)` 统计最大值 <= bound 的子数组个数，维护当前连续满足条件的长度累加
