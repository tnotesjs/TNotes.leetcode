# [3046. 分割数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3046.%20%E5%88%86%E5%89%B2%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/split-the-array/)

给你一个长度为 **偶数** 的整数数组 `nums` 。你需要将这个数组分割成 `nums1` 和 `nums2` 两部分，要求：

- `nums1.length == nums2.length == nums.length / 2` 。
- `nums1` 应包含 **互不相同** 的元素。
- `nums2`也应包含 **互不相同** 的元素。

如果能够分割数组就返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

```txt
输入：nums = [1,1,2,2,3,4]
输出：true
解释：分割 nums 的可行方案之一是 nums1 = [1,2,3] 和 nums2 = [1,2,4] 。
```

- **示例 2：**

```txt
输入：nums = [1,1,1,1]
输出：false
解释：分割 nums 的唯一可行方案是 nums1 = [1,1] 和 nums2 = [1,1] 。但 nums1 和 nums2 都不是由互不相同的元素构成。因此，返回 false 。
```

---

**提示：**

- `1 <= nums.length <= 100`
- `nums.length % 2 == 0`
- `1 <= nums[i] <= 100`

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
