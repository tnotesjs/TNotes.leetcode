# [0764. 最大加号标志【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0764.%20%E6%9C%80%E5%A4%A7%E5%8A%A0%E5%8F%B7%E6%A0%87%E5%BF%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-plus-sign/)

在一个 `n x n` 的矩阵 `grid` 中，除了在数组 `mines` 中给出的元素为 `0`，其他每个元素都为 `1`。`mines[i] = [xi, yi]`表示 `grid[xi][yi] == 0`

返回 `grid` _中包含 `1` 的最大的 轴对齐 加号标志的阶数_。如果未找到加号标志，则返回 `0`。

一个 `k` 阶由 _`1`_ 组成的 “轴对称”加号标志 具有中心网格 `grid[r][c] == 1` ，以及 4 个从中心向上、向下、向左、向右延伸，长度为 `k-1`，由 `1` 组成的臂。注意，只有加号标志的所有网格要求为 `1` ，别的网格可能为 `0` 也可能为 `1`。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-30-58.png)

```txt
输入: n = 5, mines = [[4, 2]]
输出: 2
解释: 在上面的网格中，最大加号标志的阶只能是2。一个标志已在图中标出。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-31-06.png)

```txt
输入: n = 1, mines = [[0, 0]]
输出: 0
解释: 没有加号标志，返回 0。
```

---

提示：

- `1 <= n <= 500`
- `1 <= mines.length <= 5000`
- `0 <= xi, yi < n`
- 每一对 `(xi, yi)` 都 不重复 ​​​​​​​

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
