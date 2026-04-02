# [0713. 乘积小于 K 的子数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0713.%20%E4%B9%98%E7%A7%AF%E5%B0%8F%E4%BA%8E%20K%20%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 滑动窗口](#2--s1---滑动窗口)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/subarray-product-less-than-k/)

给你一个整数数组 `nums` 和一个整数 `k`，请你返回子数组内所有元素的乘积严格小于 `k` 的连续子数组的数目。

---

示例 1：

```txt
输入：nums = [10,5,2,6], k = 100
输出：8
解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2]、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
```

示例 2：

```txt
输入：nums = [1,2,3], k = 0
输出：0
```

提示：

- `1 <= nums.length <= 3 * 10^4`
- `1 <= nums[i] <= 1000`
- `0 <= k <= 10^6`

## 2. 🎯 s.1 - 滑动窗口

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(1)$

算法思路：

- 维护滑动窗口 `[left, right]`，窗口内乘积始终 < k
- 右指针扩展时乘入新元素，乘积 ≥ k 时收缩左指针
- 每次右指针移动后，新增的子数组数为 `right - left + 1`
