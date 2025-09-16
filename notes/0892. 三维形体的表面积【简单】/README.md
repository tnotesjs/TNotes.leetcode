# [0892. 三维形体的表面积【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0892.%20%E4%B8%89%E7%BB%B4%E5%BD%A2%E4%BD%93%E7%9A%84%E8%A1%A8%E9%9D%A2%E7%A7%AF%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/surface-area-of-3d-shapes/)

给你一个 `n * n` 的网格  `grid` ，上面放置着一些  `1 x 1 x 1`  的正方体。每个值  `v = grid[i][j]`  表示  `v`  个正方体叠放在对应单元格  `(i, j)`  上。

放置好正方体后，任何直接相邻的正方体都会互相粘在一起，形成一些不规则的三维形体。

请你返回最终这些形体的总表面积。

---

**注意：** 每个形体的底面也需要计入表面积中。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-12-09-18.png)

```txt
输入：grid = [[1,2],[3,4]]
输出：34
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-12-09-26.png)

```txt
输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
输出：32
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-12-09-34.png)

```txt
输入：grid = [[2,2,2],[2,1,2],[2,2,2]]
输出：46
```

---

**提示：**

- `n == grid.length`
- `n == grid[i].length`
- `1 <= n <= 50`
- `0 <= grid[i][j] <= 50`

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
