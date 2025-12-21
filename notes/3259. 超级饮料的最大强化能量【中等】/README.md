# [3259. 超级饮料的最大强化能量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3259.%20%E8%B6%85%E7%BA%A7%E9%A5%AE%E6%96%99%E7%9A%84%E6%9C%80%E5%A4%A7%E5%BC%BA%E5%8C%96%E8%83%BD%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-energy-boost-from-two-drinks/)

来自未来的体育科学家给你两个整数数组 `energyDrinkA` 和 `energyDrinkB`，数组长度都等于 `n`。这两个数组分别代表 A、B 两种不同能量饮料每小时所能提供的强化能量。

你需要每小时饮用一种能量饮料来 最大化 你的总强化能量。然而，如果从一种能量饮料切换到另一种，你需要等待一小时来梳理身体的能量体系（在那个小时里你将不会获得任何强化能量）。

返回在接下来的 `n` 小时内你能获得的 最大 总强化能量。

注意 你可以选择从饮用任意一种能量饮料开始。

---

- 示例 1：

输入： energyDrinkA = [1,3,1], energyDrinkB = [3,1,1]

输出： 5

解释：

要想获得 5 点强化能量，需要选择只饮用能量饮料 A（或者只饮用 B）。

---

- 示例 2：

输入： energyDrinkA = [4,1,1], energyDrinkB = [1,1,3]

输出： 7

解释：

- 第一个小时饮用能量饮料 A。
- 切换到能量饮料 B ，在第二个小时无法获得强化能量。
- 第三个小时饮用能量饮料 B ，并获得强化能量。

---

提示：

- `n == energyDrinkA.length == energyDrinkB.length`
- `3 <= n <= 10^5`
- `1 <= energyDrinkA[i], energyDrinkB[i] <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
