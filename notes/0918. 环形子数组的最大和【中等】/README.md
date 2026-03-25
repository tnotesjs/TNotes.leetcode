# [0918. 环形子数组的最大和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0918.%20%E7%8E%AF%E5%BD%A2%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-sum-circular-subarray/)

给定一个长度为 `n` 的环形整数数组 `nums`，返回 `nums` 的非空 子数组 的最大可能和。

环形数组 意味着数组的末端将会与开头相连呈环状。形式上， `nums[i]` 的下一个元素是 `nums[(i + 1) % n]`， `nums[i]` 的前一个元素是 `nums[(i - 1 + n) % n]`。

子数组 最多只能包含固定缓冲区 `nums` 中的每个元素一次。形式上，对于子数组 `nums[i], nums[i + 1], ..., nums[j]`，不存在 `i <= k1, k2 <= j` 其中 `k1 % n == k2 % n`。

---

示例 1：

```txt
输入：nums = [1,-2,3,-2]
输出：3
解释：从子数组 [3] 得到最大和 3
```

示例 2：

```txt
输入：nums = [5,-3,5]
输出：10
解释：从子数组 [5,5] 得到最大和 5 + 5 = 10
```

示例 3：

```txt
输入：nums = [3,-2,2,-3]
输出：3
解释：从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3
```

---

提示：

- `n == nums.length`
- `1 <= n <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`​​​​​​​

## 2. 🎯 s.1 - Kadane 变体

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 环形子数组的最大和有两种情况：(1) 不跨越边界的普通最大子数组和；(2) 跨越边界，等价于总和减去不跨越边界的最小子数组和
- 同时用 Kadane 算法求最大子数组和 `maxSum` 和最小子数组和 `minSum`
- 如果所有元素都为负（`maxSum <= 0`），答案就是 `maxSum`；否则答案是 $\max(maxSum, totalSum - minSum)$
