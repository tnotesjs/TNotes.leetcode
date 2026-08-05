# [0226. 翻转二叉树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0226.%20%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 递归解法（前序遍历思想）](#2-s1---递归解法前序遍历思想)
- [3. s.2 - 迭代解法（使用栈）](#3-s2---迭代解法使用栈)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/invert-binary-tree/)

给你一棵二叉树的根节点 `root`，翻转这棵二叉树，并返回其根节点。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-41-49.png)

```txt
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-42-04.png)

```txt
输入：root = [2,1,3]
输出：[2,3,1]
```

示例 3：

```txt
输入：root = []
输出：[]
```

---

提示：

- 树中节点数目范围在 `[0, 100]` 内
- `-100 <= Node.val <= 100`

## 2. s.1 - 递归解法（前序遍历思想）

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/2.js [js(更简洁)]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数，需要访问每个节点一次
- 空间复杂度：$O(h)$，其中 $h$ 是二叉树的高度，主要是递归调用栈的空间

## 3. s.2 - 迭代解法（使用栈）

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(n)$，需要访问每个节点一次
- 空间复杂度：$O(w)$，其中 $w$ 是二叉树的最大宽度，主要是栈的空间
