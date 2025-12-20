# [1453. 圆形靶内的最大飞镖数量【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1453.%20%E5%9C%86%E5%BD%A2%E9%9D%B6%E5%86%85%E7%9A%84%E6%9C%80%E5%A4%A7%E9%A3%9E%E9%95%96%E6%95%B0%E9%87%8F%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/)

Alice 向一面非常大的墙上掷出 `n` 支飞镖。给你一个数组 `darts` ，其中 `darts[i] = [xi, yi]` 表示 Alice 掷出的第 `i` 支飞镖落在墙上的位置。

Bob 知道墙上所有 `n` 支飞镖的位置。他想要往墙上放置一个半径为 `r` 的圆形靶。使 Alice 掷出的飞镖尽可能多地落在靶上。

给你整数 `r` ，请返回能够落在 任意 半径为 `r` 的圆形靶内或靶上的最大飞镖数。

示例 1 ：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-02-22.png)

```txt
输入：darts = [[-2,0],[2,0],[0,2],[0,-2]], r = 2
输出：4

解释：
如果圆形靶的圆心为 (0,0) ，半径为 2 ，所有的飞镖都落在靶上，此时落在靶上的飞镖数最大，值为 4 。
```

示例 2 ：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-02-28.png)

```txt
输入：darts = [[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], r = 5
输出：5

解释：
如果圆形靶的圆心为 (0,4) ，半径为 5 ，则除了 (7,8) 之外的飞镖都落在靶上，此时落在靶上的飞镖数最大，值为 5 。
```

---

提示：

- `1 <= darts.length <= 100`
- `darts[i].length == 2`
- `-10^4 <= xi, yi <= 10^4`
- `darts` 中的元素互不相同
- `1 <= r <= 5000`

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
