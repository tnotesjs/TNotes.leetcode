# [0349. 两个数组的交集【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0349.%20%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希集合法（推荐）](#2--s1---哈希集合法推荐)
- [3. 🎯 s.2 - 排序 + 双指针](#3--s2---排序--双指针)
- [4. 🎯 s.3 - 使用内置方法（简洁但效率较低）](#4--s3---使用内置方法简洁但效率较低)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/intersection-of-two-arrays/)

给定两个数组 `nums1` 和 `nums2` ，返回 _它们的 交集_ 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

---

- 示例 1：

```txt
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

- 示例 2：

```txt
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

---

提示：

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

## 2. 🎯 s.1 - 哈希集合法（推荐）

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/2.js [js-2]

:::

- 时间复杂度：$O(m + n)$，其中 m 和 n 分别是两个数组的长度
- 空间复杂度：$O(m + n)$，需要存储两个集合
- `js-2` 对遍历的次数进行了适当的优化。

## 3. 🎯 s.2 - 排序 + 双指针

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(m \log m + n \log n)$，主要是排序的时间复杂度
- 空间复杂度：$O(1)$，不考虑输出数组

## 4. 🎯 s.3 - 使用内置方法（简洁但效率较低）

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(m × n)$，includes 操作需要线性时间
- 空间复杂度：$O(min(m, n))$，Set 存储交集元素
