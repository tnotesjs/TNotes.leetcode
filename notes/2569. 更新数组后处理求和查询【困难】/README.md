# [2569. 更新数组后处理求和查询【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2569.%20%E6%9B%B4%E6%96%B0%E6%95%B0%E7%BB%84%E5%90%8E%E5%A4%84%E7%90%86%E6%B1%82%E5%92%8C%E6%9F%A5%E8%AF%A2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/handling-sum-queries-after-update/)

给你两个下标从 **0** 开始的数组 `nums1` 和 `nums2` ，和一个二维数组 `queries` 表示一些操作。总共有 3 种类型的操作：

1. 操作类型 1 为 `queries[i] = [1, l, r]` 。你需要将 `nums1` 从下标 `l` 到下标 `r` 的所有 `0` 反转成 `1` 并且所有 `1` 反转成 `0` 。`l` 和 `r` 下标都从 **0** 开始。
2. 操作类型 2 为 `queries[i] = [2, p, 0]` 。对于 `0 <= i < n` 中的所有下标，令 `nums2[i] = nums2[i] + nums1[i] * p` 。
3. 操作类型 3 为 `queries[i] = [3, 0, 0]` 。求 `nums2` 中所有元素的和。

请你返回一个 _数组_，包含 _所有第三种操作类型_ 的答案。

---

- **示例 1：**

```txt
输入：nums1 = [1,0,1], nums2 = [0,0,0], queries = [[1,1,1],[2,1,0],[3,0,0]]
输出：[3]
解释：第一个操作后 nums1 变为 [1,1,1] 。第二个操作后，nums2 变成 [1,1,1] ，所以第三个操作的答案为 3 。所以返回 [3] 。
```

- **示例 2：**

```txt
输入：nums1 = [1], nums2 = [5], queries = [[2,0,0],[3,0,0]]
输出：[5]
解释：第一个操作后，nums2 保持不变为 [5] ，所以第二个操作的答案是 5 。所以返回 [5] 。
```

---

**提示：**

- `1 <= nums1.length,nums2.length <= 10^5`
- `nums1.length = nums2.length`
- `1 <= queries.length <= 10^5`
- `queries[i].length = 3`
- `0 <= l <= r <= nums1.length - 1`
- `0 <= p <= 10^6`
- `0 <= nums1[i] <= 1`
- `0 <= nums2[i] <= 10^9`

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
