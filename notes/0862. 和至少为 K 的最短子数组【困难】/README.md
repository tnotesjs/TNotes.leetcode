# [0862. 和至少为 K 的最短子数组【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0862.%20%E5%92%8C%E8%87%B3%E5%B0%91%E4%B8%BA%20K%20%E7%9A%84%E6%9C%80%E7%9F%AD%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/)

给你一个整数数组 `nums` 和一个整数 `k` ，找出 `nums` 中和至少为 `k` 的 **最短非空子数组** ，并返回该子数组的长度。如果不存在这样的 **子数组** ，返回 `-1` 。

**子数组** 是数组中 **连续** 的一部分。

---

- **示例 1：**

```txt
输入：nums = [1], k = 1
输出：1
```

- **示例 2：**

```txt
输入：nums = [1,2], k = 4
输出：-1
```

- **示例 3：**

```txt
输入：nums = [2,-1,2], k = 3
输出：3
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`
- `1 <= k <= 10^9`

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
