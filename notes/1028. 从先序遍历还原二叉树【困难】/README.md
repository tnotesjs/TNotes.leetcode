# [1028. 从先序遍历还原二叉树【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1028.%20%E4%BB%8E%E5%85%88%E5%BA%8F%E9%81%8D%E5%8E%86%E8%BF%98%E5%8E%9F%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/recover-a-tree-from-preorder-traversal/)

我们从二叉树的根节点 `root` 开始进行深度优先搜索。

在遍历中的每个节点处，我们输出 `D` 条短划线（其中 `D` 是该节点的深度），然后输出该节点的值。（_如果节点的深度为 `D`，则其直接子节点的深度为 `D + 1`。根节点的深度为 `0`）。_

如果节点只有一个子节点，那么保证该子节点为左子节点。

给出遍历输出 `S`，还原树并返回其根节点 `root`。

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-22-22.png)

```txt
输入："1-2--3--4-5--6--7"
输出：[1,2,5,3,4,6,7]
```

- 示例 2：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-22-27.png)

```txt
输入："1-2--3---4-5--6---7"
输出：[1,2,5,3,null,6,null,4,null,7]
```

- 示例 3：

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-22-32.png)

```txt
输入："1-401--349---90--88"
输出：[1,401,null,349,88,90]
```

---

提示：

- 原始树中的节点数介于 `1` 和 `1000` 之间。
- 每个节点的值介于 `1` 和 `10 ^ 9` 之间。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
