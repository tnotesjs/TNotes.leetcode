# [2540. 最小公共值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2540.%20%E6%9C%80%E5%B0%8F%E5%85%AC%E5%85%B1%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-common-value/)

给你两个整数数组 `nums1` 和 `nums2` ，它们已经按非降序排序，请你返回两个数组的 最小公共整数。如果两个数组 `nums1` 和 `nums2` 没有公共整数，请你返回 `-1`。

如果一个整数在两个数组中都 至少出现一次 ，那么这个整数是数组 `nums1` 和 `nums2` 公共 的。

---

- 示例 1：

```txt
输入：nums1 = [1,2,3], nums2 = [2,4]
输出：2
解释：两个数组的最小公共元素是 2 ，所以我们返回 2。
```

- 示例 2：

```txt
输入：nums1 = [1,2,3,6], nums2 = [2,3,4,5]
输出：2
解释：两个数组中的公共元素是 2 和 3 ，2 是较小值，所以返回 2。
```

---

提示：

- `1 <= nums1.length, nums2.length <= 10^5`
- `1 <= nums1[i], nums2[j] <= 10^9`
- `nums1` 和 `nums2` 都是 非降序 的。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
