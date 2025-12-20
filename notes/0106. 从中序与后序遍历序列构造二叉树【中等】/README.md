# [0106. 从中序与后序遍历序列构造二叉树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0106.%20%E4%BB%8E%E4%B8%AD%E5%BA%8F%E4%B8%8E%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1](#2--s1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal)

给定两个整数数组 `inorder` 和 `postorder` ，其中 `inorder` 是二叉树的中序遍历， `postorder` 是同一棵树的后序遍历，请你构造并返回这颗 _二叉树_ 。

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-55-37.png)

- 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
- 输出：[3,9,20,null,null,15,7]

示例 2：

- 输入：inorder = [-1], postorder = [-1]
- 输出：[-1]

提示：

- `1 <= inorder.length <= 3000`
- `postorder.length == inorder.length`
- `-3000 <= inorder[i], postorder[i] <= 3000`
- `inorder` 和 `postorder` 都由 不同 的值组成
- `postorder` 中每一个值都在 `inorder` 中
- `inorder` 保证是树的中序遍历
- `postorder` 保证是树的后序遍历

## 2. 🎯 s.1

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null

  const rootVal = postorder[postorder.length - 1]
  const root = new TreeNode(rootVal)
  const idx = inorder.indexOf(rootVal)

  root.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx))
  root.right = buildTree(
    inorder.slice(idx + 1),
    postorder.slice(idx, postorder.length - 1)
  )

  return root
}
```
