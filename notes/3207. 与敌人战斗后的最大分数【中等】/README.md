# [3207. 与敌人战斗后的最大分数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3207.%20%E4%B8%8E%E6%95%8C%E4%BA%BA%E6%88%98%E6%96%97%E5%90%8E%E7%9A%84%E6%9C%80%E5%A4%A7%E5%88%86%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-points-after-enemy-battles/)

给你一个下标从 0 开始的整数数组 `enemyEnergies`，它表示一个下标从 0 开始的敌人能量数组。

同时给你一个整数 `currentEnergy`，它表示你一开始拥有的能量值总量。

你一开始的分数为 `0`，且一开始所有的敌人都未标记。

你可以通过以下操作 之一 任意次（也可以 0 次）来得分：

- 选择一个 未标记 且满足 `currentEnergy >= enemyEnergies[i]` 的敌人 `i`。在这个操作中：
  - 你会获得 `1` 分。
  - 你的能量值减少 `enemyEnergies[i]`，也就是说 `currentEnergy = currentEnergy - enemyEnergies[i]`。
- 如果你目前 至少 有 `1` 分，你可以选择一个 未标记 的敌人 `i`。在这个操作中：
  - 你的能量值增加 `enemyEnergies[i]`，也就是说 `currentEnergy = currentEnergy + enemyEnergies[i]`。
  - 敌人 `i` 被标记。

请你返回通过以上操作，最多 可以获得多少分。

---

示例 1：

输入：enemyEnergies = [3,2,2], currentEnergy = 2

输出：3

解释：

通过以下操作可以得到最大得分 3 分：

- 对敌人 1 使用第一种操作：`points` 增加 1，`currentEnergy` 减少 2。所以 `points = 1` 且 `currentEnergy = 0`。
- 对敌人 0 使用第二种操作：`currentEnergy` 增加 3，敌人 0 被标记。所以 `points = 1`，`currentEnergy = 3`，被标记的敌人包括 `[0]`。
- 对敌人 2 使用第一种操作：`points` 增加 1，`currentEnergy` 减少 2。所以 `points = 2` 且 `currentEnergy = 1`，被标记的敌人包括`[0]`。
- 对敌人 2 使用第二种操作：`currentEnergy` 增加 2，敌人 2 被标记。所以 `points = 2`，`currentEnergy = 3` 且被标记的敌人包括 `[0, 2]`。
- 对敌人 1 使用第一种操作：`points` 增加 1，`currentEnergy` 减少 2。所以 `points = 3`，`currentEnergy = 1`，被标记的敌人包括 `[0, 2]`。

---

示例 2：

输入：enemyEnergies = [2], currentEnergy = 10

输出：5

解释：

通过对敌人 0 进行第一种操作 5 次，得到最大得分。

---

提示：

- `1 <= enemyEnergies.length <= 10^5`
- `1 <= enemyEnergies[i] <= 10^9`
- `0 <= currentEnergy <= 10^9`

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n \log n)$，排序
- 空间复杂度：$O(1)$，原地排序

算法思路：

- 排序后，先击败能量最小的敌人得 1 分
- 然后标记其余所有敌人获取能量
- 最终总能量全部用于击败最弱敌人，得分 = 总能量 / 最小能量

