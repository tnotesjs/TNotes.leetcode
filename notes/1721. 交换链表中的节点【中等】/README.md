# [1721. 交换链表中的节点【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1721.%20%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双指针](#2--s1---双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/swapping-nodes-in-a-linked-list)

给你链表的头节点 `head` 和一个整数 `k`。

交换 链表正数第 `k` 个节点和倒数第 `k` 个节点的值后，返回链表的头节点（链表 从 1 开始索引）。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-11-54-21.png)

```txt
输入：head = [1,2,3,4,5], k = 2
输出：[1,4,3,2,5]
```

示例 2：

```txt
输入：head = [7,9,6,6,7,8,3,0,9,5], k = 5
输出：[7,9,6,6,8,7,3,0,9,5]
```

示例 3：

```txt
输入：head = [1], k = 1
输出：[1]
```

示例 4：

```txt
输入：head = [1,2], k = 1
输出：[2,1]
```

示例 5：

```txt
输入：head = [1,2,3], k = 2
输出：[1,2,3]
```

---

提示：

- 链表中节点的数目是 `n`
- `1 <= k <= n <= 10^5`
- `0 <= Node.val <= 100`

## 2. 🎯 s.1 - 双指针

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是链表的长度
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 先遍历链表得到总长度，然后计算实际交换位置
- 随后找到第一个换节点前驱和第二个交换节点前驱
- 直接交换两个节点的值
