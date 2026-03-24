# [0437. 路径总和 III【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0437.%20%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C%20III%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/path-sum-iii/)

给定一个二叉树的根节点 `root`，和一个整数 `targetSum`，求该二叉树里节点值之和等于 `targetSum` 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-14-22-16.png)

```txt
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
```

示例 2：

```txt
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
```

---

提示：

- 二叉树的节点个数的范围是 `[0,1000]`
- `-10^9 <= Node.val <= 10^9`
- `-1000 <= targetSum <= 1000`

## 2. 🎯 s.1 - 前缀和 + 哈希表

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是节点数
- 空间复杂度：$O(n)$

算法思路：

- DFS 过程中维护根到当前节点的前缀和
- 哈希表记录前缀和出现次数，查找 `prefix - targetSum` 是否存在
- 回溯时恢复哈希表
