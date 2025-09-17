# [0979. 在二叉树中分配硬币【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0979.%20%E5%9C%A8%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E5%88%86%E9%85%8D%E7%A1%AC%E5%B8%81%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/distribute-coins-in-binary-tree/)

给你一个有 `n` 个结点的二叉树的根结点 `root` ，其中树中每个结点 `node` 都对应有 `node.val` 枚硬币。整棵树上一共有 `n` 枚硬币。

在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。移动可以是从父结点到子结点，或者从子结点移动到父结点。

返回使每个结点上 **只有** 一枚硬币所需的 **最少** 移动次数。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-08-15-13.png)

```txt
输入：root = [3,0,0]
输出：2
解释：一枚硬币从根结点移动到左子结点，一枚硬币从根结点移动到右子结点。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-08-15-19.png)

```txt
输入：root = [0,3,0]
输出：3
解释：将两枚硬币从根结点的左子结点移动到根结点（两次移动）。然后，将一枚硬币从根结点移动到右子结点。
```

---

**提示：**

- 树中节点的数目为 `n`
- `1 <= n <= 100`
- `0 <= Node.val <= n`
- 所有 `Node.val` 的值之和是 `n`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
