# [2406. 将区间分为最少组数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2406.%20%E5%B0%86%E5%8C%BA%E9%97%B4%E5%88%86%E4%B8%BA%E6%9C%80%E5%B0%91%E7%BB%84%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/divide-intervals-into-minimum-number-of-groups/)

给你一个二维整数数组 `intervals`，其中 `intervals[i] = [lefti, righti]` 表示 闭 区间 `[lefti, righti]`。

你需要将 `intervals` 划分为一个或者多个区间 组，每个区间 只 属于一个组，且同一个组中任意两个区间 不相交。

请你返回 最少 需要划分成多少个组。

如果两个区间覆盖的范围有重叠（即至少有一个公共数字），那么我们称这两个区间是 相交 的。比方说区间 `[1, 5]` 和 `[5, 8]` 相交。

---

示例 1：

```txt
输入：intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
输出：3
解释：我们可以将区间划分为如下的区间组：
- 第 1 组：[1, 5]，[6, 8]。
- 第 2 组：[2, 3]，[5, 10]。
- 第 3 组：[1, 10]。
可以证明无法将区间划分为少于 3 个组。
```

示例 2：

```txt
输入：intervals = [[1,3],[5,6],[8,10],[11,13]]
输出：1
解释：所有区间互不相交，所以我们可以把它们全部放在一个组内。
```

---

提示：

- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `1 <= lefti <= righti <= 10^6`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
