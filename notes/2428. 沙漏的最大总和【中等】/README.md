# [2428. 沙漏的最大总和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2428.%20%E6%B2%99%E6%BC%8F%E7%9A%84%E6%9C%80%E5%A4%A7%E6%80%BB%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-sum-of-an-hourglass/)

给你一个大小为 `m x n` 的整数矩阵 `grid`。

按以下形式将矩阵的一部分定义为一个 沙漏 ：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-05-34.png)

返回沙漏中元素的 最大 总和。

---

注意：沙漏无法旋转且必须整个包含在矩阵中。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-05-41.png)

```txt
输入：grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
输出：30
解释：上图中的单元格表示元素总和最大的沙漏：6 + 2 + 1 + 2 + 9 + 2 + 8 = 30。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-05-48.png)

```txt
输入：grid = [[1,2,3],[4,5,6],[7,8,9]]
输出：35
解释：上图中的单元格表示元素总和最大的沙漏：1 + 2 + 3 + 5 + 7 + 8 + 9 = 35。
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `3 <= m, n <= 150`
- `0 <= grid[i][j] <= 10^6`

## 2. 🎯 s.1 - 枚举

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 m 和 n 是矩阵的行数和列数
- 空间复杂度：$O(1)$

算法思路：

- 枚举所有可能的 3×3 沙漏形状的左上角位置
- 计算每个沙漏图案 7 个格子的和
- 取所有沙漏和的最大值
