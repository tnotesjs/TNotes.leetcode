# [0099. 恢复二叉搜索树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0099.%20%E6%81%A2%E5%A4%8D%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - Morris 中序遍历](#2--s1---morris-中序遍历)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/recover-binary-search-tree/)

给你二叉搜索树的根节点 `root`，该树中的 恰好 两个节点的值被错误地交换。_请在不改变其结构的情况下，恢复这棵树_。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-54-34.png)

```txt
输入：root = [1,3,null,null,2]
输出：[3,1,null,null,2]
解释：3 不能是 1 的左孩子，因为 3 > 1。交换 1 和 3 使二叉搜索树有效。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-54-40.png)

```txt
输入：root = [3,1,4,null,null,2]
输出：[2,1,4,null,null,3]
解释：2 不能在 3 的右子树中，因为 2 < 3。交换 2 和 3 使二叉搜索树有效。
```

---

提示：

- 树上节点的数目在范围 `[2, 1000]` 内
- `-2^31 <= Node.val <= 2^31 - 1`

进阶：使用 `O(n)` 空间复杂度的解法很容易实现。你能想出一个只使用 `O(1)` 空间的解决方案吗？

## 2. 🎯 s.1 - Morris 中序遍历

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是树的节点数
- 空间复杂度：$O(1)$，Morris 遍历不使用额外栈空间

算法思路：

- BST 的中序遍历是严格递增序列，两个被交换的节点会产生“逆序对”
- 使用 Morris 中序遍历实现 $O(1)$ 空间：找左子树的最右节点（前驱），建立临时线索指向当前节点
- 遍历过程中记录 `first`、`second` 两个逆序节点：
  - 第一次发现 `prev.val > cur.val` 时，`first = prev`
  - 每次发现逆序时，`second = cur`
- 最后交换 `first` 和 `second` 的值即可恢复 BST
