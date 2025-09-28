# [2956. 找到两个数组中的公共元素【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2956.%20%E6%89%BE%E5%88%B0%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%85%AC%E5%85%B1%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-common-elements-between-two-arrays/)

给你两个下标从 **0** 开始的整数数组 `nums1` 和 `nums2` ，它们分别含有 `n` 和 `m` 个元素。请你计算以下两个数值：

- `answer1`：使得 `nums1[i]` 在 `nums2` 中出现的下标 `i` 的数量。
- `answer2`：使得 `nums2[i]` 在 `nums1` 中出现的下标 `i` 的数量。

返回 `[answer1, answer2]`。

---

- **示例 1：**

```txt
输入：nums1 = [2,3,2], nums2 = [1,2]
输出：[2,1]
```

- 解释：
  - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-07-26.png)

---

- **示例 2：**

```txt
输入：nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
输出：[3,4]

解释：
`nums1` 中下标在 1，2，3 的元素在 `nums2` 中也存在。所以 `answer1` 为 3。
`nums2` 中下标在 0，1，3，4 的元素在 `nums1` 中也存在。所以 `answer2` 为 4。
```

---

- **示例 3：**

```txt
输入：nums1 = [3,4,2,3], nums2 = [1,5]
输出：[0,0]
解释：
`nums1` 和 `nums2` 中没有相同的数字，所以答案是 \[0,0\]。
```

---

**提示：**

- `n == nums1.length`
- `m == nums2.length`
- `1 <= n, m <= 100`
- `1 <= nums1[i], nums2[i] <= 100`

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
