# [0559. N 叉树的最大深度【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0559.%20N%20%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - DFS 深度优先搜索](#2--s1---dfs-深度优先搜索)
- [3. 🎯 s.2 - BFS 广度优先搜索](#3--s2---bfs-广度优先搜索)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/)

给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-53-46.png)

```txt
输入：root = [1,null,3,2,4,null,5,6]
输出：3
```

- 示例 2：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-53-51.png)

```txt
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：5
```

---

提示：

- 树的深度不会超过 `1000` 。
- 树的节点数目位于 `[0, 10^4]` 之间。

## 2. 🎯 s.1 - DFS 深度优先搜索

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是 N 叉树的节点数，需要访问每个节点一次
- 空间复杂度：$O(h)$，其中 h 是 N 叉树的高度，递归调用栈的深度。最坏情况下为 $O(n)$（树退化为链表）

## 3. 🎯 s.2 - BFS 广度优先搜索

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(n)$，需要访问每个节点一次
- 空间复杂度：$O(w)$，其中 $w$ 是树的最大宽度，最坏情况下为 $O(n)$
