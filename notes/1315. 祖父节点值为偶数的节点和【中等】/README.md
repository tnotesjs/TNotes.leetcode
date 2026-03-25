# [1315. 祖父节点值为偶数的节点和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1315.%20%E7%A5%96%E7%88%B6%E8%8A%82%E7%82%B9%E5%80%BC%E4%B8%BA%E5%81%B6%E6%95%B0%E7%9A%84%E8%8A%82%E7%82%B9%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-nodes-with-even-valued-grandparent/)

给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：

- 该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）

如果不存在祖父节点值为偶数的节点，那么返回 `0`。

示例：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-19-06-28-11.png)

```txt
输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
输出：18
解释：图中红色节点的祖父节点的值为偶数，蓝色节点为这些红色节点的祖父节点。
```

---

提示：

- 树中节点的数目在 `1` 到 `10^4` 之间。
- 每个节点的值在 `1` 到 `100` 之间。

## 2. 🎯 s.1 - DFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数
- 空间复杂度：$O(h)$，其中 $h$ 是二叉树的高度，递归栈的空间

算法思路：

- DFS 遍历时携带父节点和祖父节点的值
- 当祖父节点值为偶数时，将当前节点值累加到结果中
- 初始时父节点和祖父节点用奇数初始化，避免误算
