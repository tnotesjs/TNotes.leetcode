# [3319. 第 K 大的完美二叉子树的大小【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3319.%20%E7%AC%AC%20K%20%E5%A4%A7%E7%9A%84%E5%AE%8C%E7%BE%8E%E4%BA%8C%E5%8F%89%E5%AD%90%E6%A0%91%E7%9A%84%E5%A4%A7%E5%B0%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/k-th-largest-perfect-subtree-size-in-binary-tree/)

给你一棵 二叉树 的根节点 `root` 和一个整数`k`。

返回第 `k` 大的 完美二叉子树 的大小，如果不存在则返回 `-1`。

完美二叉树 是指所有叶子节点都在同一层级的树，且每个父节点恰有两个子节点。

---

- 示例 1：

输入： root = [5,3,6,5,2,5,7,1,8,null,null,6,8], k = 2

输出： 3

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-10-41.png)

完美二叉子树的根节点在图中以黑色突出显示。它们的大小按非递增顺序排列为 `[3, 3, 1, 1, 1, 1, 1, 1]`。  
第 `2` 大的完美二叉子树的大小是 3。

---

- 示例 2：

输入： root = [1,2,3,4,5,6,7], k = 1

输出： 7

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-10-49.png)

完美二叉子树的大小按非递增顺序排列为 `[7, 3, 3, 1, 1, 1, 1]`。最大的完美二叉子树的大小是 7。

---

- 示例 3：

输入： root = [1,2,3,null,4], k = 3

输出： -1

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-10-54.png)

完美二叉子树的大小按非递增顺序排列为 `[1, 1]`。完美二叉子树的数量少于 3。

---

提示：

- 树中的节点数目在 `[1, 2000]` 范围内。
- `1 <= Node.val <= 2000`
- `1 <= k <= 1024`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
