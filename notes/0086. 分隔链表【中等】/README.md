# [0086. 分隔链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0086.%20%E5%88%86%E9%9A%94%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双链表拼接](#2--s1---双链表拼接)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/partition-list/)

给你一个链表的头节点 `head` 和一个特定值 `x`，请你对链表进行分隔，使得所有 小于 `x` 的节点都出现在 大于或等于 `x` 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-46-37.png)

```txt
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
```

示例 2：

```txt
输入：head = [2,1], x = 2
输出：[1,2]
```

---

提示：

- 链表中节点的数目在范围 `[0, 200]` 内
- `-100 <= Node.val <= 100`
- `-200 <= x <= 200`

## 2. 🎯 s.1 - 双链表拼接

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是链表长度，只需遍历一次
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 创建两个哨兵链表 `small` 和 `large`，分别收集小于 `x` 和大于等于 `x` 的节点
- 遍历原链表，将节点分配到对应链表
- 遍历结束后，将大链表尾部置空，小链表尾部接上大链表头部
