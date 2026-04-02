# [1353. 最多可以参加的会议数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1353.%20%E6%9C%80%E5%A4%9A%E5%8F%AF%E4%BB%A5%E5%8F%82%E5%8A%A0%E7%9A%84%E4%BC%9A%E8%AE%AE%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心 + 最小堆](#2--s1---贪心--最小堆)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended/)

给你一个数组 `events`，其中 `events[i] = [startDayi, endDayi]`，表示会议 `i` 开始于 `startDayi`，结束于 `endDayi`。

你可以在满足 `startDayi <= d <= endDayi` 中的任意一天 `d` 参加会议 `i`。在任意一天 `d` 中只能参加一场会议。

请你返回你可以参加的 最大 会议数目。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-47-07.png)

```txt
输入：events = [[1,2],[2,3],[3,4]]
输出：3
解释：你可以参加所有的三个会议。
安排会议的一种方案如上图。
第 1 天参加第一个会议。
第 2 天参加第二个会议。
第 3 天参加第三个会议。
```

示例 2：

```txt
输入：events= [[1,2],[2,3],[3,4],[1,2]]
输出：4
```

提示：​​​​​​

- `1 <= events.length <= 10^5`
- `events[i].length == 2`
- `1 <= startDayi <= endDayi <= 10^5`

## 2. 🎯 s.1 - 贪心 + 最小堆

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 $n$ 是会议数量
- 空间复杂度：$O(n)$，堆的空间

算法思路：

- 按开始时间排序，逐天处理
- 每天将当天开始的会议的结束时间加入最小堆
- 删除已过期的会议，贪心地参加结束时间最早的会议（堆顶）
