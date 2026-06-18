# [0074. 搜索二维矩阵【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0074.%20%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 一次二分查找](#2--s1---一次二分查找)
- [3. 🎯 s.2 - 两次二分查找](#3--s2---两次二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/search-a-2d-matrix/)

给你一个满足下述两条属性的 `m x n` 整数矩阵：

- 每行中的整数从左到右按非严格递增顺序排列。
- 每行的第一个整数大于前一行的最后一个整数。

给你一个整数 `target`，如果 `target` 在矩阵中，返回 `true`；否则，返回 `false`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-02-21-32-16.png)

```
输入：matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
], target = 3
输出：true
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-02-21-32-35.png)

```
输入：matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
], target = 13
输出：false
```

提示：

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`

## 2. 🎯 s.1 - 一次二分查找

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log(m \times n))$，其中 $m$ 和 $n$ 分别是矩阵的行数和列数，对虚拟展平后的一维有序数组做一次二分查找
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 矩阵满足“每行递增”且“下一行首元素大于上一行末元素”，因此按行展开后就是一个严格有序的一维数组，可以直接做一次二分查找
- 将一维下标 `mid` 映射回二维坐标：行号为 `mid / n`，列号为 `mid % n`（`n` 为列数），无需额外空间展平矩阵

## 3. 🎯 s.2 - 两次二分查找

::: code-group

<<< ./solutions/2/1.c [c]

<<< ./solutions/2/1.js [js]

<<< ./solutions/2/1.py [py]

:::

- 时间复杂度：$O(\log m + \log n)$，先对 $m$ 行做一次二分定位行号，再在该行内对 $n$ 列做一次二分查找
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 利用矩阵“每行首元素大于上一行末元素”的性质，先在所有行之间做二分查找：若 `target` 落在某行的 `[行首, 行尾]` 区间内，则命中目标行；否则根据 `target` 与行首、行尾的大小关系收缩上下界
- 确定目标行后，再在该行内做一次标准二分查找即可
