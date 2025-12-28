# [2344. 使数组可以被整除的最少删除次数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2344.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E5%8F%AF%E4%BB%A5%E8%A2%AB%E6%95%B4%E9%99%A4%E7%9A%84%E6%9C%80%E5%B0%91%E5%88%A0%E9%99%A4%E6%AC%A1%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-deletions-to-make-array-divisible/)

给你两个正整数数组 `nums` 和 `numsDivide`。你可以从 `nums` 中删除任意数目的元素。

请你返回使 `nums` 中 最小 元素可以整除 `numsDivide` 中所有元素的 最少 删除次数。如果无法得到这样的元素，返回 `-1`。

如果 `y % x == 0` ，那么我们说整数 `x` 整除 `y`。

---

- 示例 1：

```txt
输入：nums = [2,3,2,4,3], numsDivide = [9,6,9,3,15]
输出：2
解释：
[2,3,2,4,3] 中最小元素是 2 ，它无法整除 numsDivide 中所有元素。
我们从 nums 中删除 2 个大小为 2 的元素，得到 nums = [3,4,3]。
[3,4,3] 中最小元素为 3 ，它可以整除 numsDivide 中所有元素。
可以证明 2 是最少删除次数。
```

- 示例 2：

```txt
输入：nums = [4,3,6], numsDivide = [8,2,6,10]
输出：-1
解释：
我们想 nums 中的最小元素可以整除 numsDivide 中的所有元素。
没有任何办法可以达到这一目的。
```

---

提示：

- `1 <= nums.length, numsDivide.length <= 10^5`
- `1 <= nums[i], numsDivide[i] <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
