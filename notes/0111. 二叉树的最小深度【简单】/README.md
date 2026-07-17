# [0111. 二叉树的最小深度【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0111.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 递归 DFS](#2-s1---递归-dfs)

<!-- endregion:toc -->

## 1. 题目描述

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

## 2. s.1 - 递归 DFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数，每个节点最多访问一次
- 空间复杂度：$O(h)$，其中 $h$ 是树的高度，递归调用栈最坏为 $O(n)$

算法思路：

- 最小深度是指从根节点到最近叶子节点的最短路径上的节点数量
- 空节点返回 0
- 若当前节点只有左子树，则必须继续往左子树搜索，不能直接把空的右子树当作叶子
- 若当前节点只有右子树，则必须继续往右子树搜索
- 若左右子树都存在，取两者最小深度加 1
