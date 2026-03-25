# [0870. 优势洗牌【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0870.%20%E4%BC%98%E5%8A%BF%E6%B4%97%E7%89%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/advantage-shuffle/)

给定两个长度相等的数组 `nums1` 和 `nums2`，`nums1` 相对于 `nums2` 的*优势*可以用满足 `nums1[i] > nums2[i]` 的索引 `i` 的数目来描述。

返回 `nums1` 的 任意 排列，使其相对于 `nums2` 的优势最大化。

---

示例 1：

```txt
输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
输出：[2,11,7,15]
```

示例 2：

```txt
输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
输出：[24,32,8,12]
```

---

提示：

- `1 <= nums1.length <= 10^5`
- `nums2.length == nums1.length`
- `0 <= nums1[i], nums2[i] <= 10^9`

## 2. 🎯 s.1 - 贪心（田忌赛马）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$

算法思路：

- 将 nums1 升序排列，nums2 的索引按值降序排列
- 对 nums2 中最大的元素，若 nums1 最大值能赢则匹配，否则用 nums1 最小值浪费
