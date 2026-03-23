# [0016. 最接近的三数之和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0016.%20%E6%9C%80%E6%8E%A5%E8%BF%91%E7%9A%84%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 双指针](#2--s1---排序--双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/3sum-closest/)

给你一个长度为 `n` 的整数数组 `nums` 和一个目标值 `target`。请你从 `nums` 中选出三个整数，使它们的和与 `target` 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

---

示例 1：

```txt
输入：nums = [-1, 2, 1, -4], target = 1
输出：2
```

解释：与 target 最接近的和是 2 => `-1 + 2 + 1 = 2`。

---

示例 2：

```txt
输入：nums = [0, 0, 0], target = 1
输出：0
```

解释：与 target 最接近的和是 0 => `0 + 0 + 0 = 0`。

---

提示：

- `3 <= nums.length <= 1000`
- `-1000 <= nums[i] <= 1000`
- `-10^4 <= target <= 10^4`

## 2. 🎯 s.1 - 排序 + 双指针

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，排序 $O(n \log n)$，外层枚举 $O(n)$，内层双指针 $O(n)$，整体 $O(n^2)$ 主导
- 空间复杂度：$O(\log n)$，排序递归栈空间

算法思路：

- 先对数组升序排序，初始化最接近值 `closest` 为前三个数之和
- 固定第一个数 `nums[i]`，左右双指针 `left = i+1`、`right = n-1` 向中收缩
- 每次计算三数之和 `sum`，若 `|sum - target|` 更小则更新 `closest`
- `sum < target` 则 `left++`（让和变大），`sum > target` 则 `right--`（让和变小），`sum == target` 则直接返回
