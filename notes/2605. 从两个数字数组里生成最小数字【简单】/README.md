# [2605. 从两个数字数组里生成最小数字【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2605.%20%E4%BB%8E%E4%B8%A4%E4%B8%AA%E6%95%B0%E5%AD%97%E6%95%B0%E7%BB%84%E9%87%8C%E7%94%9F%E6%88%90%E6%9C%80%E5%B0%8F%E6%95%B0%E5%AD%97%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/form-smallest-number-from-two-digit-arrays/)

给你两个只包含 1 到 9 之间数字的数组 `nums1` 和 `nums2` ，每个数组中的元素 互不相同 ，请你返回 最小 的数字，两个数组都 至少 包含这个数字的某个数位。

---

示例 1：

```txt
输入：nums1 = [4,1,3], nums2 = [5,7]
输出：15
解释：数字 15 的数位 1 在 nums1 中出现，数位 5 在 nums2 中出现。15 是我们能得到的最小数字。
```

示例 2：

```txt
输入：nums1 = [3,5,2,6], nums2 = [3,1,7]
输出：3
解释：数字 3 的数位 3 在两个数组中都出现了。
```

---

提示：

- `1 <= nums1.length, nums2.length <= 9`
- `1 <= nums1[i], nums2[i] <= 9`
- 每个数组中，元素 互不相同。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
