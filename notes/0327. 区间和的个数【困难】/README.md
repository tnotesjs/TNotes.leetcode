# [0327. 区间和的个数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0327.%20%E5%8C%BA%E9%97%B4%E5%92%8C%E7%9A%84%E4%B8%AA%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-of-range-sum/)

给你一个整数数组  `nums` 以及两个整数  `lower` 和 `upper` 。求数组中，值位于范围 `[lower, upper]` （包含  `lower`  和  `upper`）之内的 **区间和的个数** 。

**区间和** `S(i, j)`  表示在  `nums`  中，位置从  `i`  到  `j`  的元素之和，包含  `i`  和  `j` (`i` ≤ `j`)。

**示例 1：**

```txt
输入：nums = [-2,5,-1], lower = -2, upper = 2
输出：3
解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。
```

- **示例 2：**

```txt
输入：nums = [0], lower = 0, upper = 0
输出：1
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`
- `-10^5 <= lower <= upper <= 10^5`
- 题目数据保证答案是一个 **32 位** 的整数

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
