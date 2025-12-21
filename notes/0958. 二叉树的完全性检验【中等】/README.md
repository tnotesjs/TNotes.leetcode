# [0958. 二叉树的完全性检验【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0958.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%AE%8C%E5%85%A8%E6%80%A7%E6%A3%80%E9%AA%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-completeness-of-a-binary-tree/)

给你一棵二叉树的根节点 `root` ，请你判断这棵树是否是一棵 完全二叉树 。

在一棵 [完全二叉树][1] 中，除了最后一层外，所有层都被完全填满，并且最后一层中的所有节点都尽可能靠左。最后一层（第 `h` 层）中可以包含 `1` 到 `2^h` 个节点。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-23-06.png)

```txt
输入：root = [1,2,3,4,5,6]
输出：true
解释：最后一层前的每一层都是满的（即，节点值为 {1} 和 {2,3} 的两层），且最后一层中的所有节点（{4,5,6}）尽可能靠左。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-23-13.png)

```txt
输入：root = [1,2,3,4,5,null,7]
输出：false
解释：值为 7 的节点不满足条件「节点尽可能靠左」。
```

---

提示：

- 树中节点数目在范围 `[1, 100]` 内
- `1 <= Node.val <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 5. 🔗 引用

- [完全二叉树][1]
  - 百度百科

[1]: https://baike.baidu.com/item/完全二叉树/7773232?fr=aladdin
