# [0094. 二叉树的中序遍历【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0094.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 递归](#2-s1---递归)
- [3. s.2 - 迭代](#3-s2---迭代)
- [4. s.3 - Morris 遍历](#4-s3---morris-遍历)
- [5. Morris 遍历是什么？](#5-morris-遍历是什么)
- [6. 引用](#6-引用)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-inorder-traversal)

给定一个二叉树的根节点 `root`，返回它的中序遍历。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-52-06.png)

```txt
输入：root = [1, null, 2, 3]
输出：[1, 3, 2]
```

---

示例 2：

```txt
输入：root = []
输出：[]
```

---

示例 3：

```txt
输入：root = [1]
输出：[1]
```

---

提示：

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

进阶：递归算法很简单，你可以通过迭代算法完成吗？

## 2. s.1 - 递归

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是二叉树的节点数，需要遍历所有节点
- 空间复杂度：$O(n)$，递归调用栈的深度最多为 n（最坏情况下树退化为链表）

算法思路：

- 中序遍历顺序：左子树 -> 根节点 -> 右子树
- 递归处理：先遍历左子树，再访问根节点，最后遍历右子树
- 将访问的节点值依次存入结果数组

## 3. s.2 - 迭代

::: code-group

<<< ./solutions/2/1.c [c]

<<< ./solutions/2/1.js [js]

<<< ./solutions/2/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是二叉树的节点数，需要遍历所有节点
- 空间复杂度：$O(n)$，栈的最大深度为 n

算法思路：

- 使用栈模拟递归过程，不断将左子节点压入栈
- 当无法继续左移时，弹出栈顶节点并访问
- 然后转向该节点的右子树继续处理

## 4. s.3 - Morris 遍历

::: code-group

<<< ./solutions/3/1.c [c]

<<< ./solutions/3/1.js [js]

<<< ./solutions/3/1.py [py]

:::

- 时间复杂度：$O(n)$，每个节点最多被访问两次（建立线索时一次，通过线索回到节点时一次）
- 空间复杂度：$O(1)$，只使用了常数个额外变量，不使用栈或递归

算法思路：

- Morris 遍历的核心思想：利用叶子节点的空右指针，临时建立「线索」指向中序遍历序列中的后继节点，从而在遍历左子树后能回到当前节点，实现 O(1) 空间的中序遍历
- 对于当前节点 `cur`：
  - 若没有左子树，直接访问 `cur`，然后转向右子树
  - 若有左子树，找到其中序前驱节点 `pred`（左子树的最右节点）：
    - 第一次来到 `cur`（`pred.right == null`）：建立线索 `pred.right = cur`，然后向左走
    - 第二次回到 `cur`（`pred.right == cur`）：断开线索恢复原树结构，访问 `cur`，然后向右走

## 5. Morris 遍历是什么？

有关 Morris 遍历的相关内容，可以参考笔记：[TNotes.algorithms - 0007. Morris 遍历][2]

## 6. 引用

- [TNotes.algorithms - 0005. 二叉树的遍历][1]
- [TNotes.algorithms - 0007. Morris 遍历][2]

[1]: https://tnotesjs.github.io/TNotes.algorithms/notes/0005.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86/README
[2]: https://tnotesjs.github.io/TNotes.algorithms/notes/0007.%20Morris%20%E9%81%8D%E5%8E%86/README
