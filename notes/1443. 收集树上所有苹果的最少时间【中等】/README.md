# [1443. 收集树上所有苹果的最少时间【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1443.%20%E6%94%B6%E9%9B%86%E6%A0%91%E4%B8%8A%E6%89%80%E6%9C%89%E8%8B%B9%E6%9E%9C%E7%9A%84%E6%9C%80%E5%B0%91%E6%97%B6%E9%97%B4%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-time-to-collect-all-apples-in-a-tree/)

给你一棵有 `n` 个节点的无向树，节点编号为 `0` 到 `n-1`，它们中有一些节点有苹果。通过树上的一条边，需要花费 1 秒钟。你从 节点 0 出发，请你返回最少需要多少秒，可以收集到所有苹果，并回到节点 0。

无向树的边由 `edges` 给出，其中 `edges[i] = [fromi, toi]`，表示有一条边连接 `from` 和 `toi`。除此以外，还有一个布尔数组 `hasApple`，其中 `hasApple[i] = true` 代表节点 `i` 有一个苹果，否则，节点 `i` 没有苹果。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-21-23-56-52.png)

```txt
输入：n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
输出：8
解释：上图展示了给定的树，其中红色节点表示有苹果。一个能收集到所有苹果的最优方案由绿色箭头表示。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-21-23-57-03.png)

```txt
输入：n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
输出：6
解释：上图展示了给定的树，其中红色节点表示有苹果。一个能收集到所有苹果的最优方案由绿色箭头表示。
```

示例 3：

```txt
输入：n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
输出：0
```

---

提示：

- `1 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai < bi <= n - 1`
- `hasApple.length == n`

## 2. 🎯 s.1 - DFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是节点数
- 空间复杂度：$O(n)$，存储邻接表和递归栈

算法思路：

- 从根节点 DFS，若子树中有苹果，则需要 +2（去和回）
- 子树有苹果的条件：子节点本身有苹果或其子树时间 > 0
