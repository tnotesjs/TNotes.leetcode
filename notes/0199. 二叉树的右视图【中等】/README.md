# [0199. 二叉树的右视图【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0199.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%8F%B3%E8%A7%86%E5%9B%BE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-right-side-view/)

给定一个二叉树的 根节点 `root`，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

---

示例 1：

```txt
输入：root = [1,2,3,null,5,null,4]
输出：[1,3,4]
```

- 解释：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-36-28.png)

示例 2：

```txt
输入：root = [1,2,3,4,null,null,null,5]
输出：[1,3,4,5]
```

- 解释：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-36-04.png)

示例 3：

```txt
输入：root = [1,null,3]
输出：[1,3]
```

示例 4：

```txt
输入：root = []
输出：[]
```

---

提示：

- 二叉树的节点个数的范围是 `[0,100]`
- `-100 <= Node.val <= 100`

## 2. 🎯 s.1 - BFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数
- 空间复杂度：$O(n)$，队列最多存储一层的节点

算法思路：

- BFS 层序遍历，每层取最后一个节点的值（即该层最右侧的节点）
