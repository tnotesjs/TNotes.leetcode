# [1466. 重新规划路线【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1466.%20%E9%87%8D%E6%96%B0%E8%A7%84%E5%88%92%E8%B7%AF%E7%BA%BF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)

`n` 座城市，从 `0` 到 `n-1` 编号，其间共有 `n-1` 条路线。因此，要想在两座不同城市之间旅行只有唯一一条路线可供选择（路线网形成一颗树）。去年，交通运输部决定重新规划路线，以改变交通拥堵的状况。

路线用 `connections` 表示，其中 `connections[i] = [a, b]` 表示从城市 `a` 到 `b` 的一条有向路线。

今年，城市 0 将会举办一场大型比赛，很多游客都想前往城市 0 。

请你帮助重新规划路线方向，使每个城市都可以访问城市 0 。返回需要变更方向的最小路线数。

题目数据 保证 每个城市在重新规划路线方向后都能到达城市 0 。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-12-47.png)

```txt
输入：n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
输出：3

解释：
更改以红色显示的路线的方向，使每个城市都可以到达城市 0 。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-12-52.png)

```txt
输入：n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
输出：2

解释：
更改以红色显示的路线的方向，使每个城市都可以到达城市 0 。
```

- 示例 3：

```txt
输入：n = 3, connections = [[1,0],[2,0]]
输出：0
```

---

提示：

- `2 <= n <= 5 * 10^4`
- `connections.length == n-1`
- `connections[i].length == 2`
- `0 <= connections[i][0], connections[i][1] <= n-1`
- `connections[i][0] != connections[i][1]`

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
