# [2741. 特别的排列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2741.%20%E7%89%B9%E5%88%AB%E7%9A%84%E6%8E%92%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 状压 DP](#2--s1---状压-dp)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/special-permutations/)

给你一个下标从 0 开始的整数数组 `nums`，它包含 `n` 个 互不相同 的正整数。如果 `nums` 的一个排列满足以下条件，我们称它是一个特别的排列：

- 对于 `0 <= i < n - 1` 的下标 `i`，要么 `nums[i] % nums[i+1] == 0`，要么 `nums[i+1] % nums[i] == 0`。

请你返回特别排列的总数目，由于答案可能很大，请将它对 `10^9 + 7` 取余 后返回。

---

示例 1：

```txt
输入：nums = [2,3,6]
输出：2
解释：[3,6,2] 和 [2,6,3] 是 nums 两个特别的排列。
```

示例 2：

```txt
输入：nums = [1,4,3]
输出：2
解释：[3,1,4] 和 [4,1,3] 是 nums 两个特别的排列。
```

---

提示：

- `2 <= nums.length <= 14`
- `1 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 状压 DP

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2 \cdot 2^n)$，其中 $n$ 为数组长度
- 空间复杂度：$O(n \cdot 2^n)$

算法思路：

- 用二进制掩码 `mask` 表示已选元素的集合，`dp[mask][i]` 表示已选集合为 `mask`、最后选的是 `nums[i]` 的方案数
- 初始化：每个元素单独选时方案数为 1
- 状态转移：枚举下一个要选的元素 `j`，若 `nums[j] % nums[i] == 0` 或 `nums[i] % nums[j] == 0`，则可以从状态 `(mask, i)` 转移到 `(mask | (1 << j), j)`
- 最终答案为所有 `dp[full][i]` 的和
