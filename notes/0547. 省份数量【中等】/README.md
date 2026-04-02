# [0547. 省份数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0547.%20%E7%9C%81%E4%BB%BD%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 并查集](#2--s1---并查集)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-provinces/)

有 `n` 个城市，其中一些彼此相连，另一些没有相连。如果城市 `a` 与城市 `b` 直接相连，且城市 `b` 与城市 `c` 直接相连，那么城市 `a` 与城市 `c` 间接相连。

省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

给你一个 `n x n` 的矩阵 `isConnected`，其中 `isConnected[i][j] = 1` 表示第 `i` 个城市和第 `j` 个城市直接相连，而 `isConnected[i][j] = 0` 表示二者不直接相连。

返回矩阵中 省份 的数量。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-47-45.png)

```txt
输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
输出：2
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-47-49.png)

```txt
输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
输出：3
```

---

提示：

- `1 <= n <= 200`
- `n == isConnected.length`
- `n == isConnected[i].length`
- `isConnected[i][j]` 为 `1` 或 `0`
- `isConnected[i][i] == 1`
- `isConnected[i][j] == isConnected[j][i]`

## 2. 🎯 s.1 - 并查集

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2 \cdot \alpha(n))$，其中 n 是城市数量，$\alpha$ 是反阿克曼函数
- 空间复杂度：$O(n)$

算法思路：

- 初始化每个城市为独立的省份
- 遍历连接矩阵，将直接相连的城市合并到同一集合
- 最终并查集中的连通分量数即为省份数量
