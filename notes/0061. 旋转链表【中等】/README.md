# [0061. 旋转链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0061.%20%E6%97%8B%E8%BD%AC%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 闭合成环再断开](#2--s1---闭合成环再断开)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/rotate-list/)

给你一个链表的头节点 `head`，旋转链表，将链表每个节点向右移动 `k` 个位置。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-28-56.png)

```txt
输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-29-02.png)

```txt
输入：head = [0,1,2], k = 4
输出：[2,0,1]
```

---

提示：

- 链表中节点的数目在范围 `[0, 500]` 内
- `-100 <= Node.val <= 100`
- `0 <= k <= 2 * 10^9`

## 2. 🎯 s.1 - 闭合成环再断开

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是链表长度，最多遍历两次链表
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 遍历链表求长度 `len`，同时找到尾节点 `tail`
- 将 `k` 对 `len` 取模，若 `k == 0` 则无需旋转
- 将 `tail.next` 指向 `head` 形成环，从 `head` 向前走 `len - k - 1` 步找到新尾节点
- 新尾节点的下一个节点即为新头节点，断开环返回新头
