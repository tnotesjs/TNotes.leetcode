# [0959. 由斜杠划分区域【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0959.%20%E7%94%B1%E6%96%9C%E6%9D%A0%E5%88%92%E5%88%86%E5%8C%BA%E5%9F%9F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/regions-cut-by-slashes/)

在由 `1 x 1` 方格组成的 `n x n` 网格 `grid` 中，每个 `1 x 1` 方块由 `'/'`、`'\'` 或空格构成。这些字符会将方块划分为一些共边的区域。

给定网格 `grid` 表示为一个字符串数组，返回 _区域的数量_。

请注意，反斜杠字符是转义的，因此 `'\'` 用 `'\\'` 表示。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-24-23.png)

```txt
输入：grid = [" /","/ "]
输出：2
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-24-31.png)

```txt
输入：grid = [" /","  "]
输出：1
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-24-39.png)

```txt
输入：grid = ["/\\","\\/"]
输出：5
解释：回想一下，因为 \ 字符是转义的，所以 "/\\" 表示 /\，而 "\\/" 表示 \/。
```

---

提示：

- `n == grid.length == grid[i].length`
- `1 <= n <= 30`
- `grid[i][j]` 是 `'/'`、`'\'`、或 `' '`

## 2. 🎯 s.1 - 并查集

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2 \times \alpha(n^2))$，其中 n 是网格边长
- 空间复杂度：$O(n^2)$，并查集数组

算法思路：

- 将每个 $1 \times 1$ 格子拆分为 4 个三角形区域：上(0)、右(1)、下(2)、左(3)
- 根据字符决定格内连接：`/` 连接上左和右下，`\\` 连接上右和下左，空格连接全部
- 相邻格子连接：当前格的上部与上方格的下部相连，当前格的左部与左方格的右部相连
- 最终统计连通分量数即为区域数
