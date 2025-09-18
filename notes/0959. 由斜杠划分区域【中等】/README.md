# [0959. 由斜杠划分区域【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0959.%20%E7%94%B1%E6%96%9C%E6%9D%A0%E5%88%92%E5%88%86%E5%8C%BA%E5%9F%9F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/regions-cut-by-slashes/)

在由 `1 x 1` 方格组成的 `n x n` 网格 `grid` 中，每个 `1 x 1` 方块由 `'/'`、`'\'` 或空格构成。这些字符会将方块划分为一些共边的区域。

给定网格 `grid` 表示为一个字符串数组，返回 _区域的数量_ 。

请注意，反斜杠字符是转义的，因此 `'\'` 用 `'\\'` 表示。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-24-23.png)

```txt
输入：grid = [" /","/ "]
输出：2
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-24-31.png)

```txt
输入：grid = [" /","  "]
输出：1
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-24-39.png)

```txt
输入：grid = ["/\\","\\/"]
输出：5
解释：回想一下，因为 \ 字符是转义的，所以 "/\\" 表示 /\，而 "\\/" 表示 \/。
```

---

**提示：**

- `n == grid.length == grid[i].length`
- `1 <= n <= 30`
- `grid[i][j]` 是 `'/'`、`'\'`、或 `' '`

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
