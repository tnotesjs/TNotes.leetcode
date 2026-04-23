# [0055. 跳跃游戏【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0055.%20%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心](#2--s1---贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/jump-game/)

给你一个非负整数数组 `nums`，你最初位于数组的第一个下标。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标，如果可以，返回 `true`；否则，返回 `false`。

---

示例 1：

```txt
输入：nums = [2, 3, 1, 1, 4]
输出：true
```

解释：可以先跳 1 步，从下标 0 到达下标 1，然后再从下标 1 跳 3 步到达最后一个下标。

---

示例 2：

```txt
输入：nums = [3, 2, 1, 0, 4]
输出：false
```

解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0，所以永远不可能到达最后一个下标。

---

提示：

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^5`

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，只需遍历一次数组
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 维护 `maxReach` 表示当前能到达的最远位置，初始为 0
- 遍历数组，若当前下标 `i > maxReach`，说明无法到达当前位置，返回 `false`
- 否则更新 `maxReach = max(maxReach, i + nums[i])`，若 `maxReach >= n - 1`，提前返回 `true`
