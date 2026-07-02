# [0105. 从前序与中序遍历序列构造二叉树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0105.%20%E4%BB%8E%E5%89%8D%E5%BA%8F%E4%B8%8E%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 切片递归法](#2--s1---切片递归法)
- [3. 🎯 s.2 - 哈希表 + 区间递归法](#3--s2---哈希表--区间递归法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal)

给定两个整数数组 `preorder` 和 `inorder`，其中 `preorder` 是二叉树的先序遍历， `inorder` 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

---

示例 1：

![img](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```
输入: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
输出: [3, 9, 20, null, null, 15, 7]
```

---

示例 2：

```
输入: preorder = [-1], inorder = [-1]
输出: [-1]
```

---

提示：

- `1 <= preorder.length <= 3000`
- `inorder.length == preorder.length`
- `-3000 <= preorder[i], inorder[i] <= 3000`
- `preorder` 和 `inorder` 均无重复元素
- `inorder` 均出现在 `preorder`
- `preorder` 保证为二叉树的前序遍历序列
- `inorder` 保证为二叉树的中序遍历序列

## 2. 🎯 s.1 - 切片递归法

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，`indexOf` 每次查找为 $O(n)$，递归共 $n$ 层
- 空间复杂度：$O(n^2)$，每次递归切片创建新数组

算法思路：

- 前序遍历的第一个元素即为根节点，用它在中序遍历中找到根的位置 `idx`
- `inorder[0..idx-1]` 是左子树的中序，`inorder[idx+1..]` 是右子树的中序
- 根据左子树的节点数 `idx`，对前序遍历做对应切片：`preorder[1..1+idx]` 为左子树前序，`preorder[1+idx..]` 为右子树前序
- 递归构建左右子树

## 3. 🎯 s.2 - 哈希表 + 区间递归法

::: code-group

<<< ./solutions/2/1.c [c]

<<< ./solutions/2/1.js [js]

<<< ./solutions/2/1.py [py]

:::

- 时间复杂度：$O(n)$，哈希表将中序查找降为 $O(1)$，每个节点恰好处理一次
- 空间复杂度：$O(n)$，哈希表占 $O(n)$，递归栈最坏为 $O(n)$

算法思路：

- 预处理中序遍历，建立“值” -> “下标”的哈希表，实现 $O(1)$ 定位根节点
- 用前序索引 `preorderIndex` 按前序顺序依次取根节点，递归传入中序的左右边界区间而非切片数组
- 左子树的中序区间为 `[inLeft, rootIndex - 1]`，右子树为 `[rootIndex + 1, inRight]`
