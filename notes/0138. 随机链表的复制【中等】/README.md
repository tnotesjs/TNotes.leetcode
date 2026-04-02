# [0138. 随机链表的复制【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0138.%20%E9%9A%8F%E6%9C%BA%E9%93%BE%E8%A1%A8%E7%9A%84%E5%A4%8D%E5%88%B6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 节点拆分法](#2--s1---节点拆分法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/copy-list-with-random-pointer/)

给你一个长度为 `n` 的链表，每个节点包含一个额外增加的随机指针 `random`，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 [深拷贝][1]。 深拷贝应该正好由 `n` 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 `next` 指针和 `random` 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点。

例如，如果原链表中有 `X` 和 `Y` 两个节点，其中 `X.random --> Y`。那么在复制链表中对应的两个节点 `x` 和 `y`，同样有 `x.random --> y`。

返回复制链表的头节点。

用一个由 `n` 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 `[val, random_index]` 表示：

- `val`：一个表示 `Node.val` 的整数。
- `random_index`：随机指针指向的节点索引（范围从 `0` 到 `n-1`）；如果不指向任何节点，则为 `null`。

你的代码 只 接受原链表的头节点 `head` 作为传入参数。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-01-24.png)

```txt
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-01-29.png)

```txt
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-01-36.png)

```txt
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```

---

提示：

- `0 <= n <= 1000`
- `-10^4 <= Node.val <= 10^4`
- `Node.random` 为 `null` 或指向链表中的节点。

## 2. 🎯 s.1 - 节点拆分法

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是链表的长度
- 空间复杂度：$O(1)$，不计算输出链表的空间

算法思路：

- 第一步：在每个原节点后面插入一个克隆节点，形成交织链表
- 第二步：利用交织结构设置克隆节点的 `random` 指针（`cur.random.next` 即为克隆节点）
- 第三步：将交织链表拆分为原链表和克隆链表

## 3. 🔗 引用

- [深拷贝][1]
  - 百度百科

[1]: https://baike.baidu.com/item/深拷贝/22785317?fr=aladdin
