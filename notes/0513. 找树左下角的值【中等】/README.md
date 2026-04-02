# [0513. 找树左下角的值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0513.%20%E6%89%BE%E6%A0%91%E5%B7%A6%E4%B8%8B%E8%A7%92%E7%9A%84%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS](#2--s1---bfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-bottom-left-tree-value/)

给定一个二叉树的 根节点 `root`，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-32-34.png)

```txt
输入: root = [2,1,3]
输出: 1
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-32-39.png)

```txt
输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
```

---

提示：

- 二叉树的节点个数的范围是 `[1,10^4]`
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

- 层序遍历，每层记录第一个节点的值
- 遍历结束后即为最底层最左边的值
