# [0448. 找到所有数组中消失的数字【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0448.%20%E6%89%BE%E5%88%B0%E6%89%80%E6%9C%89%E6%95%B0%E7%BB%84%E4%B8%AD%E6%B6%88%E5%A4%B1%E7%9A%84%E6%95%B0%E5%AD%97%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/)

给你一个含 `n` 个整数的数组 `nums` ，其中 `nums[i]` 在区间 `[1, n]` 内。请你找出所有在 `[1, n]` 范围内但没有出现在 `nums` 中的数字，并以数组的形式返回结果。

---

- **示例 1：**

```txt
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
```

- **示例 2：**

```txt
输入：nums = [1,1]
输出：[2]
```

---

**提示：**

- `n == nums.length`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= n`

**进阶：** 你能在不使用额外空间且时间复杂度为 `O(n)` 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
