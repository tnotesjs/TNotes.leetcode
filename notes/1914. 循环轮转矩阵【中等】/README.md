# [1914. 循环轮转矩阵【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1914.%20%E5%BE%AA%E7%8E%AF%E8%BD%AE%E8%BD%AC%E7%9F%A9%E9%98%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/cyclically-rotating-a-grid/)

给你一个大小为 `m x n` 的整数矩阵 `grid`​​​ ，其中 `m` 和 `n` 都是 **偶数** ；另给你一个整数 `k` 。

矩阵由若干层组成，如下图所示，每种颜色代表一层：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-04-45.png)

矩阵的循环轮转是通过分别循环轮转矩阵中的每一层完成的。在对某一层进行一次循环旋转操作时，层中的每一个元素将会取代其  **逆时针** 方向的相邻元素。轮转示例如下：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-04-55.png)

返回执行 `k` 次循环轮转操作后的矩阵。

---

- **示例 1：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-05-08.png)

```txt
输入：grid = [[40,10],[30,20]], k = 1
输出：[[10,20],[40,30]]
解释：上图展示了矩阵在执行循环轮转操作时每一步的状态。
```

- **示例 2：**

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-05-21.png)

![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-05-39.png)

![图 5](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-05-50.png)

```txt
输入：grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], k = 2
输出：[[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]
解释：上图展示了矩阵在执行循环轮转操作时每一步的状态。
```

---

**提示：**

- `m == grid.length`
- `n == grid[i].length`
- `2 <= m, n <= 50`
- `m` 和 `n` 都是 **偶数**
- `1 <= grid[i][j] <= 5000`
- `1 <= k <= 10^9`

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
