# [0144. 二叉树的前序遍历【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0144.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 递归](#2-s1---递归)
- [3. s.2 - 迭代](#3-s2---迭代)
- [4. 引用](#4-引用)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-preorder-traversal)

给你二叉树的根节点 `root`，返回它节点值的前序遍历。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-58-03.png)

```txt
输入：root = [1, null, 2, 3]
输出：[1, 2, 3]
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

示例 4：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-58-12.png)

```txt
输入：root = [1,2]
输出：[1,2]
```

---

示例 5：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-16-58-20.png)

```txt
输入：root = [1,null,2]
输出：[1,2]
```

---

提示：

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

进阶：递归算法很简单，你可以通过迭代算法完成吗？

## 2. s.1 - 递归

::: code-group

<<< ./solutions/1/1.js {}

:::

- 时间复杂度：$O(n)$，其中 n 是二叉树的节点数，需要遍历所有节点
- 空间复杂度：$O(n)$，递归调用栈的深度最多为 n（最坏情况下树退化为链表）

算法思路：

- 前序遍历顺序：根节点 -> 左子树 -> 右子树
- 递归处理：先访问根节点，再遍历左子树，最后遍历右子树
- 将访问的节点值依次存入结果数组

## 3. s.2 - 迭代

::: code-group

<<< ./solutions/2/1.js

:::

- 时间复杂度：$O(n)$，其中 n 是二叉树的节点数，需要遍历所有节点
- 空间复杂度：$O(n)$，栈的最大深度为 n

算法思路：

- 使用栈存储节点，每次弹出节点时立即访问
- 先压入右子节点，再压入左子节点（保证左子树先被弹出）
- 这样可以保证根-左-右的遍历顺序

## 4. 引用

- [TNotes.algorithms - 0005. 二叉树的遍历][1]

[1]: https://tnotesjs.github.io/TNotes.algorithms/notes/0005.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86/README
