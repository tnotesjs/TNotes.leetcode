# [0447. 回旋镖的数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0447.%20%E5%9B%9E%E6%97%8B%E9%95%96%E7%9A%84%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-boomerangs/)

给定平面上 `n` 对 互不相同 的点 `points`，其中 `points[i] = [xi, yi]`。回旋镖 是由点 `(i, j, k)` 表示的元组，其中 `i` 和 `j` 之间的欧式距离和 `i` 和 `k` 之间的欧式距离相等（需要考虑元组的顺序）。

返回平面上所有回旋镖的数量。

---

示例 1：

```txt
输入：points = [[0,0],[1,0],[2,0]]
输出：2
解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
```

示例 2：

```txt
输入：points = [[1,1],[2,2],[3,3]]
输出：2
```

示例 3：

```txt
输入：points = [[1,1]]
输出：0
```

---

提示：

- `n == points.length`
- `1 <= n <= 500`
- `points[i].length == 2`
- `-10^4 <= xi, yi <= 10^4`
- 所有点都 互不相同

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
