# [0107. 二叉树的层序遍历 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0107.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS + 结果翻转](#2--s1---bfs--结果翻转)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)

给你二叉树的根节点 `root`，返回其节点值 自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-29-16.png)

```txt
输入：root = [3,9,20,null,null,15,7]
输出：[[15,7],[9,20],[3]]
```

示例 2：

```txt
输入：root = [1]
输出：[[1]]
```

示例 3：

```txt
输入：root = []
输出：[]
```

---

提示：

- 树中节点数目在范围 `[0, 2000]` 内
- `-1000 <= Node.val <= 1000`

## 2. 🎯 s.1 - BFS + 结果翻转

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数
- 空间复杂度：$O(n)$，队列最多存储一层节点

算法思路：

- 与标准层序遍历（0102）完全一致，先自顶向下 BFS 收集每层结果
- 最后将结果数组整体翻转，即可得到自底向上的层序遍历
