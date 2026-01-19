# [2440. 创建价值相同的连通块【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2440.%20%E5%88%9B%E5%BB%BA%E4%BB%B7%E5%80%BC%E7%9B%B8%E5%90%8C%E7%9A%84%E8%BF%9E%E9%80%9A%E5%9D%97%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/create-components-with-same-value/)

有一棵 `n` 个节点的无向树，节点编号为 `0` 到 `n - 1`。

给你一个长度为 `n` 下标从 0 开始的整数数组 `nums`，其中 `nums[i]` 表示第 `i` 个节点的值。同时给你一个长度为 `n - 1` 的二维整数数组 `edges`，其中 `edges[i] = [ai, bi]` 表示节点 `ai` 与 `bi` 之间有一条边。

你可以 删除 一些边，将这棵树分成几个连通块。一个连通块的 价值 定义为这个连通块中 所有 节点 `i` 对应的 `nums[i]` 之和。

你需要删除一些边，删除后得到的各个连通块的价值都相等。请返回你可以删除的边数 最多 为多少。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-08-53.png)

```txt
输入：nums = [6,2,2,2,6], edges = [[0,1],[1,2],[1,3],[3,4]]
输出：2
解释：上图展示了我们可以删除边 [0,1] 和 [3,4]。得到的连通块为 [0]，[1,2,3] 和 [4]。每个连通块的价值都为 6。可以证明没有别的更好的删除方案存在了，所以答案为 2。
```

示例 2：

```txt
输入：nums = [2], edges = []
输出：0
解释：没有任何边可以删除。
```

---

提示：

- `1 <= n <= 2 * 10^4`
- `nums.length == n`
- `1 <= nums[i] <= 50`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= edges[i][0], edges[i][1] <= n - 1`
- `edges` 表示一棵合法的树。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
