# [1330. 翻转子数组得到最大的数组值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1330.%20%E7%BF%BB%E8%BD%AC%E5%AD%90%E6%95%B0%E7%BB%84%E5%BE%97%E5%88%B0%E6%9C%80%E5%A4%A7%E7%9A%84%E6%95%B0%E7%BB%84%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-subarray-to-maximize-array-value/)

给你一个整数数组 `nums` 。「数组值」定义为所有满足 `0 <= i < nums.length-1` 的 `|nums[i]-nums[i+1]|` 的和。

你可以选择给定数组的任意子数组，并将该子数组翻转。但你只能执行这个操作 **一次** 。

请你找到可行的最大 **数组值** 。

---

- **示例 1：**

```txt
输入：nums = [2,3,1,5,4]
输出：10
解释：通过翻转子数组 [3,1,5] ，数组变成 [2,5,1,3,4] ，数组值为 10 。
```

- **示例 2：**

```txt
输入：nums = [2,4,9,24,2,1,10]
输出：68
```

---

**提示：**

- `2 <= nums.length <= 3*10^4`
- `-10^5 <= nums[i] <= 10^5`
- 答案保证在 32 位整数范围内。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
