# [0109. 有序链表转换二叉搜索树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0109.%20%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8%E8%BD%AC%E6%8D%A2%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/)

给定一个单链表的头节点 `head`，其中的元素 **按升序排序** ，将其转换为 平衡 二叉搜索树。

> 平衡二叉树 是指该树所有节点的左右子树的高度相差不超过 1。

---

- **示例 1:**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-32-30.png)

```txt
输入: head = [-10,-3,0,5,9]
输出: [0,-3,9,-10,null,5]
解释: 一个可能的答案是[0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。
```

- **示例 2:**

```txt
输入: head = []
输出: []
```

---

**提示:**

- `head` 中的节点数在`[0, 2 * 10^4]` 范围内
- `-10^5 <= Node.val <= 10^5`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
