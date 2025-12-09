# [1008. 前序遍历构造二叉搜索树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1008.%20%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-binary-search-tree-from-preorder-traversal/)

给定一个整数数组，它表示 BST(即 **二叉搜索树** )的 **先序遍历** ，构造树并返回其根。

**保证** 对于给定的测试用例，总是有可能找到具有给定需求的二叉搜索树。

**二叉搜索树** 是一棵二叉树，其中每个节点， `Node.left` 的任何后代的值 **严格小于** `Node.val` , `Node.right` 的任何后代的值 **严格大于** `Node.val`。

二叉树的 **前序遍历** 首先显示节点的值，然后遍历`Node.left`，最后遍历`Node.right`。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-13-45.png)

```txt
输入：preorder = [8,5,1,7,10,12]
输出：[8,5,10,1,7,null,12]
```

- 示例 2:

```txt
输入: preorder = [1,3]
输出: [1,null,3]
```

---

**提示：**

- `1 <= preorder.length <= 100`
- `1 <= preorder[i] <= 10^8`
- `preorder` 中的值 **互不相同**

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
