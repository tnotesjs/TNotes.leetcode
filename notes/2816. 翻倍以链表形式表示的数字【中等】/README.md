# [2816. 翻倍以链表形式表示的数字【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2816.%20%E7%BF%BB%E5%80%8D%E4%BB%A5%E9%93%BE%E8%A1%A8%E5%BD%A2%E5%BC%8F%E8%A1%A8%E7%A4%BA%E7%9A%84%E6%95%B0%E5%AD%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 前瞻进位](#2--s1---前瞻进位)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/double-a-number-represented-as-a-linked-list/)

给你一个 非空 链表的头节点 `head`，表示一个不含前导零的非负数整数。

将链表 翻倍 后，返回头节点 `head`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-12-12-50.png)

```txt
输入：head = [1,8,9]
输出：[3,7,8]
解释：上图中给出的链表，表示数字 189。返回的链表表示数字 189 * 2 = 378。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-12-12-55.png)

```txt
输入：head = [9,9,9]
输出：[1,9,9,8]
解释：上图中给出的链表，表示数字 999。返回的链表表示数字 999 * 2 = 1998。
```

---

提示：

- 链表中节点的数目在范围 `[1, 10^4]` 内
- `0 <= Node.val <= 9`
- 生成的输入满足：链表表示一个不含前导零的数字，除了数字 `0` 本身。

## 2. 🎯 s.1 - 前瞻进位

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，遍历一次链表
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 若头节点值 $\geq 5$，翻倍后会产生进位，需要在头部插入一个值为 0 的新节点
- 从头到尾遍历，每个节点的新值 = 当前值 × 2 + 来自下一节点的进位（下一节点值 $\geq 5$ 则进位 1）
- 最后取模 10 得到当前位的值
