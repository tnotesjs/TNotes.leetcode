# [0148. 排序链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0148.%20%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sort-list/)

给你链表的头结点  `head` ，请将其按 **升序** 排列并返回 **排序后的链表** 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-16-26.png)

```txt
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-16-30.png)

```txt
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
```

- **示例 3：**

```txt
输入：head = []
输出：[]
```

---

**提示：**

- 链表中节点的数目在范围  `[0, 5 * 10^4]`  内
- `-10^5 <= Node.val <= 10^5`

**进阶：** 你可以在  `O(n log n)` 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
