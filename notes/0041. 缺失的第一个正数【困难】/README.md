# [0041. 缺失的第一个正数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0041.%20%E7%BC%BA%E5%A4%B1%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A3%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/first-missing-positive/)

给你一个未排序的整数数组 `nums` ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 `O(n)` 并且只使用常数级别额外空间的解决方案。

---

- **示例 1：**

```txt
输入：nums = [1,2,0]
输出：3
解释：范围 [1,2] 中的数字都在数组中。
```

- **示例 2：**

```txt
输入：nums = [3,4,-1,1]
输出：2
解释：1 在数组中，但 2 没有。
```

- **示例 3：**

```txt
输入：nums = [7,8,9,11,12]
输出：1
解释：最小的正数 1 没有出现。
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
