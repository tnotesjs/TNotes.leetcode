# [2033. 获取单值网格的最小操作数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2033.%20%E8%8E%B7%E5%8F%96%E5%8D%95%E5%80%BC%E7%BD%91%E6%A0%BC%E7%9A%84%E6%9C%80%E5%B0%8F%E6%93%8D%E4%BD%9C%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 中位数](#2--s1---排序--中位数)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-operations-to-make-a-uni-value-grid/)

给你一个大小为 `m x n` 的二维整数网格 `grid` 和一个整数 `x`。每一次操作，你可以对 `grid` 中的任一元素 加 `x` 或 减 `x`。

单值网格 是全部元素都相等的网格。

返回使网格化为单值网格所需的 最小 操作数。如果不能，返回 `-1`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-11-01.png)

```txt
输入：grid = [[2,4],[6,8]], x = 2
输出：4
解释：可以执行下述操作使所有元素都等于 4 ：
- 2 加 x 一次。
- 6 减 x 一次。
- 8 减 x 两次。
共计 4 次操作。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-11-17.png)

```txt
输入：grid = [[1,5],[2,3]], x = 1
输出：5
解释：可以使所有元素都等于 3。
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-11-30.png)

```txt
输入：grid = [[1,2],[3,4]], x = 2
输出：-1
解释：无法使所有元素相等。
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `1 <= x, grid[i][j] <= 10^4`

## 2. 🎯 s.1 - 排序 + 中位数

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(mn \log(mn))$，其中 m 和 n 分别是网格的行数和列数
- 空间复杂度：$O(mn)$，展平后的数组

算法思路：

- 将网格展平为一维数组，先检查所有元素对 x 取模的余数是否相同，不同则无解
- 排序后取中位数作为目标值（中位数使绝对偏差之和最小）
- 累加每个元素到中位数的距离除以 x 即为最小操作数
