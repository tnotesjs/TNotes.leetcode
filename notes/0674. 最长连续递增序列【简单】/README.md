# [0674. 最长连续递增序列【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0674.%20%E6%9C%80%E9%95%BF%E8%BF%9E%E7%BB%AD%E9%80%92%E5%A2%9E%E5%BA%8F%E5%88%97%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-continuous-increasing-subsequence/)

给定一个未经排序的整数数组，找到最长且 **连续递增的子序列**，并返回该序列的长度。

**连续递增的子序列** 可以由两个下标 `l` 和 `r`（`l < r`）确定，如果对于每个 `l <= i < r`，都有 `nums[i] < nums[i + 1]` ，那么子序列 `[nums[l], nums[l + 1], ..., nums[r - 1], nums[r]]` 就是连续递增子序列。

---

- **示例 1：**

```txt
输入：nums = [1,3,5,4,7]
输出：3
解释：最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。
```

- **示例 2：**

```txt
输入：nums = [2,2,2,2,2]
输出：1
解释：最长连续递增序列是 [2], 长度为1。
```

---

**提示：**

- `1 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`


## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$
  - 其中 n 是数组长度，需要遍历数组一次。
- 空间复杂度：$O(1)$
  - 只使用了常数级别的额外变量空间。
- 暴力解法：
  - 上坡不断增加 currentLen，并跟当前的 maxLen 进行比较，如果当前长度大于 maxLen，则更新 maxLen
  - 一旦遇到下坡，则重置 currentLen
