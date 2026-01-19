# [0754. 到达终点数字【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0754.%20%E5%88%B0%E8%BE%BE%E7%BB%88%E7%82%B9%E6%95%B0%E5%AD%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reach-a-number/)

在一根无限长的数轴上，你站在`0`的位置。终点在`target`的位置。

你可以做一些数量的移动 `numMoves` :

- 每次你可以选择向左或向右移动。
- 第 `i` 次移动（从 `i == 1` 开始，到 `i == numMoves` ），在选择的方向上走 `i` 步。

给定整数 `target`，返回 _到达目标所需的 最小 移动次数(即最小 `numMoves` )_。

---

示例 1：

```txt
输入: target = 2
输出: 3
解释:
第一次移动，从 0 到 1。
第二次移动，从 1 到 -1。
第三次移动，从 -1 到 2。
```

示例 2：

```txt
输入: target = 3
输出: 2
解释:
第一次移动，从 0 到 1。
第二次移动，从 1 到 3。
```

---

提示：

- `-10^9 <= target <= 10^9`
- `target != 0`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
