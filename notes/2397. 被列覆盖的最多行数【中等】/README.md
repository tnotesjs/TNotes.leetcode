# [2397. 被列覆盖的最多行数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2397.%20%E8%A2%AB%E5%88%97%E8%A6%86%E7%9B%96%E7%9A%84%E6%9C%80%E5%A4%9A%E8%A1%8C%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-rows-covered-by-columns/)

给你一个下标从 **0** 开始、大小为 `m x n` 的二进制矩阵 `matrix` ；另给你一个整数 `numSelect`，表示你必须从 `matrix` 中选择的 **不同** 列的数量。

如果一行中所有的 `1` 都被你选中的列所覆盖，则认为这一行被 **覆盖** 了。

**形式上**，假设 `s = {c1, c2, ...., cnumSelect}` 是你选择的列的集合。对于矩阵中的某一行 `row` ，如果满足下述条件，则认为这一行被集合 `s` **覆盖**：

- 对于满足 `matrix[row][col] == 1` 的每个单元格 `matrix[row][col]`（`0 <= col <= n - 1`），`col` 均存在于 `s` 中，或者
- `row` 中 **不存在** 值为 `1` 的单元格。

你需要从矩阵中选出 `numSelect` 个列，使集合覆盖的行数最大化。

返回一个整数，表示可以由 `numSelect` 列构成的集合 **覆盖** 的 **最大行数** 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-53-53.png)

```txt
输入：matrix = [[0,0,0],[1,0,1],[0,1,1],[0,0,1]], numSelect = 2
输出：3
解释：
图示中显示了一种覆盖 3 行的可行办法。
选择 s = {0, 2} 。
- 第 0 行被覆盖，因为其中没有出现 1 。
- 第 1 行被覆盖，因为值为 1 的两列（即 0 和 2）均存在于 s 中。
- 第 2 行未被覆盖，因为 matrix[2][1] == 1 但是 1 未存在于 s 中。
- 第 3 行被覆盖，因为 matrix[2][2] == 1 且 2 存在于 s 中。
因此，可以覆盖 3 行。
另外 s = {1, 2} 也可以覆盖 3 行，但可以证明无法覆盖更多行。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-54-02.png)

```txt
输入：matrix = [[1],[0]], numSelect = 1
输出：2
解释：
选择唯一的一列，两行都被覆盖了，因为整个矩阵都被覆盖了。
所以我们返回 2 。
```

---

**提示：**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 12`
- `matrix[i][j]` 要么是 `0` 要么是 `1`
- `1 <= numSelect <= n`

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
