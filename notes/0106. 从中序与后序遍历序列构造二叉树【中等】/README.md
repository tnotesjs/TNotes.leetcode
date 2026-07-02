# [0106. 从中序与后序遍历序列构造二叉树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0106.%20%E4%BB%8E%E4%B8%AD%E5%BA%8F%E4%B8%8E%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 切片递归法](#2--s1---切片递归法)
- [3. 🎯 s.2 - 哈希表 + 区间递归法](#3--s2---哈希表--区间递归法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal)

给定两个整数数组 `inorder` 和 `postorder`，其中 `inorder` 是二叉树的中序遍历， `postorder` 是同一棵树的后序遍历，请你构造并返回这颗二叉树。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-55-37.png)

```
输入：inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]
输出：[3, 9, 20, null, null, 15, 7]
```

---

示例 2：

```
输入：inorder = [-1], postorder = [-1]
输出：[-1]
```

---

提示：

- `1 <= inorder.length <= 3000`
- `postorder.length == inorder.length`
- `-3000 <= inorder[i], postorder[i] <= 3000`
- `inorder` 和 `postorder` 都由 不同 的值组成
- `postorder` 中每一个值都在 `inorder` 中
- `inorder` 保证是树的中序遍历
- `postorder` 保证是树的后序遍历

## 2. 🎯 s.1 - 切片递归法

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，`indexOf` 每次查找为 $O(n)$，递归共 $n$ 层
- 空间复杂度：$O(n^2)$，每次递归切片创建新数组

算法思路：

- 后序遍历的最后一个元素是根节点，用它在中序遍历中找到根的位置 `idx`
- `inorder[0..idx-1]` 是左子树的中序，`inorder[idx+1..]` 是右子树的中序
- 根据左子树的节点数 `idx`，对后序遍历做对应切片：`postorder[0..idx]` 为左子树后序，`postorder[idx..n-2]` 为右子树后序（去掉末尾根节点）
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

- 与前序+中序的区别：后序遍历的最后一个元素是根节点，且先构建右子树再构建左子树
- 预处理中序遍历，建立“值” => “下标”的哈希表，用 `postorderIndex` 从后向前遍历后序数组
- 递归时先构建右子树（因为 `postorderIndex` 递减，右子树的根先出现），再构建左子树
