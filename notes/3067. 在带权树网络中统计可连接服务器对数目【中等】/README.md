# [3067. 在带权树网络中统计可连接服务器对数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3067.%20%E5%9C%A8%E5%B8%A6%E6%9D%83%E6%A0%91%E7%BD%91%E7%BB%9C%E4%B8%AD%E7%BB%9F%E8%AE%A1%E5%8F%AF%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AF%B9%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/)

给你一棵无根带权树，树中总共有 `n` 个节点，分别表示 `n` 个服务器，服务器从 `0` 到 `n - 1` 编号。同时给你一个数组 `edges`，其中 `edges[i] = [ai, bi, weighti]` 表示节点 `ai` 和 `bi` 之间有一条双向边，边的权值为 `weighti`。再给你一个整数 `signalSpeed`。

如果两台服务器 `a` 和 `b` 是通过服务器 `c` 可连接的，则：

- `a < b`，`a != c` 且 `b != c`。
- 从 `c` 到 `a` 的距离是可以被 `signalSpeed` 整除的。
- 从 `c` 到 `b` 的距离是可以被 `signalSpeed` 整除的。
- 从 `c` 到 `b` 的路径与从 `c` 到 `a` 的路径没有任何公共边。

请你返回一个长度为 `n` 的整数数组 `count`，其中 `count[i]` 表示通过服务器 `i` 可连接 的服务器对的 数目。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-53-46.png)

```txt
输入：edges = [[0,1,1],[1,2,5],[2,3,13],[3,4,9],[4,5,2]], signalSpeed = 1
输出：[0,4,6,6,4,0]
解释：由于 signalSpeed 等于 1，count[c] 等于所有从 c 开始且没有公共边的路径对数目。
在输入图中，count[c] 等于服务器 c 左边服务器数目乘以右边服务器数目。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-53-52.png)

```txt
输入：edges = [[0,6,3],[6,5,3],[0,3,1],[3,2,7],[3,1,6],[3,4,2]], signalSpeed = 3
输出：[2,0,0,0,0,0,2]
解释：通过服务器 0，有 2 个可连接服务器对(4, 5) 和 (4, 6)。
通过服务器 6，有 2 个可连接服务器对 (4, 5) 和 (0, 5)。
所有服务器对都必须通过服务器 0 或 6 才可连接，所以其他服务器对应的可连接服务器对数目都为 0。
```

---

提示：

- `2 <= n <= 1000`
- `edges.length == n - 1`
- `edges[i].length == 3`
- `0 <= ai, bi < n`
- `edges[i] = [ai, bi, weighti]`
- `1 <= weighti <= 10^6`
- `1 <= signalSpeed <= 10^6`
- 输入保证 `edges` 构成一棵合法的树。

## 2. 🎯 s.1 - 枚举根节点 + DFS

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，枚举每个节点作为中间节点，对每个方向 DFS
- 空间复杂度：$O(n)$，存储邻接表和递归栈

算法思路：

- 枚举每个节点 c 作为连接的中间节点
- 对 c 的每个邻居方向进行 DFS，统计距离能被 signalSpeed 整除的节点数
- 利用乘法原理，将之前方向的可连接节点数与当前方向相乘并累加

