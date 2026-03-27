# [3296. 移山所需的最少秒数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3296.%20%E7%A7%BB%E5%B1%B1%E6%89%80%E9%9C%80%E7%9A%84%E6%9C%80%E5%B0%91%E7%A7%92%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-seconds-to-make-mountain-height-zero/)

给你一个整数 `mountainHeight` 表示山的高度。

同时给你一个整数数组 `workerTimes`，表示工人们的工作时间（单位：秒）。

工人们需要 同时 进行工作以 降低 山的高度。对于工人 `i` :

- 山的高度降低 `x`，需要花费 `workerTimes[i] + workerTimes[i] * 2 + ... + workerTimes[i] * x` 秒。例如：
  - 山的高度降低 1，需要 `workerTimes[i]` 秒。
  - 山的高度降低 2，需要 `workerTimes[i] + workerTimes[i] * 2` 秒，依此类推。

返回一个整数，表示工人们使山的高度降低到 0 所需的 最少 秒数。

---

示例 1：

输入：mountainHeight = 4, workerTimes = [2,1,1]

输出：3

解释：

将山的高度降低到 0 的一种方式是：

- 工人 0 将高度降低 1，花费 `workerTimes[0] = 2` 秒。
- 工人 1 将高度降低 2，花费 `workerTimes[1] + workerTimes[1] * 2 = 3` 秒。
- 工人 2 将高度降低 1，花费 `workerTimes[2] = 1` 秒。

因为工人同时工作，所需的最少时间为 `max(2, 3, 1) = 3` 秒。

---

示例 2：

输入：mountainHeight = 10, workerTimes = [3,2,2,4]

输出：12

解释：

- 工人 0 将高度降低 2，花费 `workerTimes[0] + workerTimes[0] * 2 = 9` 秒。
- 工人 1 将高度降低 3，花费 `workerTimes[1] + workerTimes[1] * 2 + workerTimes[1] * 3 = 12` 秒。
- 工人 2 将高度降低 3，花费 `workerTimes[2] + workerTimes[2] * 2 + workerTimes[2] * 3 = 12` 秒。
- 工人 3 将高度降低 2，花费 `workerTimes[3] + workerTimes[3] * 2 = 12` 秒。

所需的最少时间为 `max(9, 12, 12, 12) = 12` 秒。

---

示例 3：

输入：mountainHeight = 5, workerTimes = [1]

输出：15

解释：

这个示例中只有一个工人，所以答案是 `workerTimes[0] + workerTimes[0] * 2 + workerTimes[0] * 3 + workerTimes[0] * 4 + workerTimes[0] * 5 = 15` 秒。

---

提示：

- `1 <= mountainHeight <= 10^5`
- `1 <= workerTimes.length <= 10^4`
- `1 <= workerTimes[i] <= 10^6`

## 2. 🎯 s.1 - 二分答案

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n \log H \times \log T)$，H 是山的高度，T 是时间上界
- 空间复杂度：$O(1)$，只用常数额外空间

算法思路：

- 二分总时间 t
- 对每个工人，计算在 t 秒内最多能降低多少高度
- 工人 i 降低 x 需要 `workerTimes[i] * x * (x+1) / 2` 秒
- 所有工人能降低的总高度 >= mountainHeight 则可行

