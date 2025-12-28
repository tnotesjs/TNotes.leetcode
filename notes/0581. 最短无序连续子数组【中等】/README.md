# [0581. 最短无序连续子数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0581.%20%E6%9C%80%E7%9F%AD%E6%97%A0%E5%BA%8F%E8%BF%9E%E7%BB%AD%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/)

给你一个整数数组 `nums` ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

请你找出符合题意的 最短 子数组，并输出它的长度。

---

示例 1：

```txt
输入：nums = [2,6,4,8,10,9,15]
输出：5
解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```

示例 2：

```txt
输入：nums = [1,2,3,4]
输出：0
```

示例 3：

```txt
输入：nums = [1]
输出：0
```

---

提示：

- `1 <= nums.length <= 10^4`
- `-10^5 <= nums[i] <= 10^5`

进阶： 你可以设计一个时间复杂度为 `O(n)` 的解决方案吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
