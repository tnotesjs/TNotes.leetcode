# [3025. 人员站位的方案数 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3025.%20%E4%BA%BA%E5%91%98%E7%AB%99%E4%BD%8D%E7%9A%84%E6%96%B9%E6%A1%88%E6%95%B0%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-number-of-ways-to-place-people-i/)

给你一个 `n x 2` 的二维数组 `points` ，它表示二维平面上的一些点坐标，其中 `points[i] = [xi, yi]` 。

计算点对 `(A, B)` 的数量，其中

- `A` 在 `B` 的左上角，并且
- 它们形成的长方形中（或直线上）没有其它点（**包括边界**）。

返回数量。

---

- **示例 1：**

```txt
输入：points = [[1,1],[2,2],[3,3]]
输出：0
```

- 解释：
  - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-42-08.png)
  - 没有办法选择 `A` 和 `B`，使得 `A` 在 `B` 的左上角。

---

- **示例 2：**

```txt
输入：points = [[6,2],[4,4],[2,6]]
输出：2
```

- 解释：
  - ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-42-33.png)
  - 左边的是点对 `(points[1], points[0])`，其中 `points[1]` 在 `points[0]` 的左上角，并且形成的长方形内部是空的。
  - 中间的是点对 `(points[2], points[1])`，和左边的一样是合法的点对。
  - 右边的是点对 `(points[2], points[0])`，其中 `points[2]` 在 `points[0]` 的左上角，但 `points[1]` 在长方形内部，所以不是一个合法的点对。

---

- **示例 3：**

```txt
输入：points = [[3,1],[1,3],[1,1]]
输出：2
```

- 解释：
  - ![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-42-43.png)
  - 左边的是点对 `(points[2], points[0])`，其中 `points[2]` 在 `points[0]` 的左上角并且在它们形成的直线上没有其它点。注意两个点形成一条线的情况是合法的。
  - 中间的是点对 `(points[1], points[2])`，和左边一样也是合法的点对。
  - 右边的是点对 `(points[1], points[0])`，它不是合法的点对，因为 `points[2]` 在长方形的边上。

---

**提示：**

- `2 <= n <= 50`
- `points[i].length == 2`
- `0 <= points[i][0], points[i][1] <= 50`
- `points[i]` 点对两两不同。

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
