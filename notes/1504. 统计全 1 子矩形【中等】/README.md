# [1504. 统计全 1 子矩形【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1504.%20%E7%BB%9F%E8%AE%A1%E5%85%A8%201%20%E5%AD%90%E7%9F%A9%E5%BD%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-submatrices-with-all-ones)

给你一个 `m x n` 的二进制矩阵 `mat`，请你返回有多少个 子矩形 的元素全部都是 1。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-00-07.png)

```txt
输入：mat = [[1,0,1],[1,1,0],[1,1,0]]
输出：13
解释：
有 6 个 1x1 的矩形。
有 2 个 1x2 的矩形。
有 3 个 2x1 的矩形。
有 1 个 2x2 的矩形。
有 1 个 3x1 的矩形。
矩形数目总共 = 6 + 2 + 3 + 1 + 1 = 13。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-13-59-33.png)

```txt
输入：mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]
输出：24
解释：
有 8 个 1x1 的子矩形。
有 5 个 1x2 的子矩形。
有 2 个 1x3 的子矩形。
有 4 个 2x1 的子矩形。
有 2 个 2x2 的子矩形。
有 2 个 3x1 的子矩形。
有 1 个 3x2 的子矩形。
矩形数目总共 = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24。
```

---

提示：

- `1 <= m, n <= 150`
- `mat[i][j]` 仅包含 `0` 或 `1`

## 2. 🎯 s.1 - 枚举 + 压缩

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m^2 \times n)$，其中 $m$ 和 $n$ 分别是矩阵的行数和列数
- 空间复杂度：$O(m \times n)$，需要额外的矩阵记录连续 1 的个数

算法思路：

- 预处理矩阵 `width[i][j]`，表示第 $i$ 行第 $j$ 列向左（含自身）连续 1 的个数
- 对于每个位置 $(i, j)$，向上枚举行 $k$，维护连续 1 宽度的最小值 `minW`
- 每一层的最小宽度就是以 $(i, j)$ 为右下角、以第 $k$ 行为顶的全 1 子矩形的数量
