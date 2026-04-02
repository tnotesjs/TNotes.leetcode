# [1669. 合并两个链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1669.%20%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 链表操作](#2--s1---链表操作)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/merge-in-between-linked-lists/)

给你两个链表 `list1` 和 `list2`，它们包含的元素分别为 `n` 个和 `m` 个。

请你将 `list1` 中下标从 `a` 到 `b` 的全部节点都删除，并将`list2` 接在被删除节点的位置。

下图中蓝色边和节点展示了操作后的结果：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-16-03-14.png)

请你返回结果链表的头指针。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-16-03-28.png)

```txt
输入：list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
输出：[10,1,13,1000000,1000001,1000002,5]
解释：我们删除 list1 中下标为 3 和 4 的两个节点，并将 list2 接在该位置。上图中蓝色的边和节点为答案链表。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-16-03-44.png)

```txt
输入：list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
输出：[0,1,1000000,1000001,1000002,1000003,1000004,6]
解释：上图中蓝色的边和节点为答案链表。
```

---

提示：

- `3 <= list1.length <= 10^4`
- `1 <= a <= b < list1.length - 1`
- `1 <= list2.length <= 10^4`

## 2. 🎯 s.1 - 链表操作

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是 list1 的长度
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 遍历 list1 找到第 a-1 个节点和第 b+1 个节点
- 将第 a-1 个节点的 next 指向 list2 的头节点
- 遍历 list2 到尾部，将尾节点的 next 指向 list1 的第 b+1 个节点
