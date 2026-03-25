# [1845. 座位预约管理系统【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1845.%20%E5%BA%A7%E4%BD%8D%E9%A2%84%E7%BA%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/seat-reservation-manager/)

请你设计一个管理 `n` 个座位预约的系统，座位编号从 `1` 到 `n`。

请你实现 `SeatManager` 类：

- `SeatManager(int n)` 初始化一个 `SeatManager` 对象，它管理从 `1` 到 `n` 编号的 `n` 个座位。所有座位初始都是可预约的。
- `int reserve()` 返回可以预约座位的 最小编号，此座位变为不可预约。
- `void unreserve(int seatNumber)` 将给定编号 `seatNumber` 对应的座位变成可以预约。

---

示例 1：

```txt
输入：
["SeatManager", "reserve", "reserve", "unreserve", "reserve", "reserve", "reserve", "reserve", "unreserve"]
[[5], [], [], [2], [], [], [], [], [5]]
输出：
[null, 1, 2, null, 2, 3, 4, 5, null]

解释：
SeatManager seatManager = new SeatManager(5); // 初始化 SeatManager，有 5 个座位。
seatManager.reserve();    // 所有座位都可以预约，所以返回最小编号的座位，也就是 1。
seatManager.reserve();    // 可以预约的座位为 [2,3,4,5]，返回最小编号的座位，也就是 2。
seatManager.unreserve(2); // 将座位 2 变为可以预约，现在可预约的座位为 [2,3,4,5]。
seatManager.reserve();    // 可以预约的座位为 [2,3,4,5]，返回最小编号的座位，也就是 2。
seatManager.reserve();    // 可以预约的座位为 [3,4,5]，返回最小编号的座位，也就是 3。
seatManager.reserve();    // 可以预约的座位为 [4,5]，返回最小编号的座位，也就是 4。
seatManager.reserve();    // 唯一可以预约的是座位 5，所以返回 5。
seatManager.unreserve(5); // 将座位 5 变为可以预约，现在可预约的座位为 [5]。
```

---

提示：

- `1 <= n <= 10^5`
- `1 <= seatNumber <= n`
- 每一次对 `reserve` 的调用，题目保证至少存在一个可以预约的座位。
- 每一次对 `unreserve` 的调用，题目保证 `seatNumber` 在调用函数前都是被预约状态。
- 对 `reserve` 和 `unreserve` 的调用 总共 不超过 `10^5` 次。

## 2. 🎯 s.1 - 最小堆

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：reserve 和 unreserve 均为 $O(\log n)$
- 空间复杂度：$O(n)$，堆的空间

算法思路：

- 用最小堆管理可用座位号
- reserve 时弹出堆顶（最小编号）
- unreserve 时将座位号重新加入堆中
