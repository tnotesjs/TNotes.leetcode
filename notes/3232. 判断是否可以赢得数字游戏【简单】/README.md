# [3232. 判断是否可以赢得数字游戏【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3232.%20%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E8%B5%A2%E5%BE%97%E6%95%B0%E5%AD%97%E6%B8%B8%E6%88%8F%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 分组求和](#2--s1---分组求和)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-if-digit-game-can-be-won/)

给你一个 正整数 数组 `nums`。

Alice 和 Bob 正在玩游戏。在游戏中，Alice 可以从 `nums` 中选择所有个位数 或 所有两位数，剩余的数字归 Bob 所有。如果 Alice 所选数字之和 严格大于 Bob 的数字之和，则 Alice 获胜。

如果 Alice 能赢得这场游戏，返回 `true`；否则，返回 `false`。

---

示例 1：

输入： nums = [1,2,3,4,10]

输出： false

解释：

Alice 不管选个位数还是两位数都无法赢得比赛。

---

示例 2：

输入： nums = [1,2,3,4,5,14]

输出： true

解释：

Alice 选择个位数可以赢得比赛，所选数字之和为 15。

---

示例 3：

输入： nums = [5,5,5,25]

输出： true

解释：

Alice 选择两位数可以赢得比赛，所选数字之和为 25。

---

提示：

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 99`

## 2. 🎯 s.1 - 分组求和

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

解题思路：

- 分别计算个位数之和与两位数之和
- Alice 可以选择和更大的那一组
- 只要两组和不相等，Alice 就能赢（选和大的那组）
