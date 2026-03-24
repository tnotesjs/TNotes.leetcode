# [0113. 路径总和 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0113.%20%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - DFS 回溯](#2--s1---dfs-回溯)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/path-sum-ii/)

给你二叉树的根节点 `root` 和一个整数目标和 `targetSum`，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-20-33-54.png)

```txt
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-13-25-10.png)

```txt
输入：root = [1,2,3], targetSum = 5
输出：[]
```

示例 3：

```txt
输入：root = [1,2], targetSum = 0
输出：[]
```

---

提示：

- 树中节点总数在范围 `[0, 5000]` 内
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

## 2. 🎯 s.1 - DFS 回溯

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 $n$ 是节点数，每个节点访问一次，找到路径时复制需 $O(n)$
- 空间复杂度：$O(n)$，递归栈和路径数组的深度均为 $O(n)$（不计输出结果）

算法思路：

- 对二叉树进行 DFS，维护当前路径 `path` 和剩余目标值 `remain`
- 到达叶子节点时，若 `remain == 0`，将当前路径的副本加入结果
- 回溯时弹出末尾元素，恢复路径状态
