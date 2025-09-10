# [0143. 重排链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0143.%20%E9%87%8D%E6%8E%92%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reorder-list/)

给定一个单链表 `L` 的头节点 `head` ，单链表 `L` 表示为：

L0 → L1 → … → Ln - 1 → Ln

请将其重新排列后变为：

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-07-56.png)

```txt
输入：head = [1,2,3,4]
输出：[1,4,2,3]
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-08-09.png)

```txt
输入：head = [1,2,3,4,5]
输出：[1,5,2,4,3]
```

---

**提示：**

- 链表的长度范围为 `[1, 5 * 10^4]`
- `1 <= node.val <= 1000`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
