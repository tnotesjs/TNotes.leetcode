# [0104. 二叉树的最大深度【简单】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/0104.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 Solutions.1 - 递归](#2--solutions1---递归)
- [3. 🎯 Solutions.2 - 迭代](#3--solutions2---迭代)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/maximum-depth-of-binary-tree)

给定一个二叉树 `root` ，返回其最大深度。

二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-26-04.png)

```txt
输入：root = [3,9,20,null,null,15,7]
输出：3
```

- **示例 2：**

```txt
输入：root = [1,null,2]
输出：2
```

---

**提示：**

- 树中节点的数量在  `[0, 10^4]`  区间内。
- `-100 <= Node.val <= 100`

:::

## 2. 🎯 Solutions.1 - 递归

::: code-group

<<< ./solutions/1/1.js [js]

:::

## 3. 🎯 Solutions.2 - 迭代

::: code-group

<<< ./solutions/2/1.js [js]

:::
