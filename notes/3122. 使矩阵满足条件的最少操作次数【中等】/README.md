# [3122. 使矩阵满足条件的最少操作次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3122.%20%E4%BD%BF%E7%9F%A9%E9%98%B5%E6%BB%A1%E8%B6%B3%E6%9D%A1%E4%BB%B6%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-operations-to-satisfy-conditions/)

给你一个大小为 `m x n` 的二维矩形 `grid`。每次 操作 中，你可以将 任一 格子的值修改为 任意 非负整数。完成所有操作后，你需要确保每个格子 `grid[i][j]` 的值满足：

- 如果下面相邻格子存在的话，它们的值相等，也就是 `grid[i][j] == grid[i + 1][j]`（如果存在）。
- 如果右边相邻格子存在的话，它们的值不相等，也就是 `grid[i][j] != grid[i][j + 1]`（如果存在）。

请你返回需要的 最少 操作数目。

---

- 示例 1：

输入： grid = [[1,0,2],[1,0,2]]

输出： 0

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-07-34-32.png)

矩阵中所有格子已经满足要求。

---

- 示例 2：

输入： grid = [[1,1,1],[0,0,0]]

输出： 3

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-07-34-53.png)

将矩阵变成 `[[1,0,1],[1,0,1]]`，它满足所有要求，需要 3 次操作：

- 将 `grid[1][0]` 变为 1。
- 将 `grid[0][1]` 变为 0。
- 将 `grid[1][2]` 变为 1。

---

- 示例 3：

输入： grid = [[1],[2],[3]]

输出： 2

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-07-35-03.png)

这个矩阵只有一列，我们可以通过 2 次操作将所有格子里的值变为 1。

---

提示：

- `1 <= n, m <= 1000`
- `0 <= grid[i][j] <= 9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
