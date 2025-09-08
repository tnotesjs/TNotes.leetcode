# [0144. 二叉树的前序遍历【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0144.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归](#2--s1---递归)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-preorder-traversal)

给你二叉树的根节点 `root` ，返回它节点值的  **前序**  遍历。

**示例 1：**

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-58-03.png)

- 输入：root = [1,null,2,3]
- 输出：[1,2,3]

**示例 2：**

- 输入：root = []
- 输出：[]

**示例 3：**

- 输入：root = [1]
- 输出：[1]

**示例 4：**

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-58-12.png)

- 输入：root = [1,2]
- 输出：[1,2]

**示例 5：**

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-58-20.png)

- 输入：root = [1,null,2]
- 输出：[1,2]

**提示：**

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

**进阶：** 递归算法很简单，你可以通过迭代算法完成吗？

## 2. 🎯 s.1 - 递归

::: code-group

<<< ./solutions/1/1.js {}

:::

- **res = []**
- 由于最终要求返回一个 `number[]` 数组，为了收集每次递归时的 `root.value`，可以给 `preorderTraversal` 扩展一个参数 `res = []`，每次在调用的时候将 `res` 传入，用于继续收集 `root.value`，最后将 `res` 返回。
