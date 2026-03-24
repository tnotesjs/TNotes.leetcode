# [0103. 二叉树的锯齿形层序遍历【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0103.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%94%AF%E9%BD%BF%E5%BD%A2%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS + 方向交替](#2--s1---bfs--方向交替)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/)

给你二叉树的根节点 `root`，返回其节点值的 锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-29-16.png)

```txt
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[20,9],[15,7]]
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
- `-100 <= Node.val <= 100`

## 2. 🎯 s.1 - BFS + 方向交替

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数，每个节点入队出队各一次
- 空间复杂度：$O(n)$，队列最多存储一层节点

算法思路：

- 标准 BFS 层序遍历，额外维护一个布尔值 `leftToRight` 标记当前层的填充方向
- 每层预分配定长数组 `level`，根据方向决定节点值的插入位置：正序时放 `i`，逆序时放 `size - 1 - i`
- 每层结束后翻转方向标记
