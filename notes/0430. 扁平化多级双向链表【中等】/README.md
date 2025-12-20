# [0430. 扁平化多级双向链表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0430.%20%E6%89%81%E5%B9%B3%E5%8C%96%E5%A4%9A%E7%BA%A7%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/flatten-a-multilevel-doubly-linked-list/)

你会得到一个双链表，其中包含的节点有一个下一个指针、一个前一个指针和一个额外的 子指针 。这个子指针可能指向一个单独的双向链表，也包含这些特殊的节点。这些子列表可以有一个或多个自己的子列表，以此类推，以生成如下面的示例所示的 多层数据结构 。

给定链表的头节点 head ，将链表 扁平化 ，以便所有节点都出现在单层双链表中。让 `curr` 是一个带有子列表的节点。子列表中的节点应该出现在扁平化列表中的 `curr` 之后 和 `curr.next` 之前 。

返回 扁平列表的 `head` 。列表中的节点必须将其 所有 子指针设置为 `null` 。

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-14-18-15.png)

```txt
输入：head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
输出：[1,2,3,7,8,11,12,9,10,4,5,6]
解释：输入的多级列表如上图所示。
扁平化后的链表如下图：
```

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-14-18-27.png)

- 示例 2：

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-14-18-36.png)

```txt
输入：head = [1,2,null,3]
输出：[1,3,2]
解释：输入的多级列表如上图所示。
扁平化后的链表如下图：
```

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-14-18-42.png)

- 示例 3：

```txt
输入：head = []
输出：[]
说明：输入中可能存在空列表。
```

---

提示：

- 节点数目不超过 `1000`
- `1 <= Node.val <= 10^5`

如何表示测试用例中的多级链表？

以 示例 1 为例：

```txt
1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

序列化其中的每一级之后：

[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]

为了将每一级都序列化到一起，我们需要每一级中添加值为 null 的元素，以表示没有节点连接到上一级的上级节点。

[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]

合并所有序列化结果，并去除末尾的 null 。

[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
```

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
