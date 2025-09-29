# [3127. 构造相同颜色的正方形【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3127.%20%E6%9E%84%E9%80%A0%E7%9B%B8%E5%90%8C%E9%A2%9C%E8%89%B2%E7%9A%84%E6%AD%A3%E6%96%B9%E5%BD%A2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/make-a-square-with-the-same-color/)

给你一个二维 `3 x 3` 的矩阵 `grid` ，每个格子都是一个字符，要么是 `'B'` ，要么是 `'W'` 。字符 `'W'` 表示白色，字符 `'B'` 表示黑色。

你的任务是改变 **至多一个** 格子的颜色，使得矩阵中存在一个 `2 x 2` 颜色完全相同的正方形。

如果可以得到一个相同颜色的 `2 x 2` 正方形，那么返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-07-47-58.png)

**输入：** grid = [["B","W","B"],["B","W","W"],["B","W","B"]]

**输出：** true

**解释：**

修改 `grid[0][2]` 的颜色，可以满足要求。

---

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-07-48-15.png)

**输入：** grid = [["B","W","B"],["W","B","W"],["B","W","B"]]

**输出：** false

**解释：**

只改变一个格子颜色无法满足要求。

---

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-07-48-33.png)

**输入：** grid = [["B","W","B"],["B","W","W"],["B","W","W"]]

**输出：** true

**解释：**

`grid` 已经包含一个 `2 x 2` 颜色相同的正方形了。

---

**提示：**

- `grid.length == 3`
- `grid[i].length == 3`
- `grid[i][j]` 要么是 `'W'` ，要么是 `'B'` 。

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
