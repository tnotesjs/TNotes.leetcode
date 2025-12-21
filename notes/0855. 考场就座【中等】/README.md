# [0855. 考场就座【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0855.%20%E8%80%83%E5%9C%BA%E5%B0%B1%E5%BA%A7%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/exam-room/)

在考场里，有 `n` 个座位排成一行，编号为 `0` 到 `n - 1`。

当学生进入考场后，他必须坐在离最近的人最远的座位上。如果有多个这样的座位，他会坐在编号最小的座位上。(另外，如果考场里没有人，那么学生就坐在 `0` 号座位上。)

设计一个模拟所述考场的类。

实现 `ExamRoom` 类：

- `ExamRoom(int n)` 用座位的数量 `n` 初始化考场对象。
- `int seat()` 返回下一个学生将会入座的座位编号。
- `void leave(int p)` 指定坐在座位 `p` 的学生将离开教室。保证座位 `p` 上会有一位学生。

---

- 示例 1：

```txt
输入：
["ExamRoom", "seat", "seat", "seat", "seat", "leave", "seat"]
[[10], [], [], [], [], [4], []]
输出：
[null, 0, 9, 4, 2, null, 5]
解释：
ExamRoom examRoom = new ExamRoom(10);
examRoom.seat(); // 返回 0，房间里没有人，学生坐在 0 号座位。
examRoom.seat(); // 返回 9，学生最后坐在 9 号座位。
examRoom.seat(); // 返回 4，学生最后坐在 4 号座位。
examRoom.seat(); // 返回 2，学生最后坐在 2 号座位。
examRoom.leave(4);
examRoom.seat(); // 返回 5，学生最后坐在 5 号座位。
```

---

提示：

1. `1 <= n <= 10^9`
2. 保证有学生正坐在座位 `p` 上。
3. `seat` 和 `leave` 最多被调用 `10^4` 次。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
