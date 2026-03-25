# [1382. 将二叉搜索树变平衡【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1382.%20%E5%B0%86%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E5%8F%98%E5%B9%B3%E8%A1%A1%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/balance-a-binary-search-tree/)

给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。如果有多种构造方法，请你返回任意一种。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 `1`，我们就称这棵二叉搜索树是 平衡的。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-58-45.png)

```txt
输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-58-51.png)

```txt
输入: root = [2,1,3]
输出: [2,1,3]
```

---

提示：

- 树节点的数目在 `[1, 10^4]` 范围内。
- `1 <= Node.val <= 10^5`

## 2. 🎯 s.1 - 中序遍历 + 递归构建

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是树的节点数
- 空间复杂度：$O(n)$，存储中序遍历数组和递归栈

算法思路：

- 中序遍历 BST 得到有序数组
- 对有序数组递归取中间元素作为根，左右两半分别构建左右子树
- 这样构建出的树高度差不超过 1，即为平衡 BST
