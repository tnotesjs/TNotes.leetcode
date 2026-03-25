# [0889. 根据前序和后序遍历构造二叉树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0889.%20%E6%A0%B9%E6%8D%AE%E5%89%8D%E5%BA%8F%E5%92%8C%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

给定两个整数数组，`preorder` 和 `postorder`，其中 `preorder` 是一个具有 无重复 值的二叉树的前序遍历，`postorder` 是同一棵树的后序遍历，重构并返回二叉树。

如果存在多个答案，您可以返回其中 任何 一个。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-12-06-45.png)

```txt
输入：preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
输出：[1,2,3,4,5,6,7]
```

示例 2：

```txt
输入: preorder = [1], postorder = [1]
输出: [1]
```

---

提示：

- `1 <= preorder.length <= 30`
- `1 <= preorder[i] <= preorder.length`
- `preorder` 中所有值都 不同
- `postorder.length == preorder.length`
- `1 <= postorder[i] <= postorder.length`
- `postorder` 中所有值都 不同
- 保证 `preorder` 和 `postorder` 是同一棵二叉树的前序遍历和后序遍历

## 2. 🎯 s.1 - 递归

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 n 是节点数，每次递归需查找 leftVal
- 空间复杂度：$O(n)$，递归栈深度

算法思路：

- 前序第一个为根，第二个为左子树根
- 在后序中找左子树根的位置，确定左子树大小，递归构建左右子树
