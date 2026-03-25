# [0919. 完全二叉树插入器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0919.%20%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91%E6%8F%92%E5%85%A5%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/complete-binary-tree-inserter/)

完全二叉树 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。

设计一种算法，将一个新节点插入到一棵完全二叉树中，并在插入后保持其完整。

实现 `CBTInserter` 类:

- `CBTInserter(TreeNode root)` 使用头节点为 `root` 的给定树初始化该数据结构；
- `CBTInserter.insert(int v)` 向树中插入一个值为 `Node.val == val`的新节点 `TreeNode`。使树保持完全二叉树的状态，并返回插入节点 `TreeNode` 的父节点的值；
- `CBTInserter.get_root()` 将返回树的头节点。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-03-06.png)

```txt
输入
["CBTInserter", "insert", "insert", "get_root"]
[[[1, 2]], [3], [4], []]
输出
[null, 1, 2, [1, 2, 3, 4]]

解释
CBTInserter cBTInserter = new CBTInserter([1, 2]);
cBTInserter.insert(3);  // 返回 1
cBTInserter.insert(4);  // 返回 2
cBTInserter.get_root(); // 返回 [1, 2, 3, 4]
```

---

提示：

- 树中节点数量范围为 `[1, 1000]`
- `0 <= Node.val <= 5000`
- `root` 是完全二叉树
- `0 <= val <= 5000`
- 每个测试用例最多调用 `insert` 和 `get_root` 操作 `10^4` 次

## 2. 🎯 s.1 - BFS + 队列

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：初始化 $O(n)$，插入 $O(1)$，获取根节点 $O(1)$
- 空间复杂度：$O(n)$，存储未满子节点的队列

算法思路：

- 初始化时通过 BFS 遍历整棵树，将所有未满（左子节点或右子节点缺失）的节点加入队列
- 插入时取队列头部节点作为父节点：若左子节点为空则挂左边，否则挂右边并将该父节点出队
- 新节点始终入队，因为它是下一个可以挂子节点的候选
