# [0141. 环形链表【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0141.%20%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/linked-list-cycle/)

给你一个链表的头节点 `head` ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：`pos` 不作为参数进行传递**。仅仅是为了标识链表的实际情况。

_如果链表中存在环_，则返回 `true` 。 否则，返回 `false` 。

---

- **示例 1：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-10-06.png)

```txt
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-10-16.png)

```txt
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

- **示例 3：**

![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-10-28.png)

```txt
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

---

**提示：**

- 链表中节点的数目范围是 `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- `pos` 为 `-1` 或者链表中的一个 **有效索引** 。

进阶： 你能用 `O(1)`（即，常量）内存解决此问题吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
