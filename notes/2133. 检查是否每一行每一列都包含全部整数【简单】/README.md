# [2133. 检查是否每一行每一列都包含全部整数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2133.%20%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E6%AF%8F%E4%B8%80%E8%A1%8C%E6%AF%8F%E4%B8%80%E5%88%97%E9%83%BD%E5%8C%85%E5%90%AB%E5%85%A8%E9%83%A8%E6%95%B4%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 逐行、逐列求和](#2--s1---逐行逐列求和)
- [3. 🎯 s.2 - 使用 Set](#3--s2---使用-set)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-every-row-and-column-contains-all-numbers/)

对一个大小为 `n x n` 的矩阵而言，如果其每一行和每一列都包含从 `1` 到 `n` 的 **全部** 整数（含 `1` 和 `n`），则认为该矩阵是一个 **有效** 矩阵。

给你一个大小为 `n x n` 的整数矩阵 `matrix` ，请你判断矩阵是否为一个有效矩阵：如果是，返回 `true` ；否则，返回 `false` 。

---

- **示例 1：**
- ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-07-31-22-37-07.png)

```txt
输入：matrix = [[1,2,3],[3,1,2],[2,3,1]]
输出：true
解释：在此例中，n = 3 ，每一行和每一列都包含数字 1、2、3 。
因此，返回 true 。
```

- **示例 2：**
- ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-07-31-22-37-13.png)

```txt
输入：matrix = [[1,1,1],[1,2,3],[1,2,3]]
输出：false
解释：在此例中，n = 3 ，但第一行和第一列不包含数字 2 和 3 。
因此，返回 false 。
```

---

**提示：**

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 100`
- `1 <= matrix[i][j] <= n`

## 2. 🎯 s.1 - 逐行、逐列求和

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 双百提交：
- ![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-07-31-22-39-33.png)

## 3. 🎯 s.2 - 使用 Set

::: code-group

<<< ./solutions/2/1.js [js]

:::
