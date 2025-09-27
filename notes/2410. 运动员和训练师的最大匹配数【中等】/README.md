# [2410. 运动员和训练师的最大匹配数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2410.%20%E8%BF%90%E5%8A%A8%E5%91%98%E5%92%8C%E8%AE%AD%E7%BB%83%E5%B8%88%E7%9A%84%E6%9C%80%E5%A4%A7%E5%8C%B9%E9%85%8D%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-matching-of-players-with-trainers/)

给你一个下标从 **0**  开始的整数数组  `players` ，其中  `players[i]`  表示第 `i`  名运动员的 **能力**  值，同时给你一个下标从 **0**  开始的整数数组  `trainers` ，其中  `trainers[j]`  表示第 `j`  名训练师的 **训练能力值** 。

如果第 `i`  名运动员的能力值 **小于等于**  第 `j`  名训练师的能力值，那么第  `i`  名运动员可以 **匹配**  第  `j`  名训练师。除此以外，每名运动员至多可以匹配一位训练师，每位训练师最多可以匹配一位运动员。

请你返回满足上述要求  `players`  和 `trainers`  的 **最大** 匹配数。

---

- **示例 1：**

```txt
输入：players = [4,7,9], trainers = [8,2,5,8]
输出：2
解释：
得到两个匹配的一种方案是：
- players[0] 与 trainers[0] 匹配，因为 4 <= 8 。
- players[1] 与 trainers[3] 匹配，因为 7 <= 8 。
可以证明 2 是可以形成的最大匹配数。
```

- **示例 2：**

```txt
输入：players = [1,1,1], trainers = [10]
输出：1
解释：
训练师可以匹配所有 3 个运动员
每个运动员至多只能匹配一个训练师，所以最大答案是 1 。
```

---

**提示：**

- `1 <= players.length, trainers.length <= 10^5`
- `1 <= players[i], trainers[j] <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
