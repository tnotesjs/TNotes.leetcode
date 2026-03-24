# [0454. 四数相加 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0454.%20%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/4sum-ii/)

给你四个整数数组 `nums1`、`nums2`、`nums3` 和 `nums4`，数组长度都是 `n`，请你计算有多少个元组 `(i, j, k, l)` 能满足：

- `0 <= i, j, k, l < n`
- `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`

---

示例 1：

```txt
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

示例 2：

```txt
输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
```

---

提示：

- `n == nums1.length`
- `n == nums2.length`
- `n == nums3.length`
- `n == nums4.length`
- `1 <= n <= 200`
- `-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28`

## 2. 🎯 s.1 - 哈希表分组

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$
- 空间复杂度：$O(n^2)$

算法思路：

- 将四个数组分为两组，先枯举 AB 两数之和存入哈希表
- 再枯举 CD 两数之和，查找 `-(c+d)` 在哈希表中的出现次数
