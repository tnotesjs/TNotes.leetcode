# [2975. 移除栅栏得到的正方形田地的最大面积【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2975.%20%E7%A7%BB%E9%99%A4%E6%A0%85%E6%A0%8F%E5%BE%97%E5%88%B0%E7%9A%84%E6%AD%A3%E6%96%B9%E5%BD%A2%E7%94%B0%E5%9C%B0%E7%9A%84%E6%9C%80%E5%A4%A7%E9%9D%A2%E7%A7%AF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-square-area-by-removing-fences-from-a-field/)

有一个大型的 `(m - 1) x (n - 1)` 矩形田地，其两个对角分别是 `(1, 1)` 和 `(m, n)` ，田地内部有一些水平栅栏和垂直栅栏，分别由数组 `hFences` 和 `vFences` 给出。

水平栅栏为坐标 `(hFences[i], 1)` 到 `(hFences[i], n)`，垂直栅栏为坐标 `(1, vFences[i])` 到 `(m, vFences[i])`。

返回通过 移除 一些栅栏（可能不移除）所能形成的最大面积的 正方形 田地的面积，或者如果无法形成正方形田地则返回 `-1`。

由于答案可能很大，所以请返回结果对 `10^9 + 7` 取余 后的值。

---

注意： 田地外围两个水平栅栏（坐标 `(1, 1)` 到 `(1, n)` 和坐标 `(m, 1)` 到 `(m, n)` ）以及两个垂直栅栏（坐标 `(1, 1)` 到 `(m, 1)` 和坐标 `(1, n)` 到 `(m, n)` ）所包围。这些栅栏 不能 被移除。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-14-23.png)

```txt
输入：m = 4, n = 3, hFences = [2,3], vFences = [2]
输出：4
解释：移除位于 2 的水平栅栏和位于 2 的垂直栅栏将得到一个面积为 4 的正方形田地。
```

---

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-14-12.png)

```txt
输入：m = 6, n = 7, hFences = [2], vFences = [4]
输出：-1
解释：可以证明无法通过移除栅栏形成正方形田地。
```

---

提示：

- `3 <= m, n <= 10^9`
- `1 <= hFences.length, vFences.length <= 600`
- `1 < hFences[i] < m`
- `1 < vFences[i] < n`
- `hFences` 和 `vFences` 中的元素是唯一的。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
