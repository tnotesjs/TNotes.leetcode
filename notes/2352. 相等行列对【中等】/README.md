# [2352. 相等行列对【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2352.%20%E7%9B%B8%E7%AD%89%E8%A1%8C%E5%88%97%E5%AF%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/equal-row-and-column-pairs/)

给你一个下标从 0 开始、大小为 `n x n` 的整数矩阵 `grid`，返回满足 `Ri` 行和 `Cj` 列相等的行列对 `(Ri, Cj)` 的数目。

如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-42-42.png)

```txt
输入：grid = [[3,2,1],[1,7,6],[2,7,7]]
输出：1
解释：存在一对相等行列对：
- (第 2 行，第 1 列)：[2,7,7]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-42-49.png)

```txt
输入：grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
输出：3
解释：存在三对相等行列对：
- (第 0 行，第 0 列)：[3,1,2,2]
- (第 2 行, 第 2 列)：[2,4,2,2]
- (第 3 行, 第 2 列)：[2,4,2,2]
```

---

提示：

- `n == grid.length == grid[i].length`
- `1 <= n <= 200`
- `1 <= grid[i][j] <= 10^5`

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 n 是矩阵的行数/列数
- 空间复杂度：$O(n^2)$，哈希表存储所有行

算法思路：

- 将每一行转为字符串作为哈希表的键，统计每种行出现的次数
- 遍历每一列，将列转为相同格式的字符串，在哈希表中查找匹配的行数
- 累加所有列匹配到的行数即为答案
