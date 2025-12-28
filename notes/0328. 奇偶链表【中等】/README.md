# [0328. 奇偶链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0328.%20%E5%A5%87%E5%81%B6%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/odd-even-linked-list/)

给定单链表的头节点 `head` ，将所有索引为奇数的节点和索引为偶数的节点分别分组，保持它们原有的相对顺序，然后把偶数索引节点分组连接到奇数索引节点分组之后，返回重新排序的链表。

第一个 节点的索引被认为是 奇数 ， 第二个 节点的索引为 偶数 ，以此类推。

请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

你必须在 `O(1)` 的额外空间复杂度和 `O(n)` 的时间复杂度下解决这个问题。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-11-12-03-11.png)

```txt
输入: head = [1,2,3,4,5]
输出: [1,3,5,2,4]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-11-12-03-19.png)

```txt
输入: head = [2,1,3,5,6,4,7]
输出: [2,3,6,7,1,5,4]
```

---

提示：

- `n ==` 链表中的节点数
- `0 <= n <= 10^4`
- `-10^6 <= Node.val <= 10^6`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
