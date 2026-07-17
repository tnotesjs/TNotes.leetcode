# [0100. 相同的树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0100.%20%E7%9B%B8%E5%90%8C%E7%9A%84%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 递归比较](#2-s1---递归比较)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/same-tree/)

给你两棵二叉树的根节点 `p` 和 `q`，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-21-45.png)

```txt
输入：p = [1, 2, 3], q = [1, 2, 3]
输出：true
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-21-51.png)

```txt
输入：p = [1, 2], q = [1, null, 2]
输出：false
```

---

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-21-56.png)

```txt
输入：p = [1, 2, 1], q = [1, 1, 2]
输出：false
```

---

提示：

- 两棵树上的节点数目都在范围 `[0, 100]` 内
- `-10^4 <= Node.val <= 10^4`

## 2. s.1 - 递归比较

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\min(m, n))$，其中 $m$ 和 $n$ 分别是两棵树的节点数，若某棵树提前不匹配即可短路返回
- 空间复杂度：$O(\min(H_1, H_2))$，递归栈深度为两棵树中较浅那棵的高度，平衡树下为 $O(\log n)$，最坏为 $O(n)$

算法思路：

- 若两个节点都为空，两棵树相同，返回 `true`
- 若只有一个节点为空，或者两节点的值不同，返回 `false`
- 递归比较左子树和右子树是否分别相同，两者都相同才返回 `true`
