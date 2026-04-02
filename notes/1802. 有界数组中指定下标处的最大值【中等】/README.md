# [1802. 有界数组中指定下标处的最大值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1802.%20%E6%9C%89%E7%95%8C%E6%95%B0%E7%BB%84%E4%B8%AD%E6%8C%87%E5%AE%9A%E4%B8%8B%E6%A0%87%E5%A4%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分答案](#2--s1---二分答案)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-value-at-a-given-index-in-a-bounded-array/)

给你三个正整数 `n`、`index` 和 `maxSum`。你需要构造一个同时满足下述所有条件的数组 `nums`（下标 从 0 开始 计数）：

- `nums.length == n`
- `nums[i]` 是 正整数，其中 `0 <= i < n`
- `abs(nums[i] - nums[i+1]) <= 1`，其中 `0 <= i < n-1`
- `nums` 中所有元素之和不超过 `maxSum`
- `nums[index]` 的值被 最大化

返回你所构造的数组中的 `nums[index]`。

注意：`abs(x)` 等于 `x` 的前提是 `x >= 0` ；否则，`abs(x)` 等于 `-x`。

---

示例 1：

```txt
输入：n = 4, index = 2,  maxSum = 6
输出：2

解释：
数组 [1,1,2,1] 和 [1,2,2,1] 满足所有条件。
不存在其他在指定下标处具有更大值的有效数组。
```

示例 2：

```txt
输入：n = 6, index = 1,  maxSum = 10
输出：3
```

---

提示：

- `1 <= n <= maxSum <= 10^9`
- `0 <= index < n`

## 2. 🎯 s.1 - 二分答案

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log maxSum)$
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 二分查找下标 index 处的最大值
- 对于每个猜测值，计算以该值为峰值的数组所需的最小总和
- 检查总和是否不超过 maxSum
