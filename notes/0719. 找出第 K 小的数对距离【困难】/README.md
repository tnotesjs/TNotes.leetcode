# [0719. 找出第 K 小的数对距离【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0719.%20%E6%89%BE%E5%87%BA%E7%AC%AC%20K%20%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AF%B9%E8%B7%9D%E7%A6%BB%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-k-th-smallest-pair-distance/)

数对 `(a,b)` 由整数 `a` 和 `b` 组成，其数对距离定义为 `a` 和 `b` 的绝对差值。

给你一个整数数组 `nums` 和一个整数 `k` ，数对由 `nums[i]` 和 `nums[j]` 组成且满足 `0 <= i < j < nums.length` 。返回 **所有数对距离中** 第 `k` 小的数对距离。

---

- **示例 1：**

```txt
输入：nums = [1,3,1], k = 1
输出：0
解释：数对和对应的距离如下：
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
距离第 1 小的数对是 (1,1) ，距离为 0 。
```

- **示例 2：**

```txt
输入：nums = [1,1,1], k = 2
输出：0
```

- **示例 3：**

```txt
输入：nums = [1,6,1], k = 3
输出：5
```

---

**提示：**

- `n == nums.length`
- `2 <= n <= 10^4`
- `0 <= nums[i] <= 10^6`
- `1 <= k <= n * (n - 1) / 2`

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
