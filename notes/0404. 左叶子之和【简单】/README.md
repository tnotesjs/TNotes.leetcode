# [0404. 左叶子之和【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0404.%20%E5%B7%A6%E5%8F%B6%E5%AD%90%E4%B9%8B%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-left-leaves)

给定二叉树的根节点  `root` ，返回所有左叶子之和。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-13-32-27.png)

```txt
输入: root = [3,9,20,null,null,15,7]
输出: 24
解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
```

**示例  2:**

```txt
输入: root = [1]
输出: 0
```

---

**提示:**

- 节点数在  `[1, 1000]`  范围内
- `-1000 <= Node.val <= 1000`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
