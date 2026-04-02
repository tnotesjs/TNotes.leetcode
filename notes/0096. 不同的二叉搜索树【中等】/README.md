# [0096. 不同的二叉搜索树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0096.%20%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 动态规划（卡特兰数）](#2--s1---动态规划卡特兰数)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/unique-binary-search-trees/)

给你一个整数 `n`，求恰由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-51-42.png)

```txt
输入：n = 3
输出：5
```

示例 2：

```txt
输入：n = 1
输出：1
```

---

提示：

- `1 <= n <= 19`

## 2. 🎯 s.1 - 动态规划（卡特兰数）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，双层循环填表
- 空间复杂度：$O(n)$，`dp` 数组的大小

算法思路：

- `dp[i]` 表示 `i` 个节点能组成的不同 BST 的数量，即卡特兰数 $C_n$
- 枚举每个节点 `j` 作为根，左子树有 `j-1` 个节点，右子树有 `i-j` 个节点
- 转移方程：$dp[i] = \sum_{j=1}^{i} dp[j-1] \times dp[i-j]$
- 初始化：$dp[0] = dp[1] = 1$，空树和单节点树各有 1 种
