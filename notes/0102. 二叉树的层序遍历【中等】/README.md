# [0102. 二叉树的层序遍历【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0102.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS（队列）](#2--s1---bfs队列)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

给你二叉树的根节点 `root`，返回其节点值的 层序遍历。 （即逐层地，从左到右访问所有节点）。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-29-16.png)

```txt
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
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

## 2. 🎯 s.1 - BFS（队列）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数，每个节点恰好入队、出队各一次
- 空间复杂度：$O(n)$，队列最多同时存储一层的节点，最坏情况为完全二叉树的最后一层约 $\frac{n}{2}$ 个节点

算法思路：

- 用队列实现 BFS，初始将根节点入队
- 每轮循环先记录当前队列长度 `size`（即当前层的节点数），依次出队 `size` 个节点，将它们的值收集到 `level` 数组中，同时将非空子节点入队
- 每轮结束后将 `level` 加入结果，直到队列为空
