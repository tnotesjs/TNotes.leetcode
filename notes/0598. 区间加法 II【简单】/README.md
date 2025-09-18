# [0598. 区间加法 II【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0598.%20%E5%8C%BA%E9%97%B4%E5%8A%A0%E6%B3%95%20II%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/range-addition-ii/)

给你一个 `m x n` 的矩阵 `M` 和一个操作数组 `op` 。矩阵初始化时所有的单元格都为 `0` 。`ops[i] = [ai, bi]` 意味着当所有的 `0 <= x < ai` 和 `0 <= y < bi` 时， `M[x][y]` 应该加 1。

在 _执行完所有操作后_ ，计算并返回 _矩阵中最大整数的个数_ 。

---

- **示例 1:**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-17-48-45.png)

```txt
输入: m = 3, n = 3，ops = [[2,2],[3,3]]
输出: 4
解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
```

- **示例 2:**

```txt
输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
输出: 4
```

- **示例 3:**

```txt
输入: m = 3, n = 3, ops = []
输出: 9
```

---

**提示:**

- `1 <= m, n <= 4 * 10^4`
- `0 <= ops.length <= 10^4`
- `ops[i].length == 2`
- `1 <= ai <= m`
- `1 <= bi <= n`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
