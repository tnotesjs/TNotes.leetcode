# [3402. 使每一列严格递增的最少操作次数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3402.%20%E4%BD%BF%E6%AF%8F%E4%B8%80%E5%88%97%E4%B8%A5%E6%A0%BC%E9%80%92%E5%A2%9E%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-operations-to-make-columns-strictly-increasing/)

给你一个由 **非负** 整数组成的 `m x n` 矩阵 `grid`。

在一次操作中，你可以将任意元素 `grid[i][j]` 的值增加 1。

返回使 `grid` 的所有列 **严格递增** 所需的 **最少** 操作次数。

---

- **示例 1：**

**输入:** grid = [[3,2],[1,3],[3,4],[0,1]]

**输出:** 15

**解释:**

- 为了让第 `0` 列严格递增，可以对 `grid[1][0]` 执行 3 次操作，对 `grid[2][0]` 执行 2 次操作，对 `grid[3][0]` 执行 6 次操作。
- 为了让第 `1` 列严格递增，可以对 `grid[3][1]` 执行 4 次操作。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-48-50.png)

---

- **示例 2：**

**输入:** grid = [[3,2,1],[2,1,0],[1,2,3]]

**输出:** 12

**解释:**

- 为了让第 `0` 列严格递增，可以对 `grid[1][0]` 执行 2 次操作，对 `grid[2][0]` 执行 4 次操作。
- 为了让第 `1` 列严格递增，可以对 `grid[1][1]` 执行 2 次操作，对 `grid[2][1]` 执行 2 次操作。
- 为了让第 `2` 列严格递增，可以对 `grid[1][2]` 执行 2 次操作。

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-48-57.png)

---

提示:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50`
- `0 <= grid[i][j] < 2500`

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
