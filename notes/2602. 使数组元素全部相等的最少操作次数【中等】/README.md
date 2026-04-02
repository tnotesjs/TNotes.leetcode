# [2602. 使数组元素全部相等的最少操作次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2602.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E5%85%A8%E9%83%A8%E7%9B%B8%E7%AD%89%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 前缀和 + 二分查找](#2--s1---排序--前缀和--二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-operations-to-make-all-array-elements-equal/)

给你一个正整数数组 `nums`。

同时给你一个长度为 `m` 的整数数组 `queries`。第 `i` 个查询中，你需要将 `nums` 中所有元素变成 `queries[i]`。你可以执行以下操作 任意 次：

- 将数组里一个元素 增大 或者 减小 `1`。

请你返回一个长度为 `m` 的数组 `answer`，其中 `answer[i]`是将 `nums` 中所有元素变成 `queries[i]` 的 最少 操作次数。

注意，每次查询后，数组变回最开始的值。

---

示例 1：

```txt
输入：nums = [3,1,6,8], queries = [1,5]
输出：[14,10]
解释：第一个查询，我们可以执行以下操作：
- 将 nums[0] 减小 2 次，nums = [1,1,6,8]。
- 将 nums[2] 减小 5 次，nums = [1,1,1,8]。
- 将 nums[3] 减小 7 次，nums = [1,1,1,1]。
第一个查询的总操作次数为 2 + 5 + 7 = 14。
第二个查询，我们可以执行以下操作：
- 将 nums[0] 增大 2 次，nums = [5,1,6,8]。
- 将 nums[1] 增大 4 次，nums = [5,5,6,8]。
- 将 nums[2] 减小 1 次，nums = [5,5,5,8]。
- 将 nums[3] 减小 3 次，nums = [5,5,5,5]。
第二个查询的总操作次数为 2 + 4 + 1 + 3 = 10。
```

示例 2：

```txt
输入：nums = [2,9,6,3], queries = [10]
输出：[20]
解释：我们可以将数组中所有元素都增大到 10，总操作次数为 8 + 1 + 4 + 7 = 20。
```

---

提示：

- `n == nums.length`
- `m == queries.length`
- `1 <= n, m <= 10^5`
- `1 <= nums[i], queries[i] <= 10^9`

## 2. 🎯 s.1 - 排序 + 前缀和 + 二分查找

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O((N + M) \log N)$，其中 N 是 nums 的长度，M 是 queries 的长度
- 空间复杂度：$O(N)$，前缀和数组的空间

算法思路：

- 先将 nums 排序并计算前缀和
- 对每个查询值 q，用二分查找找到分界点 j，左侧元素都 < q，右侧 >= q
- 左侧操作次数 = q _ j - pre[j]，右侧操作次数 = (pre[n] - pre[j]) - q _ (n - j)
