# [0145. 二叉树的后序遍历【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0145.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归](#2--s1---递归)
- [3. 🎯 s.2 - 迭代](#3--s2---迭代)
- [4. 🔗 引用](#4--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-postorder-traversal)

给你一棵二叉树的根节点 `root`，返回其节点值的后序遍历。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-17-02-44.png)

```txt
输入：root = [1,null,2,3]
输出：[3,2,1]
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

- 树中节点的数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

进阶：递归算法很简单，你可以通过迭代算法完成吗？

## 2. 🎯 s.1 - 递归

::: code-group

<<< ./solutions/1/1.js

<<< ./solutions/1/2.js

:::

- 时间复杂度：$O(n)$，其中 n 是二叉树的节点数，需要遍历所有节点
- 空间复杂度：$O(n)$，递归调用栈的深度最多为 n（最坏情况下树退化为链表）

算法思路：

- 后序遍历顺序：左子树 -> 右子树 -> 根节点
- 递归处理：先遍历左子树，再遍历右子树，最后访问根节点
- 将访问的节点值依次存入结果数组

## 3. 🎯 s.2 - 迭代

::: code-group

<<< ./solutions/2/1.js

:::

- 时间复杂度：$O(n)$，其中 n 是二叉树的节点数，需要遍历所有节点
- 空间复杂度：$O(n)$，栈的最大深度为 n

算法思路：

- 后序遍历的逆序是：根 -> 右 -> 左，类似前序遍历的镜像
- 按照根-右-左的顺序遍历，将节点值插入到结果数组头部
- 最终得到左-右-根的后序遍历结果

## 4. 🔗 引用

- [TNotes.algorithms - 0005. 二叉树的遍历][1]

[1]: https://tnotesjs.github.io/TNotes.algorithms/notes/0005.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86/README
