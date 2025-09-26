# [1981. 最小化目标值与所选元素的差【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1981.%20%E6%9C%80%E5%B0%8F%E5%8C%96%E7%9B%AE%E6%A0%87%E5%80%BC%E4%B8%8E%E6%89%80%E9%80%89%E5%85%83%E7%B4%A0%E7%9A%84%E5%B7%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimize-the-difference-between-target-and-chosen-elements/)

给你一个大小为 `m x n` 的整数矩阵 `mat` 和一个整数 `target` 。

从矩阵的 **每一行** 中选择一个整数，你的目标是  **最小化**  所有选中元素之  **和**  与目标值 `target` 的 **绝对差** 。

返回 **最小的绝对差** 。

`a` 和 `b` 两数字的 **绝对差** 是 `a - b` 的绝对值。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-48-26.png)

```txt
输入：mat = [[1,2,3],[4,5,6],[7,8,9]], target = 13
输出：0
解释：一种可能的最优选择方案是：
- 第一行选出 1
- 第二行选出 5
- 第三行选出 7
所选元素的和是 13 ，等于目标值，所以绝对差是 0 。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-48-33.png)

```txt
输入：mat = [[1],[2],[3]], target = 100
输出：94
解释：唯一一种选择方案是：
- 第一行选出 1
- 第二行选出 2
- 第三行选出 3
所选元素的和是 6 ，绝对差是 94 。
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-48-40.png)

```txt
输入：mat = [[1,2,9,8,7]], target = 6
输出：1
解释：最优的选择方案是选出第一行的 7 。
绝对差是 1 。
```

---

**提示：**

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 70`
- `1 <= mat[i][j] <= 70`
- `1 <= target <= 800`

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
