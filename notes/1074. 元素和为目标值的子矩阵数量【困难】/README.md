# [1074. 元素和为目标值的子矩阵数量【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1074.%20%E5%85%83%E7%B4%A0%E5%92%8C%E4%B8%BA%E7%9B%AE%E6%A0%87%E5%80%BC%E7%9A%84%E5%AD%90%E7%9F%A9%E9%98%B5%E6%95%B0%E9%87%8F%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-submatrices-that-sum-to-target/)

给出矩阵 `matrix` 和目标值 `target`，返回元素总和等于目标值的非空子矩阵的数量。

子矩阵 `x1, y1, x2, y2` 是满足 `x1 <= x <= x2` 且 `y1 <= y <= y2` 的所有单元 `matrix[x][y]` 的集合。

如果 `(x1, y1, x2, y2)` 和 `(x1', y1', x2', y2')` 两个子矩阵中部分坐标不同（如：`x1 != x1'`），那么这两个子矩阵也不同。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-41-04.png)

```txt
输入：matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
输出：4
解释：四个只含 0 的 1x1 子矩阵。
```

- **示例 2：**

```txt
输入：matrix = [[1,-1],[-1,1]], target = 0
输出：5
解释：两个 1x2 子矩阵，加上两个 2x1 子矩阵，再加上一个 2x2 子矩阵。
```

- **示例 3：**

```txt
输入：matrix = [[904]], target = 0
输出：0
```

**提示：**

- `1 <= matrix.length <= 100`
- `1 <= matrix[0].length <= 100`
- `-1000 <= matrix[i][j] <= 1000`
- `-10^8 <= target <= 10^8`

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
