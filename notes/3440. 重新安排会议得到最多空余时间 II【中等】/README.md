# [3440. 重新安排会议得到最多空余时间 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3440.%20%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E4%BC%9A%E8%AE%AE%E5%BE%97%E5%88%B0%E6%9C%80%E5%A4%9A%E7%A9%BA%E4%BD%99%E6%97%B6%E9%97%B4%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reschedule-meetings-for-maximum-free-time-ii/)

给你一个整数 `eventTime` 表示一个活动的总时长，这个活动开始于 `t = 0` ，结束于 `t = eventTime` 。

同时给你两个长度为 `n` 的整数数组 `startTime` 和 `endTime` 。它们表示这次活动中 `n` 个时间 没有重叠 的会议，其中第 `i` 个会议的时间为 `[startTime[i], endTime[i]]` 。

你可以重新安排 至多 一个会议，安排的规则是将会议时间平移，且保持原来的 会议时长 ，你的目的是移动会议后 最大化 最长 连续空余时间。

请你返回重新安排会议以后，可以得到的 最大 空余时间。

注意，会议 不能 安排到整个活动的时间以外，且会议之间需要保持互不重叠。

---

注意： 重新安排会议以后，会议之间的顺序可以发生改变。

---

- 示例 1：

输入： eventTime = 5, startTime = [1,3], endTime = [2,5]

输出： 2

解释：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-13-53.png)

将 `[1, 2]` 的会议安排到 `[2, 3]` ，得到空余时间 `[0, 2]` 。

---

- 示例 2：

输入： eventTime = 10, startTime = [0,7,9], endTime = [1,8,10]

输出： 7

解释：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-14-02.png)

将 `[0, 1]` 的会议安排到 `[8, 9]` ，得到空余时间 `[0, 7]` 。

---

- 示例 3：

输入： eventTime = 10, startTime = [0,3,7,9], endTime = [1,4,8,10]

输出： 6

解释：

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-15-07.png)

将 `[3, 4]` 的会议安排到 `[8, 9]` ，得到空余时间 `[1, 7]` 。

---

- 示例 4：

输入： eventTime = 5, startTime = [0,1,2,3,4], endTime = [1,2,3,4,5]

输出： 0

解释：

活动中的所有时间都被会议安排满了。

---

提示：

- `1 <= eventTime <= 10^9`
- `n == startTime.length == endTime.length`
- `2 <= n <= 10^5`
- `0 <= startTime[i] < endTime[i] <= eventTime`
- `endTime[i] <= startTime[i + 1]` 其中 `i` 在范围 `[0, n - 2]` 之间。

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
