# [0350. 两个数组的交集 II【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0350.%20%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86%20II%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/intersection-of-two-arrays-ii/)

给你两个整数数组  `nums1` 和 `nums2` ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

---

- **示例 1：**

```txt
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```

- **示例 2:**

```txt
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```

---

**提示：**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**进阶**：

- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果  `nums1`  的大小比  `nums2` 小，哪种方法更优？
- 如果  `nums2`  的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
