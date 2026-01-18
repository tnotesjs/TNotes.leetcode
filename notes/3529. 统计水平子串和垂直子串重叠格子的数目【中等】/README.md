# [3529. 统计水平子串和垂直子串重叠格子的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3529.%20%E7%BB%9F%E8%AE%A1%E6%B0%B4%E5%B9%B3%E5%AD%90%E4%B8%B2%E5%92%8C%E5%9E%82%E7%9B%B4%E5%AD%90%E4%B8%B2%E9%87%8D%E5%8F%A0%E6%A0%BC%E5%AD%90%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-cells-in-overlapping-horizontal-and-vertical-substrings/)

给你一个由字符组成的 `m x n` 矩阵 `grid` 和一个字符串 `pattern`。

水平子串 是从左到右的一段连续字符序列。如果子串到达了某行的末尾，它将换行并从下一行的第一个字符继续。不会 从最后一行回到第一行。

垂直子串 是从上到下的一段连续字符序列。如果子串到达了某列的底部，它将换列并从下一列的第一个字符继续。不会 从最后一列回到第一列。

请统计矩阵中满足以下条件的单元格数量：

- 该单元格必须属于 至少 一个等于 `pattern` 的水平子串，且属于 至少 一个等于 `pattern` 的垂直子串。

返回满足条件的单元格数量。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-57-55.png)

输入：grid = [["a","a","c","c"],["b","b","b","c"],["a","a","b","a"],["c","a","a","c"],["a","a","b","a"]], pattern = "abaca"

输出：1

解释：

`"abaca"` 作为一个水平子串（蓝色）和一个垂直子串（红色）各出现一次，并在一个单元格（紫色）处相交。

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-58-05.png)

输入：grid = [["c","a","a","a"],["a","a","b","a"],["b","b","a","a"],["a","a","b","a"]], pattern = "aba"

输出：4

解释：

上述被标记的单元格都同时属于至少一个 `"aba"` 的水平和垂直子串。

---

示例 3：

输入：grid = [["a"]], pattern = "a"

输出：1

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 10^5`
- `1 <= pattern.length <= m * n`
- `grid` 和 `pattern` 仅由小写英文字母组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
