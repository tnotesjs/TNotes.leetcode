# [0885. 螺旋矩阵 III【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0885.%20%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5%20III%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/spiral-matrix-iii/)

在 `rows x cols` 的网格上，你从单元格 `(rStart, cStart)` 面朝东面开始。网格的西北角位于第一行第一列，网格的东南角位于最后一行最后一列。

你需要以顺时针按螺旋状行走，访问此网格中的每个位置。每当移动到网格的边界之外时，需要继续在网格之外行走（但稍后可能会返回到网格边界）。

最终，我们到过网格的所有 `rows x cols` 个空间。

按照访问顺序返回表示网格位置的坐标列表。

---

- **示例 1：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-12-04-35.png)

```txt
输入：rows = 1, cols = 4, rStart = 0, cStart = 0
输出：[
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3]
]
```

- **示例 2：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-12-04-28.png)

```txt
输入：rows = 5, cols = 6, rStart = 1, cStart = 4
输出：[
  [1, 4],
  [1, 5],
  [2, 5],
  [2, 4],
  [2, 3],
  [1, 3],
  [0, 3],
  [0, 4],
  [0, 5],
  [3, 5],
  [3, 4],
  [3, 3],
  [3, 2],
  [2, 2],
  [1, 2],
  [0, 2],
  [4, 5],
  [4, 4],
  [4, 3],
  [4, 2],
  [4, 1],
  [3, 1],
  [2, 1],
  [1, 1],
  [0, 1],
  [4, 0],
  [3, 0],
  [2, 0],
  [1, 0],
  [0, 0]
]
```

---

**提示：**

- `1 <= rows, cols <= 100`
- `0 <= rStart < rows`
- `0 <= cStart < cols`

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
