# [0063. 不同路径 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0063.%20%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 动态规划（滚动数组）](#2--s1---动态规划滚动数组)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/unique-paths-ii/)

给定一个 `m x n` 的整数数组 `grid`。一个机器人初始位于 左上角（即 `grid[0][0]`）。机器人尝试移动到 右下角（即 `grid[m - 1][n - 1]`）。机器人每次只能向下或者向右移动一步。

网格中的障碍物和空位置分别用 `1` 和 `0` 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。

返回机器人能够到达右下角的不同路径数量。

测试用例保证答案小于等于 `2 * 10^9`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-31-06.png)

```txt
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-31-12.png)

```txt
输入：obstacleGrid = [[0,1],[0,0]]
输出：1
```

---

提示：

- `m == obstacleGrid.length`
- `n == obstacleGrid[i].length`
- `1 <= m, n <= 100`
- `obstacleGrid[i][j]` 为 `0` 或 `1`

## 2. 🎯 s.1 - 动态规划（滚动数组）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，遍历整个网格
- 空间复杂度：$O(n)$，只使用一维滚动数组

算法思路：

- 在 0062 的基础上增加障碍物处理：遇到障碍物的位置路径数直接置 0
- 状态转移：若 `obstacleGrid[i][j] == 1`，则 `dp[j] = 0`；否则 `dp[j] = dp[j] + dp[j-1]`
- 第一行和第一列需单独处理：一旦遇到障碍物，后续位置均不可达
