# [0142. 环形链表 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0142.%20%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - Floyd 判圈算法](#2--s1---floyd-判圈算法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/linked-list-cycle-ii/)

给定一个链表的头节点 `head`，返回链表开始入环的第一个节点。如果链表无环，则返回 `null`。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 `pos` 是 `-1`，则在该链表中没有环。注意：`pos` 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改链表。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-10-06.png)

```txt
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-10-16.png)

```txt
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

---

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-10-28.png)

```txt
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

---

提示：

- 链表中节点的数目范围在范围 `[0, 10^4]` 内
- `-10^5 <= Node.val <= 10^5`
- `pos` 的值为 `-1` 或者链表中的一个有效索引

进阶：你是否可以使用 `O(1)` 空间解决此题？

## 2. 🎯 s.1 - Floyd 判圈算法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是链表的节点数，需要遍历链表找到相遇点和入环点
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

解题思路：

- 第一步：使用快慢指针判断是否有环，若有环则快慢指针会相遇
- 第二步：将快指针重置到头节点，然后快慢指针同时每次移动一步
- 当快慢指针再次相遇时，相遇点即为环的入口节点

## 3. 🔗 引用

- [TNotes.algorithms - 0019. Floyd 判圈算法][1]

[1]: https://tnotesjs.github.io/TNotes.algorithms/notes/0019.%20Floyd%20%E5%88%A4%E5%9C%88%E7%AE%97%E6%B3%95/README
