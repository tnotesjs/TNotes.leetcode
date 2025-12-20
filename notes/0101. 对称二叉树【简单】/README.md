# [0101. 对称二叉树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0101.%20%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/symmetric-tree)

给你一个二叉树的根节点 `root` ， 检查它是否轴对称。

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-24-18.png)

```txt
输入：root = [1,2,2,3,4,4,3]
输出：true
```

- 示例 2：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-24-23.png)

```txt
输入：root = [1,2,2,null,3,null,3]
输出：false
```

---

提示：

- 树中节点数目在范围 `[1, 1000]` 内
- `-100 <= Node.val <= 100`

进阶： 你可以运用递归和迭代两种方法解决这个问题吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
