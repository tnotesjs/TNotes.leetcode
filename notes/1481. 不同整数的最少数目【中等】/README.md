# [1481. 不同整数的最少数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1481.%20%E4%B8%8D%E5%90%8C%E6%95%B4%E6%95%B0%E7%9A%84%E6%9C%80%E5%B0%91%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/least-number-of-unique-integers-after-k-removals/)

给你一个整数数组 `arr` 和一个整数 `k`。现需要从数组中恰好移除 `k` 个元素，请找出移除后数组中不同整数的最少数目。

---

示例 1：

```txt
输入：arr = [5,5,4], k = 1
输出：1
解释：移除 1 个 4，数组中只剩下 5 一种整数。
```

示例 2：

```txt
输入：arr = [4,3,1,1,3,3,2], k = 3
输出：2
解释：先移除 4、2，然后再移除两个 1 中的任意 1 个或者三个 3 中的任意 1 个，最后剩下 1 和 3 两种整数。
```

---

提示：

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 10^9`
- `0 <= k <= arr.length`

## 2. 🎯 s.1 - 贪心 + 排序

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$，存储频率数组

算法思路：

- 统计每个整数的出现频率，将频率按升序排序
- 贪心地优先移除频率最小的整数，直到 k 不够移除下一个
- 剩余的不同整数数量即为答案
