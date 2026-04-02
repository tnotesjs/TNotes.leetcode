# [3070. 元素和小于等于 k 的子矩阵的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3070.%20%E5%85%83%E7%B4%A0%E5%92%8C%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E%20k%20%E7%9A%84%E5%AD%90%E7%9F%A9%E9%98%B5%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 前缀和 + 枚举](#2--s1---前缀和--枚举)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/)

给你一个下标从 0 开始的整数矩阵 `grid` 和一个整数 `k`。

返回包含 `grid` 左上角元素、元素和小于或等于 `k` 的 子矩阵的数目。

> 子矩阵 `(x1, y1, x2, y2)` 是一个通过选择所有 `x1 <= x <= x2` 且 `y1 <= y <= y2` 的元素形成的矩阵。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-55-47.png)

```txt
输入：grid = [[7,6,3],[6,6,1]], k = 18
输出：4
解释：如上图所示，只有 4 个子矩阵满足：包含 grid 的左上角元素，并且元素和小于或等于 18。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-55-53.png)

```txt
输入：grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20
输出：6
解释：如上图所示，只有 6 个子矩阵满足：包含 grid 的左上角元素，并且元素和小于或等于 20。
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= n, m <= 1000`
- `0 <= grid[i][j] <= 1000`
- `1 <= k <= 10^9`

## 2. 🎯 s.1 - 前缀和 + 枚举

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，遍历整个矩阵一次
- 空间复杂度：$O(m \times n)$，前缀和数组

算法思路：

- 题目要求统计左上角为 (0,0) 的子矩阵的个数，所以只需计算二维前缀和
- 对每个位置 (i,j)，前缀和 pre[i][j] 就是以 (0,0) 为左上角、(i,j) 为右下角的子矩阵元素和
- 如果前缀和 <= k，则计数加 1

