# [2583. 二叉树中的第 K 大层和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2583.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%9A%84%E7%AC%AC%20K%20%E5%A4%A7%E5%B1%82%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree/)

给你一棵二叉树的根节点 `root` 和一个正整数 `k`。

树中的 层和 是指 同一层 上节点值的总和。

返回树中第 `k` 大的层和（不一定不同）。如果树少于 `k` 层，则返回 `-1`。

注意，如果两个节点与根节点的距离相同，则认为它们在同一层。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-21-03-37.png)

```txt
输入：root = [5,8,9,2,1,3,7,4,6], k = 2
输出：13
解释：树中每一层的层和分别是：
- Level 1: 5
- Level 2: 8 + 9 = 17
- Level 3: 2 + 1 + 3 + 7 = 13
- Level 4: 4 + 6 = 10
第 2 大的层和等于 13。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-21-03-41.png)

```txt
输入：root = [1,2,null,3], k = 1
输出：3
解释：最大的层和是 3。
```

---

提示：

- 树中的节点数为 `n`
- `2 <= n <= 10^5`
- `1 <= Node.val <= 10^6`
- `1 <= k <= n`

## 2. 🎯 s.1 - BFS + 排序

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \log N)$，BFS 遍历所有节点 + 排序层和数组
- 空间复杂度：$O(N)$，队列和层和数组的空间

算法思路：

- BFS 逐层遍历二叉树，计算每层的节点值之和
- 将所有层和收集到数组中，降序排序
- 若层数不足 k 层，返回 -1；否则返回第 k 大的层和
