# [2409. 统计共同度过的日子数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2409.%20%E7%BB%9F%E8%AE%A1%E5%85%B1%E5%90%8C%E5%BA%A6%E8%BF%87%E7%9A%84%E6%97%A5%E5%AD%90%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 日期转换 + 区间重叠](#2--s1---日期转换--区间重叠)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-days-spent-together/)

Alice 和 Bob 计划分别去罗马开会。

给你四个字符串 `arriveAlice`，`leaveAlice`，`arriveBob` 和 `leaveBob`。Alice 会在日期 `arriveAlice` 到 `leaveAlice` 之间在城市里（日期为闭区间），而 Bob 在日期 `arriveBob` 到 `leaveBob` 之间在城市里（日期为闭区间）。每个字符串都包含 5 个字符，格式为 `"MM-DD"`，对应着一个日期的月和日。

请你返回 Alice 和 Bob 同时在罗马的天数。

你可以假设所有日期都在同一个自然年，而且不是闰年。每个月份的天数分别为：`[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]`。

---

示例 1：

```txt
输入：
arriveAlice = "08-15",
leaveAlice = "08-18",
arriveBob = "08-16",
leaveBob = "08-19"

输出：3

解释：
Alice 从 8 月 15 号到 8 月 18 号在罗马。
Bob 从 8 月 16 号到 8 月 19 号在罗马，他们同时在罗马的日期为 8 月 16、17 和 18 号。
所以答案为 3。
```

---

示例 2：

```txt
输入：
arriveAlice = "10-01",
leaveAlice = "10-31",
arriveBob = "11-01",
leaveBob = "12-31"

输出：0

解释：
Alice 和 Bob 没有同时在罗马的日子，所以我们返回 0。
```

---

提示：

- 所有日期的格式均为 `"MM-DD"`。
- Alice 和 Bob 的到达日期都早于或等于他们的离开日期。
- 题目测试用例所给出的日期均为非闰年的有效日期。

## 2. 🎯 s.1 - 日期转换 + 区间重叠

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$，固定次数的日期转换和计算
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 将每个日期（MM-DD 格式）转换为一年中的第几天，便于计算区间
- 转换方法：累加该月之前所有月份的天数，再加上当月的日期
- 计算两个区间的重叠部分：重叠开始日 = max(aliceStart, bobStart)，重叠结束日 = min(aliceEnd, bobEnd)
- 重叠天数 = max(0, 重叠结束日 - 重叠开始日 + 1)，如果结果为负数说明没有重叠
