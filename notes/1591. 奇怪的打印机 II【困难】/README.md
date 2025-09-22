# [1591. 奇怪的打印机 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1591.%20%E5%A5%87%E6%80%AA%E7%9A%84%E6%89%93%E5%8D%B0%E6%9C%BA%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/strange-printer-ii/)

给你一个奇怪的打印机，它有如下两个特殊的打印规则：

- 每一次操作时，打印机会用同一种颜色打印一个矩形的形状，每次打印会覆盖矩形对应格子里原本的颜色。
- 一旦矩形根据上面的规则使用了一种颜色，那么 **相同的颜色不能再被使用** 。

给你一个初始没有颜色的 `m x n` 的矩形 `targetGrid` ，其中 `targetGrid[row][col]` 是位置 `(row, col)` 的颜色。

如果你能按照上述规则打印出矩形 `targetGrid` ，请你返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-10-51.png)

```txt
输入：targetGrid = [[1,1,1,1],[1,2,2,1],[1,2,2,1],[1,1,1,1]]
输出：true
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-10-56.png)

```txt
输入：targetGrid = [[1,1,1,1],[1,1,3,3],[1,1,3,4],[5,5,1,4]]
输出：true
```

- **示例 3：**

```txt
输入：targetGrid = [[1,2,1],[2,1,2],[1,2,1]]
输出：false
解释：没有办法得到 targetGrid ，因为每一轮操作使用的颜色互不相同。
```

- **示例 4：**

```txt
输入：targetGrid = [[1,1,1],[3,1,3]]
输出：false
```

---

**提示：**

- `m == targetGrid.length`
- `n == targetGrid[i].length`
- `1 <= m, n <= 60`
- `1 <= targetGrid[row][col] <= 60`

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
