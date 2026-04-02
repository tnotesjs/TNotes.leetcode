# [3046. 分割数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3046.%20%E5%88%86%E5%89%B2%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 计数](#2--s1---计数)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/split-the-array/)

给你一个长度为 偶数 的整数数组 `nums`。你需要将这个数组分割成 `nums1` 和 `nums2` 两部分，要求：

- `nums1.length == nums2.length == nums.length / 2`。
- `nums1` 应包含 互不相同 的元素。
- `nums2`也应包含 互不相同 的元素。

如果能够分割数组就返回 `true`，否则返回 `false`。

---

示例 1：

```txt
输入：nums = [1,1,2,2,3,4]
输出：true

解释：
分割 nums 的可行方案之一是 nums1 = [1,2,3] 和 nums2 = [1,2,4]。
```

---

示例 2：

```txt
输入：nums = [1,1,1,1]
输出：false

解释：
分割 nums 的唯一可行方案是 nums1 = [1,1] 和 nums2 = [1,1]。
但 nums1 和 nums2 都不是由互不相同的元素构成。因此，返回 false。
```

---

提示：

- `1 <= nums.length <= 100`
- `nums.length % 2 == 0`
- `1 <= nums[i] <= 100`

## 2. 🎯 s.1 - 计数

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，遍历一次数组
- 空间复杂度：$O(n)$，哈希表存储频次

算法思路：

- 分成两个互不相同的数组，每个元素最多出现 2 次
- 统计频次，如果任何元素出现超过 2 次则无法分割