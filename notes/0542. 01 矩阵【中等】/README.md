# [0542. 01 矩阵【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0542.%2001%20%E7%9F%A9%E9%98%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 多源 BFS](#2--s1---多源-bfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/01-matrix/)

给定一个由 `0` 和 `1` 组成的矩阵 `mat`，请输出一个大小相同的矩阵，其中每一个格子是 `mat` 中对应位置元素到最近的 `0` 的距离。

两个相邻元素间的距离为 `1`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-46-26.png)

```txt
输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0,0],[0,1,0],[0,0,0]]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-46-30.png)

```txt
输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
输出：[[0,0,0],[0,1,0],[1,2,1]]
```

---

提示：

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 10^4`
- `1 <= m * n <= 10^4`
- `mat[i][j] is either 0 or 1.`
- `mat` 中至少有一个 `0`

## 2. 🎯 s.1 - 多源 BFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(mn)$，其中 m 和 n 是矩阵的行数和列数
- 空间复杂度：$O(mn)$

算法思路：

- 将所有 0 元素作为起点加入队列，距离初始化为 0
- BFS 逐层向外扩展，更新每个 1 元素到最近 0 的距离
