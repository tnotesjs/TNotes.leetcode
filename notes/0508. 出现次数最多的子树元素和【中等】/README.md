# [0508. 出现次数最多的子树元素和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0508.%20%E5%87%BA%E7%8E%B0%E6%AC%A1%E6%95%B0%E6%9C%80%E5%A4%9A%E7%9A%84%E5%AD%90%E6%A0%91%E5%85%83%E7%B4%A0%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/most-frequent-subtree-sum/)

给你一个二叉树的根结点 `root` ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

一个结点的 **「子树元素和」** 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-30-52.png)

```txt
输入: root = [5,2,-3]
输出: [2,-3,4]
```

**示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-30-57.png)

```txt
输入: root = [5,2,-5]
输出: [2]
```

---

**提示:**

- 节点数在 `[1, 10^4]` 范围内
- `-10^5 <= Node.val <= 10^5`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
