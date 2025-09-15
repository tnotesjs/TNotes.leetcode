# [0782. 变为棋盘【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0782.%20%E5%8F%98%E4%B8%BA%E6%A3%8B%E7%9B%98%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/transform-to-chessboard/)

一个  `n x n`  的二维网络  `board`  仅由  `0`  和  `1`  组成  。每次移动，你能交换任意两列或是两行的位置。

返回 *将这个矩阵变为   **“棋盘”**   所需的最小移动次数* 。如果不存在可行的变换，输出 `-1`。

**“棋盘”** 是指任意一格的上下左右四个方向的值均与本身不同的矩阵。

---

- **示例 1:**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-40-10.png)

```txt
输入: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
输出: 2
解释:一种可行的变换方式如下，从左到右：
第一次移动交换了第一列和第二列。
第二次移动交换了第二行和第三行。
```

- **示例 2:**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-40-17.png)

```txt
输入: board = [[0, 1], [1, 0]]
输出: 0
解释: 注意左上角的格值为0时也是合法的棋盘，也是合法的棋盘.
```

- **示例 3:**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-40-22.png)

```txt
输入: board = [[1, 0], [1, 0]]
输出: -1
解释: 任意的变换都不能使这个输入变为合法的棋盘。
```

---

**提示：**

- `n == board.length`
- `n == board[i].length`
- `2 <= n <= 30`
- `board[i][j]`  将只包含  `0`或  `1`

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
