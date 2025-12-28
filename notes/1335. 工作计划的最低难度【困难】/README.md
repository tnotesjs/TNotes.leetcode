# [1335. 工作计划的最低难度【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1335.%20%E5%B7%A5%E4%BD%9C%E8%AE%A1%E5%88%92%E7%9A%84%E6%9C%80%E4%BD%8E%E9%9A%BE%E5%BA%A6%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-difficulty-of-a-job-schedule/)

你需要制定一份 `d` 天的工作计划表。工作之间存在依赖，要想执行第 `i` 项工作，你必须完成全部 `j` 项工作（ `0 <= j < i`）。

你每天 至少 需要完成一项任务。工作计划的总难度是这 `d` 天每一天的难度之和，而一天的工作难度是当天应该完成工作的最大难度。

给你一个整数数组 `jobDifficulty` 和一个整数 `d`，分别代表工作难度和需要计划的天数。第 `i` 项工作的难度是 `jobDifficulty[i]`。

返回整个工作计划的 最小难度。如果无法制定工作计划，则返回 \-1。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-39-30.png)

```txt
输入：jobDifficulty = [6,5,4,3,2,1], d = 2
输出：7
解释：第一天，您可以完成前 5 项工作，总难度 = 6.
第二天，您可以完成最后一项工作，总难度 = 1.
计划表的难度 = 6 + 1 = 7
```

- 示例 2：

```txt
输入：jobDifficulty = [9,9,9], d = 4
输出：-1
解释：就算你每天完成一项工作，仍然有一天是空闲的，你无法制定一份能够满足既定工作时间的计划表。
```

- 示例 3：

```txt
输入：jobDifficulty = [1,1,1], d = 3
输出：3
解释：工作计划为每天一项工作，总难度为 3。
```

- 示例 4：

```txt
输入：jobDifficulty = [7,1,7,1,7,1], d = 3
输出：15
```

- 示例 5：

```txt
输入：jobDifficulty = [11,111,22,222,33,333,44,444], d = 6
输出：843
```

---

提示：

- `1 <= jobDifficulty.length <= 300`
- `0 <= jobDifficulty[i] <= 1000`
- `1 <= d <= 10`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
