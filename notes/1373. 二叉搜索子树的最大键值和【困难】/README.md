# [1373. 二叉搜索子树的最大键值和【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1373.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E5%AD%90%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E9%94%AE%E5%80%BC%E5%92%8C%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-sum-bst-in-binary-tree/)

给你一棵以 `root` 为根的 二叉树，请你返回 任意 二叉搜索子树的最大键值和。

二叉搜索树的定义如下：

- 任意节点的左子树中的键值都 小于 此节点的键值。
- 任意节点的右子树中的键值都 大于 此节点的键值。
- 任意节点的左子树和右子树都是二叉搜索树。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-54-20.png)

```txt
输入：root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
输出：20
解释：键值为 3 的子树是和最大的二叉搜索树。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-54-26.png)

```txt
输入：root = [4,3,null,1,2]
输出：2
解释：键值为 2 的单节点子树是和最大的二叉搜索树。
```

示例 3：

```txt
输入：root = [-4,-2,-5]
输出：0
解释：所有节点键值都为负数，和最大的二叉搜索树为空。
```

示例 4：

```txt
输入：root = [2,1,3]
输出：6
```

示例 5：

```txt
输入：root = [5,4,8,3,null,6,3]
输出：7
```

---

提示：

- 每棵树有 `1` 到 `40000` 个节点。
- 每个节点的键值在 `[-4 * 10^4 , 4 * 10^4]` 之间。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
