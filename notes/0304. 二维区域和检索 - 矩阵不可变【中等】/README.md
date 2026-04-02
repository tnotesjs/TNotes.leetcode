# [0304. 二维区域和检索 - 矩阵不可变【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0304.%20%E4%BA%8C%E7%BB%B4%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%A3%80%E7%B4%A2%20-%20%E7%9F%A9%E9%98%B5%E4%B8%8D%E5%8F%AF%E5%8F%98%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二维前缀和](#2--s1---二维前缀和)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/range-sum-query-2d-immutable/)

给定一个二维矩阵 `matrix`，以下类型的多个请求：

- 计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 `(row1, col1)`，右下角 为 `(row2, col2)`。

实现 `NumMatrix` 类：

- `NumMatrix(int[][] matrix)` 给定整数矩阵 `matrix` 进行初始化
- `int sumRegion(int row1, int col1, int row2, int col2)` 返回 左上角 `(row1, col1)` 、右下角 `(row2, col2)` 所描述的子矩阵的元素 总和。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-11-11-50-06.png)

```txt
输入:
["NumMatrix","sumRegion","sumRegion","sumRegion"]
[
  [
    [
      [3,0,1,4,2],
      [5,6,3,2,1],
      [1,2,0,1,5],
      [4,1,0,1,7],
      [1,0,3,0,5]
    ]
  ],
  [2,1,4,3],
  [1,1,2,2],
  [1,2,2,4]
]
输出:
[null, 8, 11, 12]

解释:
NumMatrix numMatrix = new NumMatrix([
  [3,0,1,4,2],
  [5,6,3,2,1],
  [1,2,0,1,5],
  [4,1,0,1,7],
  [1,0,3,0,5]
]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
```

---

提示：

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 200`
- `-10^5 <= matrix[i][j] <= 10^5`
- `0 <= row1 <= row2 < m`
- `0 <= col1 <= col2 < n`
- 最多调用 `10^4` 次 `sumRegion` 方法

## 2. 🎯 s.1 - 二维前缀和

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：初始化 $O(m \times n)$，查询 $O(1)$
- 空间复杂度：$O(m \times n)$，前缀和数组

算法思路：

- 预处理二维前缀和数组，$prefix[i][j]$ 表示左上角 $(0,0)$ 到 $(i-1,j-1)$ 的元素总和
- 查询时利用容斥原理：$sum = prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1]$
