# [2918. 数组的最小相等和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2918.%20%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%B0%8F%E7%9B%B8%E7%AD%89%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/)

给你两个由正整数和 `0` 组成的数组 `nums1` 和 `nums2` 。

你必须将两个数组中的 所有 `0` 替换为 严格 正整数，并且满足两个数组中所有元素的和 相等 。

返回 最小 相等和 ，如果无法使两数组相等，则返回 `-1` 。

---

- 示例 1：

```txt
输入：nums1 = [3,2,0,1,0], nums2 = [6,5,0]
输出：12
解释：可以按下述方式替换数组中的 0 ：
- 用 2 和 4 替换 nums1 中的两个 0 。得到 nums1 = [3,2,2,1,4] 。
- 用 1 替换 nums2 中的一个 0 。得到 nums2 = [6,5,1] 。
两个数组的元素和相等，都等于 12 。可以证明这是可以获得的最小相等和。
```

- 示例 2：

```txt
输入：nums1 = [2,0,2,0], nums2 = [1,4]
输出：-1
解释：无法使两个数组的和相等。
```

---

提示：

- `1 <= nums1.length, nums2.length <= 10^5`
- `0 <= nums1[i], nums2[i] <= 10^6`

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
