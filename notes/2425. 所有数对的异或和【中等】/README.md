# [2425. 所有数对的异或和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2425.%20%E6%89%80%E6%9C%89%E6%95%B0%E5%AF%B9%E7%9A%84%E5%BC%82%E6%88%96%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/bitwise-xor-of-all-pairings/)

给你两个下标从 0 开始的数组 `nums1` 和 `nums2`，两个数组都只包含非负整数。请你求出另外一个数组 `nums3`，包含 `nums1` 和 `nums2` 中 所有数对 的异或和（`nums1` 中每个整数都跟 `nums2` 中每个整数 恰好 匹配一次）。

请你返回 `nums3` 中所有整数的 异或和。

---

示例 1：

```txt
输入：nums1 = [2,1,3], nums2 = [10,2,5,0]
输出：13
解释：
一个可能的 nums3 数组是 [8,0,7,2,11,3,4,1,9,1,6,3]。
所有这些数字的异或和是 13，所以我们返回 13。
```

示例 2：

```txt
输入：nums1 = [1,2], nums2 = [3,4]
输出：0
解释：
所有数对异或和的结果分别为 nums1[0] ^ nums2[0]，nums1[0] ^ nums2[1]，nums1[1] ^ nums2[0] 和 nums1[1] ^ nums2[1]。
所以，一个可能的 nums3 数组是 [2,5,1,6]。
2 ^ 5 ^ 1 ^ 6 = 0，所以我们返回 0。
```

---

提示：

- `1 <= nums1.length, nums2.length <= 10^5`
- `0 <= nums1[i], nums2[j] <= 10^9`

## 2. 🎯 s.1 - 位运算

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + m)$，其中 n 和 m 分别是两个数组的长度
- 空间复杂度：$O(1)$

算法思路：

- nums1 中每个元素出现 len(nums2) 次，若 len(nums2) 为奇数则 XOR 贡献保留
- 同理 nums2 中每个元素出现 len(nums1) 次
- 根据对方数组长度的奇偶性决定是否异或累加
