# [0732. 我的日程安排表 III【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0732.%20%E6%88%91%E7%9A%84%E6%97%A5%E7%A8%8B%E5%AE%89%E6%8E%92%E8%A1%A8%20III%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/my-calendar-iii/)

当 `k` 个日程存在一些非空交集时（即, `k` 个日程包含了一些相同时间），就会产生 `k` 次预订。

给你一些日程安排 `[startTime, endTime)` ，请你在每个日程安排添加后，返回一个整数 `k` ，表示所有先前日程安排会产生的最大 `k` 次预订。

实现一个 `MyCalendarThree` 类来存放你的日程安排，你可以一直添加新的日程安排。

- `MyCalendarThree()` 初始化对象。
- `int book(int startTime, int endTime)` 返回一个整数 `k` ，表示日历中存在的 `k` 次预订的最大值。

示例：

```txt
输入：
["MyCalendarThree", "book", "book", "book", "book", "book", "book"]
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]

输出：
[null, 1, 1, 2, 3, 3, 3]

解释：
MyCalendarThree myCalendarThree = new MyCalendarThree();
myCalendarThree.book(10, 20); // 返回 1 ，第一个日程安排可以预订并且不存在相交，所以最大 k 次预订是 1 次预订。
myCalendarThree.book(50, 60); // 返回 1 ，第二个日程安排可以预订并且不存在相交，所以最大 k 次预订是 1 次预订。
myCalendarThree.book(10, 40); // 返回 2 ，第三个日程安排 [10, 40) 与第一个日程安排相交，所以最大 k 次预订是 2 次预订。
myCalendarThree.book(5, 15); // 返回 3 ，剩下的日程安排的最大 k 次预订是 3 次预订。
myCalendarThree.book(5, 10); // 返回 3
myCalendarThree.book(25, 55); // 返回 3
```

---

提示：

- `0 <= startTime < endTime <= 10^9`
- 每个测试用例，调用 `book` 函数最多不超过 `400`次

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
