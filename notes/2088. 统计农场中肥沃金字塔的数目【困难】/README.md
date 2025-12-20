# [2088. 统计农场中肥沃金字塔的数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2088.%20%E7%BB%9F%E8%AE%A1%E5%86%9C%E5%9C%BA%E4%B8%AD%E8%82%A5%E6%B2%83%E9%87%91%E5%AD%97%E5%A1%94%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-fertile-pyramids-in-a-land/)

有一个 矩形网格 状的农场，划分为 `m` 行 `n` 列的单元格。每个格子要么是 肥沃的 （用 `1` 表示），要么是 贫瘠 的（用 `0` 表示）。网格图以外的所有与格子都视为贫瘠的。

农场中的 金字塔 区域定义如下：

1. 区域内格子数目 大于 `1` 且所有格子都是 肥沃的 。
2. 金字塔 顶端 是这个金字塔 最上方 的格子。金字塔的高度是它所覆盖的行数。令 `(r, c)` 为金字塔的顶端且高度为 `h` ，那么金字塔区域内包含的任一格子 `(i, j)` 需满足 `r <= i <= r + h - 1` 且 `c - (i - r) <= j <= c + (i - r)` 。

一个 倒金字塔 类似定义如下：

1. 区域内格子数目 大于 `1` 且所有格子都是 肥沃的 。
2. 倒金字塔的 顶端 是这个倒金字塔 最下方 的格子。倒金字塔的高度是它所覆盖的行数。令 `(r, c)` 为金字塔的顶端且高度为 `h` ，那么金字塔区域内包含的任一格子 `(i, j)` 需满足 `r - h + 1 <= i <= r` 且 `c - (r - i) <= j <= c + (r - i)` 。

下图展示了部分符合定义和不符合定义的金字塔区域。黑色区域表示肥沃的格子。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-16-00.png)

给你一个下标从 0 开始且大小为 `m x n` 的二进制矩阵 `grid` ，它表示农场，请你返回 `grid` 中金字塔和倒金字塔的 总数目 。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-16-29.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-16-34.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-16-40.png)

```txt
输入：grid = [[0,1,1,0],[1,1,1,1]]
输出：2

解释：
2 个可能的金字塔区域分别如上图蓝色和红色区域所示。
这个网格图中没有倒金字塔区域。
所以金字塔区域总数为 2 + 0 = 2 。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-16-54.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-17-00.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-17-05.png)

```txt
输入：grid = [[1,1,1],[1,1,1]]
输出：2
解释：
金字塔区域如上图蓝色区域所示，倒金字塔如上图红色区域所示。
所以金字塔区域总数目为 1 + 1 = 2 。
```

- 示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-17-13.png)

```txt
输入：grid = [[1,0,1],[0,0,0],[1,0,1]]
输出：0
解释：
网格图中没有任何金字塔或倒金字塔区域。
```

- 示例 4：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-17-24.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-17-29.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-17-33.png)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-17-40.png)

```txt
输入：grid = [[1,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,0,0,1]]
输出：13
解释：
有 7 个金字塔区域。上图第二和第三张图中展示了它们中的 3 个。
有 6 个倒金字塔区域。上图中最后一张图展示了它们中的 2 个。
所以金字塔区域总数目为 7 + 6 = 13.
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 10^5`
- `grid[i][j]` 要么是 `0` ，要么是 `1` 。

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
