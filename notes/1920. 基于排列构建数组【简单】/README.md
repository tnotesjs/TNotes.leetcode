# [1920. 基于排列构建数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1920.%20%E5%9F%BA%E4%BA%8E%E6%8E%92%E5%88%97%E6%9E%84%E5%BB%BA%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/build-array-from-permutation/)

给你一个 **从 0 开始的排列** `nums`（**下标也从 0 开始**）。请你构建一个 **同样长度** 的数组 `ans` ，其中，对于每个 `i`（`0 <= i < nums.length`），都满足 `ans[i] = nums[nums[i]]` 。返回构建好的数组 `ans` 。

**从 0 开始的排列** `nums` 是一个由 `0` 到 `nums.length - 1`（`0` 和 `nums.length - 1` 也包含在内）的不同整数组成的数组。

---

- **示例 1：**

```txt
输入：nums = [0,2,1,5,3,4]
输出：[0,1,2,4,5,3]
解释：数组 ans 构建如下：
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
```

- **示例 2：**

```txt
输入：nums = [5,0,1,2,3,4]
输出：[4,5,0,1,2,3]
解释：数组 ans 构建如下：
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
```

---

**提示：**

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < nums.length`
- `nums` 中的元素 **互不相同**

**进阶：** 你能在不使用额外空间的情况下解决此问题吗（即 `O(1)` 内存）？

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
