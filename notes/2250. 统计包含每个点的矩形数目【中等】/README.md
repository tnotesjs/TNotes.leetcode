# [2250. 统计包含每个点的矩形数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2250.%20%E7%BB%9F%E8%AE%A1%E5%8C%85%E5%90%AB%E6%AF%8F%E4%B8%AA%E7%82%B9%E7%9A%84%E7%9F%A9%E5%BD%A2%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 按高度分组 + 二分查找](#2--s1---按高度分组--二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-number-of-rectangles-containing-each-point/)

给你一个二维整数数组 `rectangles`，其中 `rectangles[i] = [li, hi]` 表示第 `i` 个矩形长为 `li` 高为 `hi`。给你一个二维整数数组 `points`，其中 `points[j] = [xj, yj]` 是坐标为 `(xj, yj)` 的一个点。

第 `i` 个矩形的 左下角 在 `(0, 0)` 处，右上角 在 `(li, hi)`。

请你返回一个整数数组 `count`，长度为 `points.length`，其中 `count[j]`是 包含 第 `j` 个点的矩形数目。

如果 `0 <= xj <= li` 且 `0 <= yj <= hi`，那么我们说第 `i` 个矩形包含第 `j` 个点。如果一个点刚好在矩形的 边上，这个点也被视为被矩形包含。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-11-38-54.png)

```txt
输入：rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]
输出：[2,1]
解释：
第一个矩形不包含任何点。
第二个矩形只包含一个点 (2, 1)。
第三个矩形包含点 (2, 1) 和 (1, 4)。
包含点 (2, 1) 的矩形数目为 2。
包含点 (1, 4) 的矩形数目为 1。
所以，我们返回 [2, 1]。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-11-38-59.png)

```txt
输入：rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]
输出：[1,3]
解释：
第一个矩形只包含点 (1, 1)。
第二个矩形只包含点 (1, 1)。
第三个矩形包含点 (1, 3) 和 (1, 1)。
包含点 (1, 3) 的矩形数目为 1。
包含点 (1, 1) 的矩形数目为 3。
所以，我们返回 [1, 3]。
```

---

提示：

- `1 <= rectangles.length, points.length <= 5 * 10^4`
- `rectangles[i].length == points[j].length == 2`
- `1 <= li, xj <= 10^9`
- `1 <= hi, yj <= 100`
- 所有 `rectangles` 互不相同。
- 所有 `points` 互不相同。

## 2. 🎯 s.1 - 按高度分组 + 二分查找

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O((n + q) \log n)$，其中 n 是矩形数量，q 是查询数量
- 空间复杂度：$O(n)$，分组存储矩形

算法思路：

- 将矩形按高度分组（高度最大 100），每组内按横坐标排序
- 对每个查询点 $(px, py)$，遍历所有 $\ge py$ 的高度组
- 在每组内用二分查找统计横坐标 $\ge px$ 的矩形数量，累加即为答案
