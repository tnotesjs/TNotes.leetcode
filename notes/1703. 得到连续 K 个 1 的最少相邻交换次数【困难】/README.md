# [1703. 得到连续 K 个 1 的最少相邻交换次数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1703.%20%E5%BE%97%E5%88%B0%E8%BF%9E%E7%BB%AD%20K%20%E4%B8%AA%201%20%E7%9A%84%E6%9C%80%E5%B0%91%E7%9B%B8%E9%82%BB%E4%BA%A4%E6%8D%A2%E6%AC%A1%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-adjacent-swaps-for-k-consecutive-ones/)

给你一个整数数组 `nums` 和一个整数 `k`。 `nums` 仅包含 `0` 和 `1`。每一次移动，你可以选择 相邻 两个数字并将它们交换。

请你返回使 `nums` 中包含 `k` 个 连续 `1` 的 最少 交换次数。

---

示例 1：

```txt
输入：nums = [1,0,0,1,0,1], k = 2
输出：1
解释：在第一次操作时，nums 可以变成 [1,0,0,0,1,1] 得到连续两个 1。
```

示例 2：

```txt
输入：nums = [1,0,0,0,0,0,1,1], k = 3
输出：5
解释：通过 5 次操作，最左边的 1 可以移到右边直到 nums 变为 [0,0,0,0,0,1,1,1]。
```

示例 3：

```txt
输入：nums = [1,1,0,1], k = 2
输出：0
解释：nums 已经有连续 2 个 1 了。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `nums[i]` 要么是 `0`，要么是 `1`。
- `1 <= k <= sum(nums)`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
