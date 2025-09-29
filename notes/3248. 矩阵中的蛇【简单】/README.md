# [3248. 矩阵中的蛇【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3248.%20%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%9A%84%E8%9B%87%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/snake-in-matrix/)

大小为 `n x n` 的矩阵 `grid` 中有一条蛇。蛇可以朝 **四个可能的方向** 移动。矩阵中的每个单元格都使用位置进行标识： `grid[i][j] = (i * n) + j`。

蛇从单元格 0 开始，并遵循一系列命令移动。

给你一个整数 `n` 表示 `grid` 的大小，另给你一个字符串数组 `commands`，其中包括 `"UP"`、`"RIGHT"`、`"DOWN"` 和 `"LEFT"`。题目测评数据保证蛇在整个移动过程中将始终位于 `grid` 边界内。

返回执行 `commands` 后蛇所停留的最终单元格的位置。

---

- **示例 1：**

**输入：** n = 2, commands = ["RIGHT","DOWN"]

**输出：** 3

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-36-49.png)

---

- **示例 2：**

**输入：** n = 3, commands = ["DOWN","RIGHT","UP"]

**输出：** 1

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-37-00.png)

---

**提示：**

- `2 <= n <= 10`
- `1 <= commands.length <= 100`
- `commands` 仅由 `"UP"`、`"RIGHT"`、`"DOWN"` 和 `"LEFT"` 组成。
- 生成的测评数据确保蛇不会移动到矩阵的边界外。

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
