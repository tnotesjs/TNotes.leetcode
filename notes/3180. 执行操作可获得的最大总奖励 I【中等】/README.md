# [3180. 执行操作可获得的最大总奖励 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3180.%20%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C%E5%8F%AF%E8%8E%B7%E5%BE%97%E7%9A%84%E6%9C%80%E5%A4%A7%E6%80%BB%E5%A5%96%E5%8A%B1%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-total-reward-using-operations-i/)

给你一个整数数组 `rewardValues`，长度为 `n`，代表奖励的值。

最初，你的总奖励 `x` 为 0，所有下标都是 未标记 的。你可以执行以下操作 任意次 ：

- 从区间 `[0, n - 1]` 中选择一个 未标记 的下标 `i`。
- 如果 `rewardValues[i]` 大于 你当前的总奖励 `x`，则将 `rewardValues[i]` 加到 `x` 上（即 `x = x + rewardValues[i]`），并 标记 下标 `i`。

以整数形式返回执行最优操作能够获得的 最大 总奖励。

---

- 示例 1：

输入： rewardValues = [1,1,3,3]

输出： 4

解释：

依次标记下标 0 和 2，总奖励为 4，这是可获得的最大值。

---

- 示例 2：

输入： rewardValues = [1,6,4,3,2]

输出： 11

解释：

依次标记下标 0、2 和 1。总奖励为 11，这是可获得的最大值。

---

提示：

- `1 <= rewardValues.length <= 2000`
- `1 <= rewardValues[i] <= 2000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
