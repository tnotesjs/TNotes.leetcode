# [1302. 层数最深叶子节点的和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1302.%20%E5%B1%82%E6%95%B0%E6%9C%80%E6%B7%B1%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9%E7%9A%84%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - DFS](#2--s1---dfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/deepest-leaves-sum/)

给你一棵二叉树的根节点 `root`，请你返回 层数最深的叶子节点的和。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-18-19-37-38.png)

```txt
输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
输出：15
```

示例 2：

```txt
输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
输出：19
```

---

提示：

- 树中节点数目在范围 `[1, 10^4]` 之间。
- `1 <= Node.val <= 100`

## 2. 🎯 s.1 - DFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数
- 空间复杂度：$O(h)$，其中 $h$ 是二叉树的高度，递归栈的空间

算法思路：

- 使用 DFS 遍历二叉树，维护当前最大深度 maxDepth 和对应深度的节点值之和 sum
- 当遇到更深的节点时，更新 maxDepth 并重置 sum 为该节点值
- 当遇到与 maxDepth 相同深度的节点时，将其值累加到 sum 中
