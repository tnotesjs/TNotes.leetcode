# [0684. 冗余连接【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0684.%20%E5%86%97%E4%BD%99%E8%BF%9E%E6%8E%A5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/redundant-connection/)

树可以看成是一个连通且 无环 的 无向 图。

给定一个图，该图从一棵 `n` 个节点 (节点值 `1～n`) 的树中添加一条边后获得。添加的边的两个不同顶点编号在 `1` 到 `n` 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 `n` 的二维数组 `edges`，`edges[i] = [ai, bi]` 表示图中在 `ai` 和 `bi` 之间存在一条边。

请找出一条可以删去的边，删除后可使得剩余部分是一个有着 `n` 个节点的树。如果有多个答案，则返回数组 `edges` 中最后出现的那个。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-31-14.png)

```txt
输入: edges = [[1,2], [1,3], [2,3]]
输出: [2,3]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-31-20.png)

```txt
输入: edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]
输出: [1,4]
```

---

提示：

- `n == edges.length`
- `3 <= n <= 1000`
- `edges[i].length == 2`
- `1 <= ai < bi <= edges.length`
- `ai != bi`
- `edges` 中无重复元素
- 给定的图是连通的

## 2. 🎯 s.1 - 并查集

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times \alpha(n))$，其中 $\alpha$ 是反阿克曼函数，近似 $O(n)$
- 空间复杂度：$O(n)$

算法思路：

- 使用并查集，每次添加边时检查两端点是否已连通
- 若已连通则该边为冗余边，直接返回
- 使用路径压缩 + 按秩合并优化
