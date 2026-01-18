# [3449. 最大化游戏分数的最小值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3449.%20%E6%9C%80%E5%A4%A7%E5%8C%96%E6%B8%B8%E6%88%8F%E5%88%86%E6%95%B0%E7%9A%84%E6%9C%80%E5%B0%8F%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximize-the-minimum-game-score/)

给你一个长度为 `n` 的数组 `points` 和一个整数 `m`。同时有另外一个长度为 `n` 的数组 `gameScore` ，其中 `gameScore[i]` 表示第 `i` 个游戏得到的分数。一开始对于所有的 `i` 都有 `gameScore[i] == 0`。

你开始于下标 -1 处，该下标在数组以外（在下标 0 前面一个位置）。你可以执行 至多 `m` 次操作，每一次操作中，你可以执行以下两个操作之一：

- 将下标增加 1 ，同时将 `points[i]` 添加到 `gameScore[i]`。
- 将下标减少 1 ，同时将 `points[i]` 添加到 `gameScore[i]`。

注意，在第一次移动以后，下标必须始终保持在数组范围以内。

请你返回 至多 `m` 次操作以后，`gameScore` 里面最小值 最大 为多少。

---

示例 1：

输入：points = [2,4], m = 3

输出：4

解释：

一开始，下标 `i = -1` 且 `gameScore = [0, 0]`.

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-19-17.png)

`gameScore` 中的最小值为 4 ，这是所有方案中可以得到的最大值，所以返回 4。

---

示例 2：

输入：points = [1,2,3], m = 5

输出：2

解释：

一开始，下标 `i = -1` 且 `gameScore = [0, 0, 0]`。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-19-29.png)

`gameScore` 中的最小值为 2 ，这是所有方案中可以得到的最大值，所以返回 2。

---

提示：

- `2 <= n == points.length <= 5 * 10^4`
- `1 <= points[i] <= 10^6`
- `1 <= m <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
