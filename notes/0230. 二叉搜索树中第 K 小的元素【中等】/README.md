# [0230. 二叉搜索树中第 K 小的元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0230.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%AC%20K%20%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 中序遍历](#2--s1---中序遍历)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)

给定一个二叉搜索树的根节点 `root`，和一个整数 `k`，请你设计一个算法查找其中第 `k` 小的元素（从 1 开始计数）。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-49-14.png)

```txt
输入：root = [3,1,4,null,2], k = 1
输出：1
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-49-24.png)

```txt
输入：root = [5,3,6,2,4,null,null,1], k = 3
输出：3
```

---

提示：

- 树中的节点数为 `n`。
- `1 <= k <= n <= 10^4`
- `0 <= Node.val <= 10^4`

进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 `k` 小的值，你将如何优化算法？

## 2. 🎯 s.1 - 中序遍历

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(H + k)$，其中 $H$ 是树的高度
- 空间复杂度：$O(H)$，栈的大小

算法思路：

- BST 的中序遍历产生升序序列
- 用迭代式中序遍历，访问到第 $k$ 个节点时立即返回
