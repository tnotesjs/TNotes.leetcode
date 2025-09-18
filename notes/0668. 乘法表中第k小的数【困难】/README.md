# [0668. 乘法表中第 k 小的数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0668.%20%E4%B9%98%E6%B3%95%E8%A1%A8%E4%B8%AD%E7%AC%ACk%E5%B0%8F%E7%9A%84%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table/)

几乎每一个人都用 [乘法表](https://baike.baidu.com/item/%E4%B9%98%E6%B3%95%E8%A1%A8)。但是你能在乘法表中快速找到第 `k` 小的数字吗？

乘法表是大小为 `m x n` 的一个整数矩阵，其中 `mat[i][j] == i * j`（下标从 **1** 开始）。

给你三个整数 `m`、`n` 和 `k`，请你在大小为 `m x n` 的乘法表中，找出并返回第 `k` 小的数字。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-25-11.png)

```txt
输入：m = 3, n = 3, k = 5
输出：3
解释：第 5 小的数字是 3 。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-25-16.png)

```txt
输入：m = 2, n = 3, k = 6
输出：6
解释：第 6 小的数字是 6 。
```

---

**提示：**

- `1 <= m, n <= 3 * 10^4`
- `1 <= k <= m * n`

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
