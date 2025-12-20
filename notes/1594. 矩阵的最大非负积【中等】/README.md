# [1594. 矩阵的最大非负积【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1594.%20%E7%9F%A9%E9%98%B5%E7%9A%84%E6%9C%80%E5%A4%A7%E9%9D%9E%E8%B4%9F%E7%A7%AF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-non-negative-product-in-a-matrix/)

给你一个大小为 `m x n` 的矩阵 `grid` 。最初，你位于左上角 `(0, 0)` ，每一步，你可以在矩阵中 向右 或 向下 移动。

在从左上角 `(0, 0)` 开始到右下角 `(m - 1, n - 1)` 结束的所有路径中，找出具有 最大非负积 的路径。路径的积是沿路径访问的单元格中所有整数的乘积。

返回 最大非负积 对 `10^9 + 7` 取余 的结果。如果最大积为 负数 ，则返回 `-1` 。

注意，取余是在得到最大积之后执行的。

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-13-03.png)

```txt
输入：grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]
输出：-1
解释：从 (0, 0) 到 (2, 2) 的路径中无法得到非负积，所以返回 -1 。
```

- 示例 2：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-13-09.png)

```txt
输入：grid = [[1,-2,1],[1,-2,1],[3,-4,1]]
输出：8
解释：最大非负积对应的路径如图所示 (1 * 1 * -2 * -4 * 1 = 8)
```

- 示例 3：

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-13-15.png)

```txt
输入：grid = [[1,3],[0,-4]]
输出：0
解释：最大非负积对应的路径如图所示 (1 * 0 * -4 = 0)
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 15`
- `-4 <= grid[i][j] <= 4`

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
