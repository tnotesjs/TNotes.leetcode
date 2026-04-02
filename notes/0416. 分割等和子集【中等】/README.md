# [0416. 分割等和子集【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0416.%20%E5%88%86%E5%89%B2%E7%AD%89%E5%92%8C%E5%AD%90%E9%9B%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 0-1 背包 DP](#2--s1---0-1-背包-dp)
- [3. 🎯 s.2 - bitset 优化](#3--s2---bitset-优化)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/partition-equal-subset-sum/)

给你一个只包含正整数的非空数组 `nums`。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

---

示例 1：

```txt
输入：nums = [1, 5, 11, 5]
输出：true
```

解释：数组可以分割成 `[1, 5, 5]` 和 `[11]`。

---

示例 2：

```txt
输入：nums = [1, 2, 3, 5]
输出：false
```

解释：数组不能分割成两个元素和相等的子集。

---

提示：

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`

## 2. 🎯 s.1 - 0-1 背包 DP

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times target)$，其中 $target = sum / 2$
- 空间复杂度：$O(target)$

算法思路：

- 问题转化为：能否从数组中选出若干数使其和恰好为 $sum/2$
- 经典 0-1 背包，$dp[j]$ 表示是否能凑出和 $j$
- 状态转移：$dp[j] = dp[j] || dp[j - nums[i]]$
  - $dp[j]$ 表示集合中不选当前数 $nums[i]$ 时 j 已可达
  - $dp[j - nums[i]]$ 表示选当前数 $nums[i]$ 时 j 已可达
  - $dp[j]$ 只允许从 0 -> 1 不允许 1 -> 0
- 倒序遍历：保证每个数只被使用一次，防止重复使用

## 3. 🎯 s.2 - bitset 优化

::: code-group

<<< ./solutions/2/1.c [c]

<<< ./solutions/2/1.js [js]

<<< ./solutions/2/1.py [py]

:::

- 时间复杂度：$O(n \times \lceil target / 64 \rceil)$，用位运算一次处理 64 个 DP 状态，相比 0-1 背包有约 64 倍常数优化
- 空间复杂度：$O(\lceil target / 64 \rceil)$，固定大小的位集替代布尔数组

算法思路：

- 用一个大整数 `bits` 模拟位集，第 $i$ 位为 1 表示和 $i$ 可达，初始 `bits = 1`（只有第 0 位为 1）
- 对每个数 `num` 执行 `bits |= bits << num`：将所有已可达的和加上 `num`，一次位运算即可覆盖 64 个 DP 状态的更新
- 最终检查第 `target` 位是否为 1
