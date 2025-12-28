# [1901. 寻找峰值 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1901.%20%E5%AF%BB%E6%89%BE%E5%B3%B0%E5%80%BC%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-a-peak-element-ii/)

一个 2D 网格中的 峰值 是指那些 严格大于 其相邻格子(上、下、左、右)的元素。

给你一个 从 0 开始编号 的 `m x n` 矩阵 `mat` ，其中任意两个相邻格子的值都 不相同。找出 任意一个 峰值 `mat[i][j]` 并 返回其位置 `[i,j]`。

你可以假设整个矩阵周边环绕着一圈值为 `-1` 的格子。

要求必须写出时间复杂度为 `O(m log(n))` 或 `O(n log(m))` 的算法

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-00-16.png)

```txt
输入: mat = [[1,4],[3,2]]
输出: [0,1]
解释: 3 和 4 都是峰值，所以[1,0]和[0,1]都是可接受的答案。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-00-21.png)

```txt
输入: mat = [[10,20,15],[21,30,14],[7,16,32]]
输出: [1,1]
解释: 30 和 32 都是峰值，所以[1,1]和[2,2]都是可接受的答案。
```

---

提示：

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 500`
- `1 <= mat[i][j] <= 10^5`
- 任意两个相邻元素均不相等.

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
