# [0526. 优美的排列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0526.%20%E4%BC%98%E7%BE%8E%E7%9A%84%E6%8E%92%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/beautiful-arrangement/)

假设有从 1 到 n 的 n 个整数。用这些整数构造一个数组 `perm`（下标从 1 开始），只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：

- `perm[i]` 能够被 `i` 整除
- `i` 能够被 `perm[i]` 整除

给你一个整数 `n` ，返回可以构造的 优美排列 的 数量。

---

示例 1：

```txt
输入：n = 2
输出：2
解释：
第 1 个优美的排列是 [1,2]：
    - perm[1] = 1 能被 i = 1 整除
    - perm[2] = 2 能被 i = 2 整除
第 2 个优美的排列是 [2,1]:
    - perm[1] = 2 能被 i = 1 整除
    - i = 2 能被 perm[2] = 1 整除
```

示例 2：

```txt
输入：n = 1
输出：1
```

---

提示：

- `1 <= n <= 15`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
