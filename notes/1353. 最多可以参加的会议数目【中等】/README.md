# [1353. 最多可以参加的会议数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1353.%20%E6%9C%80%E5%A4%9A%E5%8F%AF%E4%BB%A5%E5%8F%82%E5%8A%A0%E7%9A%84%E4%BC%9A%E8%AE%AE%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended/)

给你一个数组 `events`，其中 `events[i] = [startDayi, endDayi]` ，表示会议 `i` 开始于 `startDayi` ，结束于 `endDayi` 。

你可以在满足 `startDayi <= d <= endDayi` 中的任意一天 `d` 参加会议 `i` 。在任意一天 `d` 中只能参加一场会议。

请你返回你可以参加的 **最大** 会议数目。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-47-07.png)

```txt
输入：events = [[1,2],[2,3],[3,4]]
输出：3
解释：你可以参加所有的三个会议。
安排会议的一种方案如上图。
第 1 天参加第一个会议。
第 2 天参加第二个会议。
第 3 天参加第三个会议。
```

- **示例 2：**

```txt
输入：events= [[1,2],[2,3],[3,4],[1,2]]
输出：4
```

**提示：**​​​​​​

- `1 <= events.length <= 10^5`
- `events[i].length == 2`
- `1 <= startDayi <= endDayi <= 10^5`

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
