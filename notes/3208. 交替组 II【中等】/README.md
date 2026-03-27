# [3208. 交替组 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3208.%20%E4%BA%A4%E6%9B%BF%E7%BB%84%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/alternating-groups-ii/)

给你一个整数数组 `colors` 和一个整数 `k`，`colors`表示一个由红色和蓝色瓷砖组成的环，第 `i` 块瓷砖的颜色为 `colors[i]` ：

- `colors[i] == 0` 表示第 `i` 块瓷砖的颜色是 红色。
- `colors[i] == 1` 表示第 `i` 块瓷砖的颜色是 蓝色。

环中连续 `k` 块瓷砖的颜色如果是 交替 颜色（也就是说除了第一块和最后一块瓷砖以外，中间瓷砖的颜色与它 左边 和 右边 的颜色都不同），那么它被称为一个 交替 组。

请你返回 交替 组的数目。

注意，由于 `colors` 表示一个 环，第一块 瓷砖和 最后一块 瓷砖是相邻的。

---

示例 1：

输入：colors = [0,1,0,1,0], k = 3

输出：3

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-19-06.png)

交替组包括：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-19-14.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-19-19.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-19-23.png)

---

示例 2：

输入：colors = [0,1,0,0,1,0,1], k = 6

输出：2

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-19-30.png)

交替组包括：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-19-35.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-19-40.png)

---

示例 3：

输入：colors = [1,1,0,1], k = 4

输出：0

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-19-57.png)

---

提示：

- `3 <= colors.length <= 10^5`
- `0 <= colors[i] <= 1`
- `3 <= k <= colors.length`

## 2. 🎯 s.1 - 滑动窗口

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n + k)$，环形遍历
- 空间复杂度：$O(1)$，只用常数额外空间

算法思路：

- 环形遍历 n + k - 2 次，维护当前交替子段长度
- 当交替长度 >= k 时计数加 1

