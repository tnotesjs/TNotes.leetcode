# [0698. 划分为k个相等的子集【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0698.%20%E5%88%92%E5%88%86%E4%B8%BAk%E4%B8%AA%E7%9B%B8%E7%AD%89%E7%9A%84%E5%AD%90%E9%9B%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/)

给定一个整数数组 `nums` 和一个正整数 `k`，找出是否有可能把这个数组分成 `k` 个非空子集，其总和都相等。

---

示例 1：

```txt
输入：nums = [4, 3, 2, 3, 5, 2, 1], k = 4
输出：True
说明：有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
```

示例 2：

```txt
输入: nums = [1,2,3,4], k = 3
输出: false
```

---

提示：

- `1 <= k <= len(nums) <= 16`
- `0 < nums[i] < 10000`
- 每个元素的频率在 `[1,4]` 范围内

## 2. 🎯 s.1 - 回溯 + 剪枝

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(k^n)$，其中 n 是数组长度，剪枝后实际远小于此
- 空间复杂度：$O(n)$

算法思路：

- 先计算目标和 target = sum / k，降序排序优先放大数
- 尝试将每个数放入 k 个桶中，超过 target 则回溯
- 剪枝：跳过当前值相同的桶（避免重复搜索）
