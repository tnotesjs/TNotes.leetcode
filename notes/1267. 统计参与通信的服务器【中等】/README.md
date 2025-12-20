# [1267. 统计参与通信的服务器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1267.%20%E7%BB%9F%E8%AE%A1%E5%8F%82%E4%B8%8E%E9%80%9A%E4%BF%A1%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-servers-that-communicate/)

这里有一幅服务器分布图，服务器的位置标识在 `m * n` 的整数矩阵网格 `grid` 中，1 表示单元格上有服务器，0 表示没有。

如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。

请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-20-04-36.png)

```txt
输入：grid = [
  [1, 0],
  [0, 1]
]

输出：0
解释：没有一台服务器能与其他服务器进行通信。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-20-04-43.png)

```txt
输入：grid = [
  [1, 0],
  [1, 1]
]

输出：3
解释：所有这些服务器都至少可以与一台别的服务器进行通信。
```

- 示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-20-04-49.png)

```txt
输入：grid = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
]

输出：4
解释：第一行的两台服务器互相通信，第三列的两台服务器互相通信，但右下角的服务器无法与其他服务器通信。
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m <= 250`
- `1 <= n <= 250`
- `grid[i][j] == 0 or 1`

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
