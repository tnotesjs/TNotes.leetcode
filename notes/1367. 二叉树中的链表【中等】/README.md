# [1367. 二叉树中的链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1367.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%9A%84%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - DFS](#2--s1---dfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/linked-list-in-binary-tree/)

给你一棵以 `root` 为根的二叉树和一个 `head` 为第一个节点的链表。

如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 `head` 为首的链表中每个节点的值，那么请你返回 `True`，否则返回 `False`。

一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-51-44.png)

```txt
输入：head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：true
解释：树中蓝色的节点构成了与链表对应的子路径。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-51-51.png)

```txt
输入：head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：true
```

示例 3：

```txt
输入：head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：false
解释：二叉树中不存在一一对应链表的路径。
```

---

提示：

- 二叉树和链表中的每个节点的值都满足 `1 <= node.val <= 100`。
- 链表包含的节点数目在 `1` 到 `100` 之间。
- 二叉树包含的节点数目在 `1` 到 `2500` 之间。

## 2. 🎯 s.1 - DFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times m)$，其中 $n$ 是二叉树节点数，$m$ 是链表长度
- 空间复杂度：$O(h + m)$，其中 $h$ 是二叉树的高度，递归栈的空间

算法思路：

- 遍历二叉树的每个节点作为起始点
- 对每个起始点，尝试匹配链表：链表匹配完返回 true，树节点为空或值不匹配返回 false
- 匹配时可向左子树或右子树继续匹配
