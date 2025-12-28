# [1110. 删点成林【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1110.%20%E5%88%A0%E7%82%B9%E6%88%90%E6%9E%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/delete-nodes-and-return-forest/)

给出二叉树的根节点 `root`，树上每个节点都有一个不同的值。

如果节点值在 `to_delete` 中出现，我们就把该节点从树上删去，最后得到一个森林（一些不相交的树构成的集合）。

返回森林中的每棵树。你可以按任意顺序组织答案。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-17-35-46.png)

```txt
输入：root = [1,2,3,4,5,6,7], to_delete = [3,5]
输出：[[1,2,null,4],[6],[7]]
```

- 示例 2：

```txt
输入：root = [1,2,4,null,3], to_delete = [3]
输出：[[1,2,4]]
```

---

提示：

- 树中的节点数最大为 `1000`。
- 每个节点都有一个介于 `1` 到 `1000` 之间的值，且各不相同。
- `to_delete.length <= 1000`
- `to_delete` 包含一些从 `1` 到 `1000`、各不相同的值。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
