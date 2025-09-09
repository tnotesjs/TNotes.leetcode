# [0872. 叶子相似的树【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0872.%20%E5%8F%B6%E5%AD%90%E7%9B%B8%E4%BC%BC%E7%9A%84%E6%A0%91%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/leaf-similar-trees/)

请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 **叶值序列** 。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-14-57.png)

举个例子，如上图所示，给定一棵叶值序列为 `(6, 7, 4, 9, 8)` 的树。

如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 _叶相似_ 的。

如果给定的两个根结点分别为 `root1` 和 `root2` 的树是叶相似的，则返回 `true`；否则返回 `false` 。

---

- **示例 1：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-15-10.png)

```txt
输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
输出：true
```

- **示例 2：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-15-24.png)

```txt
输入：root1 = [1,2,3], root2 = [1,3,2]
输出：false
```

---

**提示：**

- 给定的两棵树结点数在 `[1, 200]` 范围内
- 给定的两棵树上的值在 `[0, 200]` 范围内

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
