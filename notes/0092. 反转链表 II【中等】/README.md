# [0092. 反转链表 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0092.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - xxx](#2--s1---xxx)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-linked-list-ii/)

给你单链表的头指针 `head` 和两个整数 `left` 和 `right`，其中 `left <= right`。请你反转从位置 `left` 到位置 `right` 的链表节点，返回 反转后的链表。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-49-44.png)

```txt
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
```

示例 2：

```txt
输入：head = [5], left = 1, right = 1
输出：[5]
```

---

提示：

- 链表中节点数目为 `n`
- `1 <= n <= 500`
- `-500 <= Node.val <= 500`
- `1 <= left <= right <= n`

进阶：你可以使用一趟扫描完成反转吗？

## 2. 🎯 s.1 - 头插法

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是链表长度，一趟扫描完成
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 创建哨兵节点 `dummy`，定位 `prev` 为 `left` 前一个节点
- 使用头插法：将 `cur.next` 不断抽出插入到 `prev.next`，重复 `right - left` 次
- `cur` 始终指向反转区间的原第一个节点，每轮将 `cur` 后的节点提前
