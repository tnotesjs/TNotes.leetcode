# [0101. 对称二叉树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0101.%20%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归 DFS](#2--s1---递归-dfs)
- [3. 🎯 s.2 - 迭代 BFS / 队列](#3--s2---迭代-bfs--队列)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/symmetric-tree)

给你一个二叉树的根节点 `root`， 检查它是否轴对称。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-24-18.png)

```txt
输入：root = [1, 2, 2, 3, 4, 4, 3]
输出：true
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-24-23.png)

```txt
输入：root = [1, 2, 2, null, 3, null, 3]
输出：false
```

---

提示：

- 树中节点数目在范围 `[1, 1000]` 内
- `-100 <= Node.val <= 100`

进阶：你可以运用递归和迭代两种方法解决这个问题吗？

## 2. 🎯 s.1 - 递归 DFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是树的节点数，需要遍历所有节点
- 空间复杂度：$O(h)$，其中 $h$ 是树的高度，递归栈的深度，最坏情况下为 $O(n)$

算法思路：

- 对称的本质是：左子树和右子树互为镜像
- 定义辅助函数 `isMirror(left, right)`，递归判断两棵子树是否镜像：
  - 两个节点都为空 → 镜像
  - 只有一个为空或值不同 → 不镜像
  - 递归比较 `left.left` 与 `right.right`，以及 `left.right` 与 `right.left`

## 3. 🎯 s.2 - 迭代 BFS / 队列

::: code-group

<<< ./solutions/2/1.c [c]

<<< ./solutions/2/1.js [js]

<<< ./solutions/2/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是树的节点数
- 空间复杂度：$O(n)$，队列中最多存储一层的节点数

算法思路：

- 用队列模拟 BFS，每次从队列中取出一对节点进行比较
- 初始时将根节点的左右子节点配对入队
- 每次取出一对节点：若都为空则跳过，若只有一个为空或值不同则返回 `false`
- 将镜像对应的子节点对（`left.left` 与 `right.right`、`left.right` 与 `right.left`）入队
