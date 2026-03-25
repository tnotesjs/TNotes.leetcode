# [1019. 链表中的下一个更大节点【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1019.%20%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%A4%A7%E8%8A%82%E7%82%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/next-greater-node-in-linked-list/)

给定一个长度为 `n` 的链表 `head`

对于列表中的每个节点，查找下一个 更大节点 的值。也就是说，对于每个节点，找到它旁边的第一个节点的值，这个节点的值 严格大于 它的值。

返回一个整数数组 `answer`，其中 `answer[i]` 是第 `i` 个节点( 从 1 开始 )的下一个更大的节点的值。如果第 `i` 个节点没有下一个更大的节点，设置 `answer[i] = 0`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-17-49.png)

```txt
输入：head = [2,1,5]
输出：[5,5,0]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-17-55.png)

```txt
输入：head = [2,7,4,3,5]
输出：[7,0,5,5,0]
```

---

提示：

- 链表中节点数为 `n`
- `1 <= n <= 10^4`
- `1 <= Node.val <= 10^9`

## 2. 🎯 s.1 - 单调栈

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是链表的长度
- 空间复杂度：$O(n)$，栈和结果数组的空间

算法思路：

- 先将链表转为数组，然后用单调栈求每个元素的下一个更大值
- 维护一个单调递减栈，栈中存储索引
- 当当前元素大于栈顶元素时，弹出栈顶并记录答案
