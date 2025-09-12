# [0560. 和为 K 的子数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0560.%20%E5%92%8C%E4%B8%BA%20K%20%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/subarray-sum-equals-k/)

给你一个整数数组 `nums` 和一个整数  `k` ，请你统计并返回 *该数组中和为  `k`  的子数组的个数* 。

子数组是数组中元素的连续非空序列。

---

- **示例 1：**

```txt
输入：nums = [1,1,1], k = 2
输出：2
```

- **示例 2：**

```txt
输入：nums = [1,2,3], k = 3
输出：2
```

---

**提示：**

- `1 <= nums.length <= 2 * 10^4`
- `-1000 <= nums[i] <= 1000`
- `-10^7 <= k <= 10^7`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
