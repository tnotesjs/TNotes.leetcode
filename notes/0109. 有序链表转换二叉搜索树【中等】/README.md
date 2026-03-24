# [0109. 有序链表转换二叉搜索树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0109.%20%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8%E8%BD%AC%E6%8D%A2%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 快慢指针 + 递归](#2--s1---快慢指针--递归)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/)

给定一个单链表的头节点 `head`，其中的元素 按升序排序，将其转换为 平衡 二叉搜索树。

> 平衡二叉树 是指该树所有节点的左右子树的高度相差不超过 1。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-32-30.png)

```txt
输入: head = [-10,-3,0,5,9]
输出: [0,-3,9,-10,null,5]
解释: 一个可能的答案是[0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。
```

示例 2：

```txt
输入: head = []
输出: []
```

---

提示：

- `head` 中的节点数在`[0, 2 * 10^4]` 范围内
- `-10^5 <= Node.val <= 10^5`

## 2. 🎯 s.1 - 快慢指针 + 递归

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，每层递归用快慢指针找中点需 $O(n)$，共 $O(\log n)$ 层
- 空间复杂度：$O(\log n)$，递归栈深度为平衡树高度

算法思路：

- 用快慢指针找链表中点作为当前子树的根节点，保证树高度平衡
- 断开中点前的链接，将链表分为左半段和右半段
- 递归地将左半段构建为左子树、右半段（中点之后）构建为右子树
