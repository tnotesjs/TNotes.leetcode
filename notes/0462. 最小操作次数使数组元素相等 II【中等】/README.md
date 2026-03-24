# [0462. 最小操作次数使数组元素相等 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0462.%20%E6%9C%80%E5%B0%8F%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E4%BD%BF%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E7%9B%B8%E7%AD%89%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/)

给你一个长度为 `n` 的整数数组 `nums`，返回使所有数组元素相等需要的最小操作数。

在一次操作中，你可以使数组中的一个元素加 `1` 或者减 `1`。

测试用例经过设计以使答案在 32 位 整数范围内。

---

示例 1：

```txt
输入：nums = [1,2,3]
输出：2
解释：
只需要两次操作（每次操作指南使一个元素加 1 或减 1）：
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
```

示例 2：

```txt
输入：nums = [1,10,2,9]
输出：16
```

---

提示：

- `n == nums.length`
- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 中位数

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$
- 空间复杂度：$O(\log n)$（排序开销）

算法思路：

- 将所有数移动到中位数的总操作次数最小
- 排序后取中位数，累加各元素与中位数的差的绝对值
