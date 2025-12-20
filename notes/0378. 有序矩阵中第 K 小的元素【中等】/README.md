# [0378. 有序矩阵中第 K 小的元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0378.%20%E6%9C%89%E5%BA%8F%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%AC%AC%20K%20%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/)

给你一个 `n x n` 矩阵 `matrix` ，其中每行和每列元素均按升序排序，找到矩阵中第 `k` 小的元素。  
请注意，它是 排序后 的第 `k` 小元素，而不是第 `k` 个 不同 的元素。

你必须找到一个内存复杂度优于 `O(n^2)` 的解决方案。

---

- 示例 1：

```txt
输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
输出：13
解释：矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小元素是 13
```

- 示例 2：

```txt
输入：matrix = [[-5]], k = 1
输出：-5
```

---

提示：

- `n == matrix.length`
- `n == matrix[i].length`
- `1 <= n <= 300`
- `-10^9 <= matrix[i][j] <= 10^9`
- 题目数据 保证 `matrix` 中的所有行和列都按 非递减顺序 排列
- `1 <= k <= n^2`

进阶：

- 你能否用一个恒定的内存(即 `O(1)` 内存复杂度)来解决这个问题?
- 你能在 `O(n)` 的时间复杂度下解决这个问题吗?这个方法对于面试来说可能太超前了，但是你会发现阅读这篇文章（ [this paper][1] ）很有趣。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [this paper][1]

[1]: http://www.cse.yorku.ca/~andy/pubs/X+Y.pdf
