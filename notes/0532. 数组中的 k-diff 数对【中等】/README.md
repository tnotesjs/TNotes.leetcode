# [0532. 数组中的 k-diff 数对【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0532.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%20k-diff%20%E6%95%B0%E5%AF%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表](#2--s1---哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/k-diff-pairs-in-an-array/)

给你一个整数数组 `nums` 和一个整数 `k`，请你在数组中找出 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。

k-diff 数对定义为一个整数对 `(nums[i], nums[j])`，并满足下述全部条件：

- `0 <= i, j < nums.length`
- `i != j`
- `|nums[i] - nums[j]| == k`

注意，`|val|` 表示 `val` 的绝对值。

---

示例 1：

```txt
输入：nums = [3, 1, 4, 1, 5], k = 2
输出：2
解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个 1，但我们只应返回不同的数对的数量。
```

示例 2：

```txt
输入：nums = [1, 2, 3, 4, 5], k = 1
输出：4
解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。
```

示例 3：

```txt
输入：nums = [1, 3, 1, 5, 4], k = 0
输出：1
解释：数组中只有一个 0-diff 数对，(1, 1)。
```

---

提示：

- `1 <= nums.length <= 10^4`
- `-10^7 <= nums[i] <= 10^7`
- `0 <= k <= 10^7`

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

算法思路：

- 统计每个数的出现次数
- 若 $k = 0$，统计出现次数 > 1 的数
- 若 $k > 0$，检查 `num + k` 是否存在
