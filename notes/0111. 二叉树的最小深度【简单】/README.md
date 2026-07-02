# [0111. 二叉树的最小深度【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0111.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-23-47.png)

```txt
输入：root = [3, 9, 20, null, null, 15, 7]
输出：2
```

示例 2：

```txt
输入：root = [2, null, 3, null, 4, null, 5, null, 6]
输出：5
```

---

提示：

- 树中节点数的范围在 `[0, 10^5]` 内
- `-1000 <= Node.val <= 1000`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，其中 N 是树的节点数，最坏情况下需要访问所有节点
- 空间复杂度：$O(H)$，其中 H 是树的高度，递归调用栈的深度
