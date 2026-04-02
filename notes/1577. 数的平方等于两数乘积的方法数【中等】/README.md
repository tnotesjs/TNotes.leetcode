# [1577. 数的平方等于两数乘积的方法数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1577.%20%E6%95%B0%E7%9A%84%E5%B9%B3%E6%96%B9%E7%AD%89%E4%BA%8E%E4%B8%A4%E6%95%B0%E4%B9%98%E7%A7%AF%E7%9A%84%E6%96%B9%E6%B3%95%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表](#2--s1---哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/)

给你两个整数数组 `nums1` 和 `nums2`，请你返回根据以下规则形成的三元组的数目（类型 1 和类型 2 ）：

- 类型 1：三元组 `(i, j, k)`，如果 `nums1[i]^2 == nums2[j] * nums2[k]` 其中 `0 <= i < nums1.length` 且 `0 <= j < k < nums2.length`
- 类型 2：三元组 `(i, j, k)`，如果 `nums2[i]^2 == nums1[j] * nums1[k]` 其中 `0 <= i < nums2.length` 且 `0 <= j < k < nums1.length`

---

示例 1：

```txt
输入：nums1 = [7,4], nums2 = [5,2,8,9]
输出：1
解释：类型 1：(1,1,2), nums1[1]^2 = nums2[1] * nums2[2] (4^2 = 2 * 8)
```

示例 2：

```txt
输入：nums1 = [1,1], nums2 = [1,1,1]
输出：9
解释：所有三元组都符合题目要求，因为 1^2 = 1 * 1
类型 1：(0,0,1), (0,0,2), (0,1,2), (1,0,1), (1,0,2), (1,1,2), nums1[i]^2 = nums2[j] * nums2[k]
类型 2：(0,0,1), (1,0,1), (2,0,1), nums2[i]^2 = nums1[j] * nums1[k]
```

示例 3：

```txt
输入：nums1 = [7,7,8,3], nums2 = [1,2,9,7]
输出：2
解释：有两个符合题目要求的三元组
类型 1：(3,0,2), nums1[3]^2 = nums2[0] * nums2[2]
类型 2：(3,0,1), nums2[3]^2 = nums1[0] * nums1[1]
```

示例 4：

```txt
输入：nums1 = [4,7,9,11,23], nums2 = [3,5,1024,12,18]
输出：0
解释：不存在符合题目要求的三元组
```

---

提示：

- `1 <= nums1.length, nums2.length <= 1000`
- `1 <= nums1[i], nums2[i] <= 10^5`

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times m)$，其中 $n$ 和 $m$ 分别是两个数组的长度
- 空间复杂度：$O(n + m)$，哈希表的空间

算法思路：

- 分别用哈希表统计 `nums1` 和 `nums2` 中每个数的出现次数
- 对 `nums1` 中每个数 $a$，计算 $a^2$，在 `nums2` 的哈希表中查找所有 $(b, c)$ 使得 $b \times c = a^2$
- 反向对 `nums2` 做同样操作
- 注意避免重复计数
