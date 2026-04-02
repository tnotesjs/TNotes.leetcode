# [0082. 删除排序链表中的重复元素 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0082.%20%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哨兵节点 + 双指针](#2--s1---哨兵节点--双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/)

给定一个已排序的链表的头 `head`，_删除原始链表中所有重复数字的节点，只留下不同的数字_。返回 _已排序的链表_。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-44-33.png)

```txt
输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-44-38.png)

```txt
输入：head = [1,1,1,2,3]
输出：[2,3]
```

---

提示：

- 链表中节点数目在范围 `[0, 300]` 内
- `-100 <= Node.val <= 100`
- 题目数据保证链表已经按升序 排列

## 2. 🎯 s.1 - 哨兵节点 + 双指针

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是链表长度，每个节点最多访问一次
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 创建哨兵节点 `dummy` 指向 `head`，用 `prev` 指向最后一个确认不重复的节点
- 从 `prev.next` 出发，用 `cur` 向后扫描跳过所有相同值的节点
- 若 `prev.next == cur` 说明无重复，`prev` 前进；否则 `prev.next = cur.next` 删除所有重复节点
