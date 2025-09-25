# [1857. 有向图中最大颜色值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1857.%20%E6%9C%89%E5%90%91%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E9%A2%9C%E8%89%B2%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-color-value-in-a-directed-graph/)

给你一个  **有向图** ，它含有  `n`  个节点和 `m`  条边。节点编号从  `0` 到  `n - 1` 。

给你一个字符串  `colors` ，其中  `colors[i]`  是小写英文字母，表示图中第 `i`  个节点的 **颜色** （下标从 **0**  开始）。同时给你一个二维数组  `edges` ，其中  `edges[j] = [aj, bj]`  表示从节点  `aj`  到节点  `bj`  有一条  **有向边** 。

图中一条有效 **路径**  是一个点序列  `x1 -> x2 -> x3 -> ... -> xk` ，对于所有  `1 <= i < k` ，从  `xi` 到  `xi+1`  在图中有一条有向边。路径的 **颜色值**  是路径中 **出现次数最多** 颜色的节点数目。

请你返回给定图中有效路径里面的  **最大颜色值** **。**如果图中含有环，请返回 `-1` 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-36-23.png)

```txt
输入：colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
输出：3
解释：路径 0 -> 2 -> 3 -> 4 含有 3 个颜色为 "a" 的节点（上图中的红色节点）。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-36-27.png)

```txt
输入：colors = "a", edges = [[0,0]]
输出：-1
解释：从 0 到 0 有一个环。
```

---

**提示：**

- `n == colors.length`
- `m == edges.length`
- `1 <= n <= 10^5`
- `0 <= m <= 10^5`
- `colors`  只含有小写英文字母。
- `0 <= aj, bj < n`

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
