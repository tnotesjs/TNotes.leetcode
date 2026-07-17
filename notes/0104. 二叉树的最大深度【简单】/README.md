# [0104. 二叉树的最大深度【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0104.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 递归 DFS](#2-s1---递归-dfs)
- [3. s.2 - 迭代 BFS](#3-s2---迭代-bfs)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-depth-of-binary-tree)

给定一个二叉树 `root`，返回其最大深度。

二叉树的最大深度是指从根节点到最远叶子节点的最长路径上的节点数。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-26-04.png)

```txt
输入：root = [3, 9, 20, null, null, 15, 7]
输出：3
```

---

示例 2：

```txt
输入：root = [1, null, 2]
输出：2
```

---

提示：

- 树中节点的数量在 `[0, 10^4]` 区间内。
- `-100 <= Node.val <= 100`

## 2. s.1 - 递归 DFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是树的节点数，每个节点恰好访问一次
- 空间复杂度：$O(h)$，其中 $h$ 是树的高度，递归栈的深度，最坏情况下为 $O(n)$

算法思路：

- 一棵树的最大深度等于左右子树的最大深度加一
- 递归终止条件：空节点的深度为 0
- 递归计算左子树深度和右子树深度，取较大值加一即为当前树的最大深度

## 3. s.2 - 迭代 BFS

::: code-group

<<< ./solutions/2/1.c [c]

<<< ./solutions/2/1.js [js]

<<< ./solutions/2/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是树的节点数
- 空间复杂度：$O(n)$，队列中最多存储一层的节点数

算法思路：

- 使用队列进行层序遍历（BFS），每处理完一层就将深度加一
- 每次从队列中取出当前层的所有节点，并将它们的子节点加入队列
- 遍历结束后累计的层数即为最大深度
