# [0234. 回文链表【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0234.%20%E5%9B%9E%E6%96%87%E9%93%BE%E8%A1%A8%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/palindrome-linked-list/)

给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-43-28.png)

```txt
输入：head = [1,2,2,1]
输出：true
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-43-34.png)

```txt
输入：head = [1,2]
输出：false
```

---

**提示：**

- 链表中节点数目在范围`[1, 10^5]` 内
- `0 <= Node.val <= 9`

**进阶：** 你能否用 `O(n)` 时间复杂度和 `O(1)` 空间复杂度解决此题？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
