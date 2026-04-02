# [0515. 在每个树行中找最大值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0515.%20%E5%9C%A8%E6%AF%8F%E4%B8%AA%E6%A0%91%E8%A1%8C%E4%B8%AD%E6%89%BE%E6%9C%80%E5%A4%A7%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS](#2--s1---bfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-largest-value-in-each-tree-row/)

给定一棵二叉树的根节点 `root`，请找出该二叉树中每一层的最大值。

示例 1：

![img](https://assets.leetcode.com/uploads/2020/08/21/largest_e1.jpg)

```txt
输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
```

示例 2：

```txt
输入: root = [1,2,3]
输出: [1,3]
```

---

提示：

- 二叉树的节点个数的范围是 `[0,10^4]`
- `-2^31 <= Node.val <= 2^31 - 1`

## 2. 🎯 s.1 - BFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

算法思路：

- 层序遍历，每层取最大值加入结果
