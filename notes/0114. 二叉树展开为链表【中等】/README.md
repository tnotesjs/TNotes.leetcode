# [0114. 二叉树展开为链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0114.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E5%B1%95%E5%BC%80%E4%B8%BA%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 迭代（寻找前驱节点）](#2--s1---迭代寻找前驱节点)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)

给你二叉树的根结点 `root`，请你将它展开为一个单链表：

- 展开后的单链表应该同样使用 `TreeNode`，其中 `right` 子指针指向链表中下一个结点，而左子指针始终为 `null`。
- 展开后的单链表应该与二叉树 [先序遍历][1] 顺序相同。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-36-20.png)

```txt
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
```

示例 2：

```txt
输入：root = []
输出：[]
```

示例 3：

```txt
输入：root = [0]
输出：[0]
```

---

提示：

- 树中结点数在范围 `[0, 2000]` 内
- `-100 <= Node.val <= 100`

进阶：你可以使用原地算法（`O(1)` 额外空间）展开这棵树吗？

## 2. 🎯 s.1 - 迭代（寻找前驱节点）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是节点数，每个节点最多被访问两次
- 空间复杂度：$O(1)$，只使用常数级指针变量

算法思路：

- 从根节点开始遍历，对于当前节点 `cur`，若存在左子树：
  1. 找到左子树的最右节点 `pre`（即先序遍历中左子树的最后一个节点）
  2. 将 `cur.right` 挂到 `pre.right`
  3. 将 `cur.left` 移到 `cur.right`，并将 `cur.left` 置空
- 然后沿 `cur = cur.right` 继续处理下一个节点

## 3. 🔗 引用

- [先序遍历 - 百度百科][1]

[1]: https://baike.baidu.com/item/%E5%85%88%E5%BA%8F%E9%81%8D%E5%8E%86/6442839?fr=aladdin
