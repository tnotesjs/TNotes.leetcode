# [0117. 填充每个节点的下一个右侧节点指针 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0117.%20%E5%A1%AB%E5%85%85%E6%AF%8F%E4%B8%AA%E8%8A%82%E7%82%B9%E7%9A%84%E4%B8%8B%E4%B8%80%E4%B8%AA%E5%8F%B3%E4%BE%A7%E8%8A%82%E7%82%B9%E6%8C%87%E9%92%88%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 虚拟头节点逐层串联](#2--s1---虚拟头节点逐层串联)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/)

给定一个二叉树：

struct Node { int val; Node *left; Node *right; Node \*next; }

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 `NULL`。

初始状态下，所有 next 指针都被设置为 `NULL`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-43-39.png)

```txt
输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]

解释：
给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。
序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。
```

示例 2：

```txt
输入：root = []
输出：[]
```

---

提示：

- 树中的节点数在范围 `[0, 6000]` 内
- `-100 <= Node.val <= 100`

进阶：

- 你只能使用常量级额外空间。
- 使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。

## 2. 🎯 s.1 - 虚拟头节点逐层串联

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是节点数，每个节点恰好访问一次
- 空间复杂度：$O(1)$，只使用常数级指针变量

算法思路：

- 与 0116 不同，本题的二叉树不是完美二叉树，不能直接假设左右子都存在
- 用虚拟头节点 `dummy` 在当前层遍历时，将下一层的所有子节点通过 `next` 串联起来
- `tail` 指针跟踪下一层链表的末尾，依次链接 `cur.left` 和 `cur.right`
- 遍历完当前层后，`cur = dummy.next` 进入下一层，重复直到没有下一层
