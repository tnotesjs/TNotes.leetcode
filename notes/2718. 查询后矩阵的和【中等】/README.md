# [2718. 查询后矩阵的和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2718.%20%E6%9F%A5%E8%AF%A2%E5%90%8E%E7%9F%A9%E9%98%B5%E7%9A%84%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-matrix-after-queries/)

给你一个整数 `n` 和一个下标从 0 开始的 二维数组 `queries`，其中 `queries[i] = [typei, indexi, vali]`。

一开始，给你一个下标从 0 开始的 `n x n` 矩阵，所有元素均为 `0`。每一个查询，你需要执行以下操作之一：

- 如果 `typei == 0`，将第 `indexi` 行的元素全部修改为 `vali`，覆盖任何之前的值。
- 如果 `typei == 1`，将第 `indexi` 列的元素全部修改为 `vali`，覆盖任何之前的值。

请你执行完所有查询以后，返回矩阵中所有整数的和。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-23-26-37.png)

```txt
输入：n = 3, queries = [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]
输出：23
解释：上图展示了每个查询以后矩阵的值。所有操作执行完以后，矩阵元素之和为 23。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-23-26-42.png)

```txt
输入：n = 3, queries = [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,1]]
输出：17
解释：上图展示了每一个查询操作之后的矩阵。所有操作执行完以后，矩阵元素之和为 17。
```

---

提示：

- `1 <= n <= 10^4`
- `1 <= queries.length <= 5 * 10^4`
- `queries[i].length == 3`
- `0 <= typei <= 1`
- `0 <= indexi < n`
- `0 <= vali <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
