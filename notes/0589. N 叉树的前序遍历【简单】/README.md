# [0589. N 叉树的前序遍历【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0589.%20N%20%E5%8F%89%E6%A0%91%E7%9A%84%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/n-ary-tree-preorder-traversal/)

给定一个 n 叉树的根节点 `root` ，返回 其节点值的 **前序遍历** 。

n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 `null` 分隔（请参见示例）。

---

- **示例 1：**

```txt
输入：root = [1,null,3,2,4,null,5,6]
输出：[1,3,5,6,2,4]
```

- **示例 2：**

```txt
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

---

**提示：**

- 节点总数在范围 `[0, 10^4]`内
- `0 <= Node.val <= 10^4`
- n 叉树的高度小于或等于 `1000`

**进阶：** 递归法很简单，你可以使用迭代法完成此题吗?

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
