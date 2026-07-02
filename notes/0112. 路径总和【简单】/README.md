# [0112. 路径总和【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0112.%20%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归 DFS](#2--s1---递归-dfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/path-sum/)

给你二叉树的根节点 `root` 和一个表示目标和的整数 `targetSum`。判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和 `targetSum`。如果存在，返回 `true`；否则，返回 `false`。

叶子节点是指没有子节点的节点。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-25-01.png)

```txt
输入：root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum = 22
输出：true
```

解释：等于目标和的根节点到叶节点路径如上图所示。

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-25-10.png)

```txt
输入：root = [1, 2, 3], targetSum = 5
输出：false
```

解释：

- 树中存在两条根节点到叶子节点的路径：
  - (1 --> 2): 和为 3
  - (1 --> 3): 和为 4
- 不存在 sum = 5 的根节点到叶子节点的路径。

---

示例 3：

```txt
输入：root = [], targetSum = 0
输出：false
```

解释：由于树是空的，所以不存在根节点到叶子节点的路径。

---

提示：

- 树中节点的数目在范围 `[0, 5000]` 内
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

## 2. 🎯 s.1 - 递归 DFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是二叉树的节点数，最多访问每个节点一次
- 空间复杂度：$O(h)$，其中 $h$ 是树的高度，递归调用栈最坏为 $O(n)$

算法思路：

- 题目要求判断是否存在从根节点到叶子节点的路径，使得路径上节点值之和等于 `targetSum`
- 每往下走一层，就把剩余目标值减去当前节点的值
- 若当前节点是叶子节点且剩余目标值恰好等于当前节点值，说明找到答案
- 否则递归检查左子树或右子树中是否存在满足条件的路径
