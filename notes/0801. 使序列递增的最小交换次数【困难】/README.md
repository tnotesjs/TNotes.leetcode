# [0801. 使序列递增的最小交换次数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0801.%20%E4%BD%BF%E5%BA%8F%E5%88%97%E9%80%92%E5%A2%9E%E7%9A%84%E6%9C%80%E5%B0%8F%E4%BA%A4%E6%8D%A2%E6%AC%A1%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/)

我们有两个长度相等且不为空的整型数组 `nums1` 和 `nums2` 。在一次操作中，我们可以交换 `nums1[i]` 和 `nums2[i]`的元素。

- 例如，如果 `nums1 = [1,2,3,8]` ， `nums2 =[5,6,7,4]` ，你可以交换 `i = 3` 处的元素，得到 `nums1 =[1,2,3,4]` 和 `nums2 =[5,6,7,8]` 。

返回 _使 `nums1` 和 `nums2` **严格递增** 所需操作的最小次数_ 。

数组 `arr` **严格递增** 且 `arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1]` 。

**注意：**

- 用例保证可以实现操作。

---

- **示例 1:**

```txt
输入: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
输出: 1
解释:
交换 A[3] 和 B[3] 后，两个数组如下:
A = [1, 3, 5, 7] ， B = [1, 2, 3, 4]
两个数组均为严格递增的。
```

- **示例 2:**

```txt
输入: nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]
输出: 1
```

---

**提示:**

- `2 <= nums1.length <= 10^5`
- `nums2.length == nums1.length`
- `0 <= nums1[i], nums2[i] <= 2 * 10^5`

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
