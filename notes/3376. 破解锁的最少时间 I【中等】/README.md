# [3376. 破解锁的最少时间 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3376.%20%E7%A0%B4%E8%A7%A3%E9%94%81%E7%9A%84%E6%9C%80%E5%B0%91%E6%97%B6%E9%97%B4%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-time-to-break-locks-i/)

Bob 被困在了一个地窖里，他需要破解 `n` 个锁才能逃出地窖，每一个锁都需要一定的 能量 才能打开。每一个锁需要的能量存放在一个数组 `strength` 里，其中 `strength[i]` 表示打开第 `i` 个锁需要的能量。

Bob 有一把剑，它具备以下的特征：

- 一开始剑的能量为 0。
- 剑的能量增加因子 `X` 一开始的值为 1。
- 每分钟，剑的能量都会增加当前的 `X` 值。
- 打开第 `i` 把锁，剑的能量需要到达 至少 `strength[i]`。
- 打开一把锁以后，剑的能量会变回 0 ，`X` 的值会增加一个给定的值 `K`。

你的任务是打开所有 `n` 把锁并逃出地窖，请你求出需要的 最少 分钟数。

请你返回 Bob 打开所有 `n` 把锁需要的 最少 时间。

---

示例 1：

输入： strength = [3,4,1], K = 1

输出： 4

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-36-31.png)

无法用少于 4 分钟打开所有的锁，所以答案为 4。

---

示例 2：

输入： strength = [2,5,4], K = 2

输出： 5

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-36-46.png)

无法用少于 5 分钟打开所有的锁，所以答案为 5。

---

提示：

- `n == strength.length`
- `1 <= n <= 8`
- `1 <= K <= 10`
- `1 <= strength[i] <= 10^6`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
