# [0700. 二叉搜索树中的搜索【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0700.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E6%90%9C%E7%B4%A2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归搜索](#2--s1---递归搜索)
- [3. 🎯 s.2 - 迭代搜索](#3--s2---迭代搜索)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/search-in-a-binary-search-tree/)

给定二叉搜索树（BST）的根节点 `root` 和一个整数值 `val`。

你需要在 BST 中找到节点值等于 `val` 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 `null` 。

---

- **示例 1:**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-35-56.png)

```txt
输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]
```

- **示例 2:**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-36-01.png)

```txt
输入：root = [4,2,7,1,3], val = 5
输出：[]
```

---

**提示：**

- 树中节点数在 `[1, 5000]` 范围内
- `1 <= Node.val <= 10^7`
- `root` 是二叉搜索树
- `1 <= val <= 10^7`

## 2. 🎯 s.1 - 递归搜索

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(h)$，其中 h 是二叉搜索树的高度，最坏情况下需要从根节点搜索到叶子节点
- 空间复杂度：$O(h)$，递归调用栈的深度等于树的高度

## 3. 🎯 s.2 - 迭代搜索

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(h)$，其中 h 是二叉搜索树的高度
- 空间复杂度：$O(1)$，只使用了常数个额外变量
