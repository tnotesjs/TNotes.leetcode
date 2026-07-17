# [0124. 二叉树中的最大路径和【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0124.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%A7%E8%B7%AF%E5%BE%84%E5%92%8C%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)

二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 `root`，返回其 最大路径和。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-49-11.png)

```txt
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3，路径和为 2 + 1 + 3 = 6
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-49-20.png)

```txt
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7，路径和为 15 + 20 + 7 = 42
```

---

提示：

- 树中节点数目范围是 `[1, 3 * 10^4]`
- `-1000 <= Node.val <= 1000`

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
