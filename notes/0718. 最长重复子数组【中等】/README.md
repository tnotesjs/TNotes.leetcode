# [0718. 最长重复子数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0718.%20%E6%9C%80%E9%95%BF%E9%87%8D%E5%A4%8D%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)

给两个整数数组 `nums1` 和 `nums2`，返回两个数组中 公共的 、长度最长的子数组的长度。

---

示例 1：

```txt
输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
输出：3
解释：长度最长的公共子数组是 [3,2,1]。
```

示例 2：

```txt
输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
输出：5
```

---

提示：

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 100`

## 2. 🎯 s.1 - 动态规划

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 m 和 n 分别是两个数组的长度
- 空间复杂度：$O(m \times n)$

算法思路：

- `dp[i][j]` 表示以 `nums1[i-1]` 和 `nums2[j-1]` 结尾的最长公共子数组长度
- 元素相等时 `dp[i][j] = dp[i-1][j-1] + 1`，否则为 0
- 遍历过程中记录最大值即为答案
