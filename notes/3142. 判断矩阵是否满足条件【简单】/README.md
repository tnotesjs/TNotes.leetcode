# [3142. 判断矩阵是否满足条件【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3142.%20%E5%88%A4%E6%96%AD%E7%9F%A9%E9%98%B5%E6%98%AF%E5%90%A6%E6%BB%A1%E8%B6%B3%E6%9D%A1%E4%BB%B6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-grid-satisfies-conditions/)

给你一个大小为 `m x n` 的二维矩阵 `grid` 。你需要判断每一个格子 `grid[i][j]` 是否满足：

- 如果它下面的格子存在，那么它需要等于它下面的格子，也就是 `grid[i][j] == grid[i + 1][j]` 。
- 如果它右边的格子存在，那么它需要不等于它右边的格子，也就是 `grid[i][j] != grid[i][j + 1]` 。

如果 **所有** 格子都满足以上条件，那么返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

**输入：** grid = [[1,0,2],[1,0,2]]

**输出：** true

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-08-01-40.png)

网格图中所有格子都符合条件。

---

- **示例 2：**

**输入：** grid = [[1,1,1],[0,0,0]]

**输出：** false

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-08-01-47.png)

同一行中的格子值都相等。

---

- **示例 3：**

**输入：** grid = [[1],[2],[3]]

**输出：** false

**解释：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-08-01-58.png)

同一列中的格子值不相等。

---

**提示：**

- `1 <= n, m <= 10`
- `0 <= grid[i][j] <= 9`

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
