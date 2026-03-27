# [3249. 统计好节点的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3249.%20%E7%BB%9F%E8%AE%A1%E5%A5%BD%E8%8A%82%E7%82%B9%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-the-number-of-good-nodes/)

现有一棵 无向 树，树中包含 `n` 个节点，按从 `0` 到 `n - 1` 标记。树的根节点是节点 `0`。给你一个长度为 `n - 1` 的二维整数数组 `edges`，其中 `edges[i] = [ai, bi]` 表示树中节点 `ai` 与节点 `bi` 之间存在一条边。

如果一个节点的所有子节点为根的 子树 包含的节点数相同，则认为该节点是一个 好节点。

> - 子树
> - treeName 树中的一个节点及其所有子孙节点所构成的树称为 treeName 的 子树。

返回给定树中 好节点 的数量。

子树 指的是一个节点以及它所有后代节点构成的一棵树。

---

示例 1：

输入：edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]]

输出：7

说明：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-37-44.png)

树的所有节点都是好节点。

---

示例 2：

输入：edges = [[0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,7],[3,8]]

输出：6

说明：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-37-50.png)

树中有 6 个好节点。上图中已将这些节点着色。

---

示例 3：

输入：edges = [[0,1],[1,2],[1,3],[1,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[9,12],[10,11]]

输出：12

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-37-57.png)

除了节点 9 以外其他所有节点都是好节点。

---

提示：

- `2 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- 输入确保 `edges` 总表示一棵有效的树。

## 2. 🎯 s.1 - DFS

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，遍历整棵树
- 空间复杂度：$O(n)$，递归栈和子树大小数组

算法思路：

- DFS 计算每个节点的子树大小
- 如果一个节点所有子树大小相同（或没有子节点），则为好节点

