# [3417. 跳过交替单元格的之字形遍历【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3417.%20%E8%B7%B3%E8%BF%87%E4%BA%A4%E6%9B%BF%E5%8D%95%E5%85%83%E6%A0%BC%E7%9A%84%E4%B9%8B%E5%AD%97%E5%BD%A2%E9%81%8D%E5%8E%86%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/zigzag-grid-traversal-with-skip/)

给你一个 `m x n` 的二维数组 `grid`，数组由 正整数 组成。

你的任务是以 之字形 遍历 `grid`，同时跳过每个 交替 的单元格。

之字形遍历的定义如下：

- 从左上角的单元格 `(0, 0)` 开始。
- 在当前行中向 右 移动，直到到达该行的末尾。
- 下移到下一行，然后在该行中向 左 移动，直到到达该行的开头。
- 继续在行间交替向右和向左移动，直到所有行都被遍历完。

---

注意： 在遍历过程中，必须跳过每个 交替 的单元格。

返回一个整数数组 `result`，其中包含按 顺序 记录的、且跳过交替单元格后的之字形遍历中访问到的单元格值。

---

- 示例 1：

输入： grid = [[1,2],[3,4]]

输出： [1,4]

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-58-38.png)

---

- 示例 2：

输入： grid = [[2,1],[2,1],[2,1]]

输出： [2,1,2]

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-58-45.png)

---

- 示例 3：

输入： grid = [[1,2,3],[4,5,6],[7,8,9]]

输出： [1,3,5,7,9]

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-58-52.png)

---

提示：

- `2 <= n == grid.length <= 50`
- `2 <= m == grid[i].length <= 50`
- `1 <= grid[i][j] <= 2500`

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
