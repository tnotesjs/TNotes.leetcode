# [0116. 填充每个节点的下一个右侧节点指针【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0116.%20%E5%A1%AB%E5%85%85%E6%AF%8F%E4%B8%AA%E8%8A%82%E7%82%B9%E7%9A%84%E4%B8%8B%E4%B8%80%E4%B8%AA%E5%8F%B3%E4%BE%A7%E8%8A%82%E7%82%B9%E6%8C%87%E9%92%88%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)

给定一个  **完美二叉树** ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

```c
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 `NULL`。

初始状态下，所有  next 指针都被设置为 `NULL`。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-37-57.png)

```txt
输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]

解释：
给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。
序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
```

- **示例 2:**

```txt
输入：root = []
输出：[]
```

---

**提示：**

- 树中节点的数量在  `[0, 2^12 - 1]`  范围内
- `-1000 <= node.val <= 1000`

**进阶：**

- 你只能使用常量级额外空间。
- 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
