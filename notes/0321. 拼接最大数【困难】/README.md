# [0321. 拼接最大数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0321.%20%E6%8B%BC%E6%8E%A5%E6%9C%80%E5%A4%A7%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/create-maximum-number/)

给你两个整数数组 `nums1` 和 `nums2`，它们的长度分别为 `m` 和 `n`。数组 `nums1` 和 `nums2` 分别代表两个数各位上的数字。同时你也会得到一个整数 `k`。

请你利用这两个数组中的数字创建一个长度为 `k <= m + n` 的最大数。同一数组中数字的相对顺序必须保持不变。

返回代表答案的长度为 `k` 的数组。

---

- **示例 1：**

```txt
输入：nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5
输出：[9,8,6,5,3]
```

- **示例 2：**

```txt
输入：nums1 = [6,7], nums2 = [6,0,4], k = 5
输出：[6,7,6,0,4]
```

- **示例 3：**

```txt
输入：nums1 = [3,9], nums2 = [8,9], k = 3
输出：[9,8,9]
```

---

**提示：**

- `m == nums1.length`
- `n == nums2.length`
- `1 <= m, n <= 500`
- `0 <= nums1[i], nums2[i] <= 9`
- `1 <= k <= m + n`
- `nums1`  和  `nums2` 没有前导 0。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
