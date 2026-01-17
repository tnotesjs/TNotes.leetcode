# [1260. 二维网格迁移【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1260.%20%E4%BA%8C%E7%BB%B4%E7%BD%91%E6%A0%BC%E8%BF%81%E7%A7%BB%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 模拟索引](#2--s1---模拟索引)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shift-2d-grid/)

给你一个 `m` 行 `n` 列的二维网格 `grid` 和一个整数 `k`。你需要将 `grid` 迁移 `k` 次。

每次「迁移」操作将会引发下述活动：

- 位于 `grid[i][j]`（`j < n - 1`）的元素将会移动到 `grid[i][j + 1]`。
- 位于 `grid[i][n - 1]` 的元素将会移动到 `grid[i + 1][0]`。
- 位于 `grid[m - 1][n - 1]` 的元素将会移动到 `grid[0][0]`。

请你返回 `k` 次迁移操作后最终得到的 二维网格。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-20-00-46.png)

```txt
输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
输出：[[9,1,2],[3,4,5],[6,7,8]]
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-20-01-02.png)

```txt
输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
```

---

示例 3：

```txt
输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
输出：[[1,2,3],[4,5,6],[7,8,9]]
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m <= 50`
- `1 <= n <= 50`
- `-1000 <= grid[i][j] <= 1000`
- `0 <= k <= 100`

## 2. 🎯 s.1 - 模拟索引

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(mn)$，单次展开重排
- 空间复杂度：$O(mn)$，新网格存放结果

算法思路：

- 将二维索引映射为一维序号 `idx = r * n + c`，整体长度 `len = m * n`
- 迁移 `k` 次等价于元素新位置 `newIdx = (idx + k) % len`，再映射回二维 `(newIdx / n, newIdx % n)` 填入结果
