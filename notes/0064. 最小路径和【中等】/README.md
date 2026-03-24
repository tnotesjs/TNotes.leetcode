# [0064. 最小路径和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0064.%20%E6%9C%80%E5%B0%8F%E8%B7%AF%E5%BE%84%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 动态规划（滚动数组）](#2--s1---动态规划滚动数组)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-path-sum/)

给定一个包含非负整数的 `*m* x *n*` 网格 `grid`，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-31-47.png)

```txt
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

示例 2：

```txt
输入：grid = [[1,2,3],[4,5,6]]
输出：12
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 200`
- `0 <= grid[i][j] <= 200`

## 2. 🎯 s.1 - 动态规划（滚动数组）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，遍历整个网格
- 空间复杂度：$O(n)$，只使用一维滚动数组

算法思路：

- 状态定义：`dp[j]` 表示到达当前行第 `j` 列的最小路径和
- 第一行初始化为前缀和，第一列逐行累加
- 状态转移：`dp[j] = min(dp[j], dp[j-1]) + grid[i][j]`（取上方和左方的较小值加上当前格值）
