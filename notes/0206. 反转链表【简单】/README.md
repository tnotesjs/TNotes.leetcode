# [0206. 反转链表【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0206.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 迭代](#2-s1---迭代)
- [3. s.2 - 递归](#3-s2---递归)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-linked-list)

给你单链表的头节点 `head`，请你反转链表，并返回反转后的链表。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-17-04-27.png)

- 输入：head = [1, 2, 3, 4, 5]
- 输出：[5, 4, 3, 2, 1]

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-17-04-34.png)

- 输入：head = [1, 2]
- 输出：[2, 1]

---

示例 3：

- 输入：head = []
- 输出：[]

---

提示：

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

## 2. s.1 - 迭代

::: code-group

<<< ./solutions/1/1.js

:::

- 时间复杂度：$O(n)$，其中 n 是链表长度，需要遍历整个链表
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 使用三个指针 prev、current、next 遍历链表，其中 next 是一个辅助指针，`next = current.next` 用于保存在处理本次反转操作时的当前节点的下一个节点
- 逐个反转节点指向：`current.next = prev` 将 current.next 指向 prev
- 移动指针继续处理下一个节点
  - `prev = current`
  - `current = next`
- `current !== null` 遍历到结尾时 `return prev` 返回 prev

## 3. s.2 - 递归

::: code-group

<<< ./solutions/2/1.js

:::

- 时间复杂度：$O(n)$，其中 n 是链表长度，需要递归访问每个节点
- 空间复杂度：$O(n)$，递归调用栈的深度为 n

算法思路：

- 递归到链表末尾，将最后一个节点作为新的头节点
- 回溯时逐个反转节点指向：将当前节点的下一个节点指向当前节点
- 将当前节点的 next 置为 null，避免形成环
